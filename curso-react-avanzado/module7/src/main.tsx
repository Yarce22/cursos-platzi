import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateMachineWizard from './StateMachineWizard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateMachineWizard />
  </StrictMode>,
)
