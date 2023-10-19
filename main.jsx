import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import generateStore from './src/Redux/store'
import { App } from './src/App'

const root = createRoot(document.getElementById("app"))

const store = generateStore()
root.render(<Provider store={store}><App /></Provider>)