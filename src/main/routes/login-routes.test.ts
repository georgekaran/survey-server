import request from 'supertest'
import { hash } from 'bcrypt'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import app from '@/main/config/app'
import { Collection } from 'mongodb'

let accountCollection: Collection

describe('Signup Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('Post /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'George',
          email: 'georgekaran12@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('Post /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'George',
        email: 'georgekaran12@gmail.com',
        password
      })

      await request(app)
        .post('/api/login')
        .send({
          email: 'georgekaran12@gmail.com',
          password: '123'
        })
        .expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'georgekaran12@gmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
