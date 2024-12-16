import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Layout from './Layout'

createRoot(document.getElementById('root')).render(
  <>
    <Layout />
  </>,
)
