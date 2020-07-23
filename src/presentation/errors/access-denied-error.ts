export class AccessDeniedError extends Error {
  constructor () {
    super('Access danied')
    this.name = 'AccessDeniedError'
  }
}
