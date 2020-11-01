import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import env from "react-dotenv";

require('dotenv').config()


ReactDOM.render(< App />, document.getElementById('container'))
