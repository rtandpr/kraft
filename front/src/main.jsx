import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { initGA } from './ga.js';
import TagManager from 'react-gtm-module'


initGA();


const tagManagerArgs = {
  gtmId: 'GTM-T8GRKPTZ'
}

TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')).render(
  
      <App />

)
