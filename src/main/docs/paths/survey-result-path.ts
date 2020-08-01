export const surveyResultPath = {
  put: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Survey'],
    summary: 'API to create an answer to the survey',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/saveSurveyResultParams'
          }
        }
      }
    },
    parameters: [{
      in: 'path',
      name: 'surveyId',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/surveyResult'
            }
          }
        }
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
