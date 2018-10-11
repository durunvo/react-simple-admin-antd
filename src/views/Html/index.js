import React, { PureComponent } from 'react'


export default class Html extends PureComponent {

  render() {
    return (
      <html lang="en-us">
        <head>
          <title>Admin</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
          <div id="root" />
          <script src="/static/bundle.js" defer/>
        </body>
      </html>
    )
  }
}
