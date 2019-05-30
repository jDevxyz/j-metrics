import app from './Application'
import { Database } from './Database'
import { Routes } from './Routes'

app.set('port', process.env.PORT || 5000)
const PORT: number = app.get('port')
const database = new Database(app.get('mongouri'))
const router = new Routes()

database.connect().then((mongo) => {
  console.log('Connected to mongodb database!')
  app.listen(PORT, () => {
    console.log('J-Metrics server API listening on port ' + PORT)
    router.routes(app, database)
  })
}).catch((err) => {
  throw err
})
