import { ObjectId } from 'bson'
import ingredientInterface from './ingrediantInterface'

interface recipeInterface {
    _id: ObjectId
    _partition: string
    name: string
    dateCreated: string
    recipe: ingredientInterface[]
}

export default recipeInterface