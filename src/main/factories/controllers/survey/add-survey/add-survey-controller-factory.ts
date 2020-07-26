import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { AddSurveyController } from '@/presentation/controllers/survey/add-survey/add-survey-controller'
import { makeAddSurveyValidation } from './add-suvey-validation-factory'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey/add-survey/db-add-survey-factory'

export const makeAddSurveyController = (): Controller => {
  return makeLogControllerDecorator(new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey()))
}
