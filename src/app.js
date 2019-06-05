import React from 'react'
import { Helmet } from 'react-helmet'

const App = () => (
  <div>
    <Helmet>
      <title>My Cool Site</title>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      <body className="bg-gray-200 w-full h-screen flex items-center justify-center" />
    </Helmet>
    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div>
        <h4 class="text-xl text-gray-900 leading-tight">🤠 Hello!</h4>
      </div>
    </div>
  </div>
)

export default App
