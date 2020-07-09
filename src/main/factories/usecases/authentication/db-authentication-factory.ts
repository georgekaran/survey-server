import env from '../../../config/env'
import { DbAuthentication } from '../../../../data/usecases/authetication/db-authentication'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { BCryptAdapter } from '../../../../infra/criprography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '../../../../infra/criprography/jwt-adapter/jwt-adapter'
import { Authentication } from '../../../../domain/usecases/authentication'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const accountMongoRepository = new AccountMongoRepository()
  const bCryptAdapter = new BCryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbAuthentication(accountMongoRepository, bCryptAdapter, jwtAdapter, accountMongoRepository)
}
