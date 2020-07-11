import { Controller, HttpRequest, HttpResponse, Authentication } from './login-protocols-controller'
import { badRequest, serverError, unauthorized, ok } from '../../../helpers/http/http-helper'
import { Validation } from '../signup/signup-protocols-controller'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) {
    this.authentication = authentication
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken: 'any_token' })
    } catch (error) {
      return serverError(error)
    }
  }
}
