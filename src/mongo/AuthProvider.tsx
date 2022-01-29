import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import { getRealmApp } from "./getRealmApp";
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
    // The current user always has their own project, so we don't need
    // to wait for the user object to load before displaying that project.
    const config = {
      // schema: [BookSchema, ExampleDataSchema, FeverSymptomSchema],
      sync: {
        user: user,
        partitionValue: user.id,
        // error: errorSync,
      },
    };
    // Open a realm with the logged in user's partition value in order
    // to get the projects that the logged in user is a member of
    Realm.open(config)
    .then((userRealm) => {
        console.log('Auth Realm has opened', userRealm)
        realmRef.current = userRealm
        // TODO: Obtain and sync user data here
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

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const signIn = async (email: string, password: string) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    console.log(newUser)
    setUser(newUser);
  };
  
  // Anonymouse sign in 
  const annoySignIn = async () => {
    const creds = Realm.Credentials.anonymous();
    const newUser = await app.logIn(creds);
    setUser(newUser);
  };

  // The signUp function takes an email and password and uses the
  // emailPassword authentication provider to register the user.
  const signUp = async (email: string, password: string): Promise<void> => {
    try{
      await app.emailPasswordAuth.registerUser({email, password});
    } catch (err) {
      console.log("issues with signing in",err)
    }
  };

  // The signOut function calls the logOut function on the currently
  // logged in user
  const signOut = async(): Promise<void> => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        annoySignIn,
        user,
        // globalPartitionValue,
        // projectData, // list of projects the user is a memberOf
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
