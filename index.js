import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("hello from server")
})

app.get('/users', (req, res) => {
    res.json({ message: {"fname": "robel", "lname": "hailu"} })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
