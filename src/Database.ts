import mongoose, { Mongoose } from 'mongoose'
import { MetricsController } from './models/Metrics.model'

export class Database {
  public controller: MetricsController
  constructor(public mongourl: string) {
    this.controller = new MetricsController()
  }
  public async connect(): Promise<Mongoose> {
    return new Promise((resolve, reject) => {
      mongoose.connect(this.mongourl, { useNewUrlParser: true }).then((mongo: Mongoose) => {
        resolve(mongo)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
