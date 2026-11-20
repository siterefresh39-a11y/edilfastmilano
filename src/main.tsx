import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initConsent, initPhoneClickTracking } from './lib/consent'

initConsent();
initPhoneClickTracking();


createRoot(document.getElementById("root")!).render(<App />);
