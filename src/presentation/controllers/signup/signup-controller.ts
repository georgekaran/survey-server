import { HttpRequest, HttpResponse, Controller, AddAccount, Authentication } from './signup-protocols-controller'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'
import { Validation } from '../../protocols/validation'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) {
    this.addAccount = addAccount
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body

      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      await this.authentication.auth({
        email,
        password
      })

      return ok(account)
    } catch (err) {
      return serverError(err)
    }
  }
}
