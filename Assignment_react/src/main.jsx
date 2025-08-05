import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Content from './Content'
import Counter from './counter'
import Change from './Change'
import Color from './Color'
import Show from './show'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Content />
  </StrictMode>,
)
