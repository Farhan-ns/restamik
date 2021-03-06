import express from "express"
import { queryParser } from "express-query-parser"
import { router as coursesRouter} from './router/courses.js'
import { readDB } from './util.js'

const app = express()
const URL = 'localhost'
const PORT = process.env.PORT || 3000

app.use(
    queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: true
    }
))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/courses', coursesRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://${URL + ':' + PORT}`)
    readDB()
})