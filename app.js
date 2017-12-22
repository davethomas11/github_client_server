const express = require('express')
const app = express()

let client_id = process.env.GITHUB_CLIENT_ID || ""

app.get('/client_id', (req, res) => 
    res.send(JSON.stringify({client_id:client_id})))

app.listen(3000, () => console.log('Listening on port 3000!'))