import { Authentication, AuthenticationParams } from '@/domain/usecases/account/authentication'
import { AuthenticationModel } from '@/domain/models/authentication'

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    authenticationModel = {
      accessToken: 'any_token',
      name: 'any_name'
    }

    async auth (authentication: AuthenticationParams): Promise<AuthenticationModel> {
      return Promise.resolve(this.authenticationModel)
    }
  }
  return new AuthenticationStub()
}
