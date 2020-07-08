export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/survey',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || '8-*214d*21d4+1d'
}
