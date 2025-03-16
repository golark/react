import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SearchEngine from "./SearchEngine.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <SearchEngine />
  </StrictMode>,
)
