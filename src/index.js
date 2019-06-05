import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './app'
import { Helmet } from 'react-helmet'

const constructHTML = (helmet, app) => {
  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()

  return `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="content">${app}</div>
      </body>
    </html>
  `
}

const handleRequest = async request => {
  const headers = { 'Content-Type': 'text/html; charset=utf-8' }
  const app = ReactDOMServer.renderToString(<App />)
  const helmet = Helmet.renderStatic()
  const html = constructHTML(helmet, app)

  return new Response(html, { status: 200, headers })
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
