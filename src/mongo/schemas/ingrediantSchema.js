export const ingredientSchema = {
  name: 'ingredient',
  embedded: true,
  properties: {
    amount: 'int?',
    igName: 'string?',
    unit: 'string?',
  },
};

export default ingredientSchema
