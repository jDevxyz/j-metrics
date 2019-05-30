import { Request, Response, NextFunction } from 'express'
import { Database } from '../Database'
import { CustomRequest } from '../typings/IMetrics'

export class Middlewares {
  constructor(public database: Database) {}
  public logRequest(req: Request, res: Response, next: NextFunction): void {
    console.log(`${req.ip} >> ${req.method} ${req.path}`)
    next()
  }
}
