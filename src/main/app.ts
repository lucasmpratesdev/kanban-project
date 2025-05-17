import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Router } from 'express'
import loginRoutes from '../main/routes/login/LoginAuthRoutes'
import userRouter  from '../main/routes/user/userRoutes'

dotenv.config()

const app = express()
const router = Router()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API funcionando 🎯')
})

loginRoutes(router)
userRouter(router)

app.use(router)

export default app
