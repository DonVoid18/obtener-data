import './index.css'

import ReactDOM from 'react-dom/client'
import { ReactFlowProvider } from 'reactflow'
import Flow from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactFlowProvider>
    <Flow />
  </ReactFlowProvider>
)
