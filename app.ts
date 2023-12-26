import express, { Request, Response } from 'express'
import cors from 'cors'
export const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000

type User = { email: string, password: string, username: string }
const users = [] as User[]

app.get('/user', (req: Request, res: Response) => {
    res.json(users)
})

app.post('/user',(req: Request, res: Response) => {
    const data = req.body as User
    let alreadyExists = false;
    for (let i = 0; i !== users.length ; i++) {
        const user = Array.from(users.values())[i]
        console.log(user.email, data.email)
        if (!user) break
        if (user.email === data.email || user.username || data.username) {
            alreadyExists = true
            break;
        }
    }
    if (alreadyExists) return res.status(400).json({ status: "ERROR", cause: 'User already exists!' })
    users.push(data)
    res.status(201).json({ status: 'OK' })
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))