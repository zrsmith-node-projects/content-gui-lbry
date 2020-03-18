const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// HTML

const preData = ''
const postData = ''

const htmlFile = (file, data, res) => {
 const name = 'files/' + file + ".html"
 const content = preData + data + postData
 fs.writeFile(name, content, function (err) {
   if (err) {
     throw error
     response.send(err)
   } else {
     res.send('File saved! Location: ' + name + ' Notes: ')
   }
 })
}

// static files
app.use(express.static('static'))

// routes
app.get('/', (req, res) => {
  res.sendFile('./static/index.html')
})

app.get('/page', (req, res) => {
  res.sendFile(__dirname + '/static/index.html')
})

app.post('/page', function(req, response) {
  const file = req.body.file
  const content = req.body.myPage
  htmlFile(file, content, response)
})

const PORT = 5502
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})