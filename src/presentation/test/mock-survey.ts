import { AddSurvey, AddSurveyParams } from '@/presentation/controllers/survey/add-survey/add-survey-protocols-controller'
import { LoadSurveys, SurveyModel } from '@/presentation/controllers/survey/load-surveys/load-surveys-controller-protocols'
import { LoadSurveyById } from '@/presentation/controllers/survey-result/save-survey-result/save-survey-result-controller-protocols'
import { mockSurveyModels, mockSurveyModel } from '@/domain/test'

export const mockAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurveyParams): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new AddSurveyStub()
}

export const mockLoadSurveys = (): LoadSurveys => {
  class LoadSurveysStub implements LoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return new Promise(resolve => resolve(mockSurveyModels()))
    }
  }
  return new LoadSurveysStub()
}

export const mockLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub implements LoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return new Promise(resolve => resolve(mockSurveyModel()))
    }
  }
  return new LoadSurveyByIdStub()
}
