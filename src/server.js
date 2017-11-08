import http from 'http'
import net from 'net'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import cookiesMiddleware from 'universal-cookie-express'
import App from './App'

const app = Express()

app.use('/public', Express.static(__dirname + '/../public'))
  .use(cookiesMiddleware())

app.get('*', (req, res) => {
  const context = {}
  const appHtml = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App cookies={req.universalCookies} />
    </StaticRouter>
  )

  if (context.url) {
    res.redirect(301, context.url)
  } else {
    res.send(renderPage(appHtml))
  }
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>SSR</title>
    <link rel="shortcut icon" href="/public/favicon.ico">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel=stylesheet href=/public/app.css>

    <div id=app>${appHtml}</div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    <script src="/public/client.js"></script>
   `
}

const server = http.createServer(app)
const stdin = new net.Socket({fd: 0})
server.emit('connection', stdin)
