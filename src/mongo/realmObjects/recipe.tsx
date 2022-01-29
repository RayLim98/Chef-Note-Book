import ingrediant from './ingrediant'

interface recipeProps {
    _id: string
    _partition: string
    dateCreated: Date
    name: string
    recipe: ingrediant[]
}

export default recipeProps