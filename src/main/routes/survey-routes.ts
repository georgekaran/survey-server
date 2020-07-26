import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeLoadSurveyController } from '@/main/factories/controllers/survey/load-survey/load-surveys-controller-factory'
import { adminAuth, auth } from '@/main/middlewares'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveyController()))
}
