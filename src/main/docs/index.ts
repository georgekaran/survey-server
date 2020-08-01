import { loginPath } from './paths'
import { accountSchema, loginParamsSchema, errorSchema } from './schemas'
import { badRequest, serverError, unauthorized, notFound } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Survey.Go',
    description: 'Survey project using clean structure',
    version: '1.0.0'
  },
  license: {
    name: 'ISC',
    url: 'https://opensource.org/licenses/ISC'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized,
    notFound
  }
}
