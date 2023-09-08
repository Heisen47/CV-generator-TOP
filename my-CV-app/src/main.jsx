import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import Name from './components/Naming.jsx'
import Education from './components/education.jsx'
import Work from './components/experience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Name /> ,
  <Education />
  <Work />
  </>
)
