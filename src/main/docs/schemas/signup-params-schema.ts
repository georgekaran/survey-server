export const signUpParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    passwordConfirmation: {
      type: 'string'
    },
    role: {
      type: 'string'
    }
  },
  required: ['name', 'password', 'email', 'passwordConfirmation']
}
