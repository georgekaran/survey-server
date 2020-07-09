import env from '../../config/env'
import { SignUpController } from '../../../presentation/controllers/signup/signup-controller'
import { DbAddAccount } from '../../../data/usecases/add-account/db-add-account'
import { BCryptAdapter } from '../../../infra/criprography/bcrypt-adapter/bcrypt-adapter'
import { DbAuthentication } from '../../../data/usecases/authetication/db-authentication'
import { AccountMongoRepository } from '../../../infra/db/mongodb/account/account-mongo-repository'
import { LogMongoRepository } from '../../../infra/db/mongodb/log/log-mongo-repository'
import { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { makeSignUpValidation } from './signup-validation-factory'
import { JwtAdapter } from '../../../infra/criprography/jwt-adapter/jwt-adapter'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const bCryptAdapter = new BCryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bCryptAdapter, accountMongoRepository)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const bbAuthentication = new DbAuthentication(accountMongoRepository, bCryptAdapter, jwtAdapter, accountMongoRepository)
  const signUpController = new SignUpController(dbAddAccount, makeSignUpValidation(), bbAuthentication)
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(signUpController, logMongoRepository)
}
