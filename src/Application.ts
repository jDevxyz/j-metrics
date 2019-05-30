import express from 'express'
import { json, urlencoded } from 'body-parser'

class Application {
  public app: express.Application
  constructor() {
    this.app = express()
    this.app.set('mongouri', 'mongodb+srv://nine:lolimama4569@cluster01-lvwdf.mongodb.net/test?retryWrites=true')
    this.config()
  }

  private config(): void {
    this.app.use(json())
    this.app.use(urlencoded({ extended: false }))
    this.app.use(express.static('public'))
  }
}

export default new Application().app
