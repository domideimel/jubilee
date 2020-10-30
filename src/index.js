import './assets/fonts.scss'
import 'argon-design-system-react/src/assets/scss/argon-design-system-react.scss'
import { StrictMode } from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './sw'

ReactDOM.render(<StrictMode>
  <App />
</StrictMode>, document.getElementById('root'))

serviceWorker.unregister()
