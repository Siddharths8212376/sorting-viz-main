const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('build'))


app.get('/', (req, res) => {
    res.send('<h2>Frontend Here!</h2>')
})

app.get('/api/viz', (req, res) => {
    res.send('<h2>Backend here!</h2>')
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})