import mongoose, { Schema } from 'mongoose'
import { IMetrics } from '../typings/IMetrics'
import { Request, Response } from 'express'

const Metrics: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  version: { type: String, required: true },
  repository: {
    type: { type: String, required: true },
    url: { type: String, required: true }
  },
  author: {
    name: { type: String },
    email: { type: String },
    url: { type: String }
  },
  license: { type: String, required: true },
}, {
  timestamps: true,
})

export const MetricsModel = mongoose.model<IMetrics>('Metrics', Metrics)

export class MetricsController {
  public insertMetric(req: Request, cb: CallableFunction): void {
    const newMetrics = new MetricsModel(req.body)
    newMetrics.save((err, metrics) => {
      if (err) { cb(err, null) }
      cb(null, metrics)
    })
  }
}
