const fs = require('fs')
const util = require('util')
const logFile = fs.createWriteStream('logs/log.txt', { flags: 'w' })

const spawn = require('child_process').spawn
const bodyParser = require('body-parser')
const app = require('express')()
const token = process.env.VERIFICATION_TOKEN

app.use(bodyParser.json())

app.post('/', (req, res) => {
  // check if verification token is correct
  if (req.headers.token !== token) {
    return res.sendStatus(401)
  }

  new Promise(function (resolve, reject) {
    const response = {
      status: 'pending',
      message: 'Awaiting exec...',
      data: '',
    }

    const child = spawn('nuxt generate', {
      shell: true,
    })

    child.stdout.setEncoding('utf8')

    child.stdout.on('data', function (data) {
      response.data += data
    })

    child.on('error', function (data) {
      response.status = 'error'
      response.message = data
      logFile.write(util.format(response) + '\n')

      reject(response)
    })

    child.on('exit', function () {
      response.status = 'success'
      response.message = 'Script completed successfully'
      logFile.write(util.format(response) + '\n')

      resolve(response)
    })
  })
    .then(function (data) {
      res.json(data)
    })
    .catch(function (e) {
      res.status(500, {
        error: e,
      })
    })
})

module.exports = app
