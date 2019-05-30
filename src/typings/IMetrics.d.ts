import { Document } from 'mongoose'
import { Request } from 'express'
import { Database } from 'src/Database'

export interface CustomRequest extends Request {
  db: Database
}

export interface IMetrics extends Document {
  email: String
  name: String
  description: String
  version: String
  repository: IRepository | Object | String
  author: IAuthor | Object | String
  license: String
}

export interface IRepository {
  type: String
  url: String
}

export interface IAuthor {
  name: String
  email: String
  url: String
}
