import { AccountModel } from '@/domain/models/account'
import { AddAccountParams } from '@/domain/usecases/account/add-account'
import { AuthenticationParams } from '@/domain/usecases/account/authentication'
import { AuthenticationModel } from '../models/authentication'

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAddAccounParams(), { id: 'any_id' })

export const mockAddAccounParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password',
  role: 'user'
})

export const mockFakeAuthentication = (): AuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAuthenticationModel = (): AuthenticationModel => ({
  accessToken: 'any_token',
  name: 'any_name'
})
