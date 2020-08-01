import { loginPath, surveyPath } from './paths'
import { accountSchema, apiKeyAuthSchema, loginParamsSchema, errorSchema, surveyAnswerSchema, surveySchema, surveysSchema } from './schemas'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'

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
  }, {
    name: 'Survey'
  }],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}
