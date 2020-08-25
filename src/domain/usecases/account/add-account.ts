import { AccountModel } from '@/domain/models/account'

export interface AddAccountParams {
  name: string
  email: string
  password: string
  role?: string
}

export interface AddAccount {
  add: (account: AddAccountParams) => Promise<AccountModel>
}
