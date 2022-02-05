export const recipeSchema = {
  name: 'recipe',
  properties: {
    _id: 'objectId',
    _partition: 'string',
    dateCreated: 'string?',
    name: 'string?',
    recipe: 'ingredient[]',
  },
  primaryKey: '_id',
};

export default recipeSchema
