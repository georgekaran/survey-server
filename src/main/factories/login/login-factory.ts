import env from '../../config/env'
import { Controller } from '../../../presentation/protocols'
import { LoginController } from '../../../presentation/controllers/login/login-controller'
import { DbAuthentication } from '../../../data/usecases/authetication/db-authentication'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { LogMongoRepository } from '../../../infra/db/mongodb/log/log-mongo-repository'
import { makeLoginValidation } from './login-validation-factory'
import { AccountMongoRepository } from '../../../infra/db/mongodb/account/account-mongo-repository'
import { BCryptAdapter } from '../../../infra/criprography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '../../../infra/criprography/jwt-adapter/jwt-adapter'

export const makeLoginController = (): Controller => {
  const salt = 12
  const accountMongoRepository = new AccountMongoRepository()
  const bCryptAdapter = new BCryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const bbAuthentication = new DbAuthentication(accountMongoRepository, bCryptAdapter, jwtAdapter, accountMongoRepository)
  const loginController = new LoginController(bbAuthentication, makeLoginValidation())
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(loginController, logMongoRepository)
}
