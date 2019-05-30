import { Request, Response, Application } from 'express'
import { CustomRequest, IMetrics } from './typings/IMetrics'
import { Database } from './Database'

export class Routes {
  public routes(app: Application, db: Database): void {
    app.route('/')
    .get((req: Request, res: Response) => {
      res.status(200).send({ message: 'GET Req Received!' })
    })

    app.route('/api')
    .get((req: Request, res: Response) => {
      res.status(200).send({ message: 'GET Req Received! '})
    })

    .post((req: Request, res: Response) => {
      res.status(200).send({ message: 'POST Req Received!' })
    })

    app.route('/api/test')
    // .get((req: Request, res: Response) => {
    //   db.controller.
    // })
    .post((req: Request, res: Response) => {
      db.controller.insertMetric(req, function(err: Error, metrics: IMetrics) {
        res.json(metrics)
      })
    })
  }
}
