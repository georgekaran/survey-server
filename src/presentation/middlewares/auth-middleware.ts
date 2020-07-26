import { Middleware, HttpRequest, HttpResponse, LoadAccountByToken } from './auth-middleware-protocols'
import { forbidden, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { AccessDeniedError } from '@/presentation/errors'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly role?: string
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken, this.role)
        if (account) {
          return ok({ accountId: account.id })
        }
      }
      const error = forbidden(new AccessDeniedError())
      return new Promise(resolve => resolve(error))
    } catch (e) {
      return serverError(e)
    }
  }
}
