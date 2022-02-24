import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import { ObjectId } from "bson";
import { getRealmApp } from "./getRealmApp";
import recipeInterface from "./realmObjects/recipeInterface";
import recipeSchema from "./schemas/recipeSchema";
import ingredientSchema from "./schemas/ingrediantSchema";
// Access the Realm App.
const app = getRealmApp();

// Create a new Context object that will be provided to descendants of
// the AuthProvider.
const AuthContext = React.createContext<any | null>(null);

// The AuthProvider is responsible for user management and provides the
// AuthContext value to its descendants. Components under an AuthProvider can
// use the useAuth() hook to access the auth value.
const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [user, setUser] = useState<any>(app.currentUser);
  const realmRef = useRef<any>(null);
  const [recipes, setRecipes] = useState<any>()

  // function errorSync(_session, error) {
  //   const realm = realmRef.current
  //   if (realm) {
  //     if (error.name === "ClientReset") {
  //       const realmPath = realm.path;
  //       realm.close();
  //       console.log(`Error ${error.message}, need to reset ${realmPath}…`);
  //       Realm.App.Sync.initiateClientReset(app, realmPath); // pass your realm app instance, and realm path to initiateClientReset()
  //       console.log(`Creating backup from ${error.config.path}…`);
  //       // Move backup file to a known location for a restore
  //       fs.renameSync(error.config.path, realmPath + "~");
  //       // Discard the reference to the realm instance
  //       realm = null;
  //       realmRef.current = null;
  //     } 
  //     else {
  //       console.log(`Received error ${error.message}`);
  //     }
  //   }
  // }

  useEffect(() => {
    if (!user) {
      return;
    }
    const config = {
      schema: [ recipeSchema, ingredientSchema ],
      sync: {
        user: user,
        partitionValue: user.id,
      },
    };
    Realm.open(config)
    .then((userRealm) => {
        console.log('Auth Realm has opened', userRealm)
        realmRef.current = userRealm
        // Set user recipes
        const recipes = userRealm.objects<recipeInterface>('recipe')
        setRecipes(recipes)
        recipes.addListener(()=> {
          setRecipes(recipes)
        })
      }
    )
    .catch(err => console.log('could not reach realm', err));

    return () => {
      // cleanup function
      const userRealm = realmRef.current;
      if (userRealm) {
        console.log('Auth Realm has closed')
        userRealm.close();
        realmRef.current = null;
      }
    };
  }, [user]);

  const signIn = async (email: string, password: string) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    console.log(newUser)
    setUser(newUser);
  };
  
  const annoySignIn = async () => {
    const creds = Realm.Credentials.anonymous();
    const newUser = await app.logIn(creds);
    setUser(newUser);
  };

  const signUp = async (email: string, password: string): Promise<void> => {
    try{
      await app.emailPasswordAuth.registerUser({email, password});
    } catch (err) {
      console.log("issues with signing in",err)
    }
  };

  const signOut = async(callback: ()=> void): Promise<void> => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
    callback()
  };

  // Create recipe
  const createRecipe = (name: string, recipe: any[]) => {
    const userRealm = realmRef.current
    userRealm.write(()=> {
      userRealm.create("recipe", {
        _id: new ObjectId(),
        _partition: user.id,
        dateCreated: "test",
        name: name,
        recipe: recipe,
      })
    })
  }

  const deleteRecipe = () => {
    // ToDo
  }

  const editRecipe = () => {
    // ToDo
  }
  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        annoySignIn,
        user,
        recipes,
        createRecipe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error("useAuth() called outside of a AuthProvider?");
  }
  return auth;
};

export { AuthProvider, useAuth };
