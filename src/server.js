import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

const app = Express()

app.use('/static', Express.static('static'))

app.get('*', (req, res) => {
  const context = {}
  const appHtml = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
  )

  if (context.url) {
    redirect(301, context.url)
  } else {
    res.send(renderPage(appHtml))
  }
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/static/client.js"></script>
   `
}

const PORT = process.env.PORT || 8080
app.listen(PORT)
