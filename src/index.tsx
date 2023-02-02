import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'app/store'
import { worker } from 'mocks/browser'
import App from 'app/App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './index.css'

library.add(fas)

const initialize = async (): Promise<ServiceWorkerRegistration | undefined> => {
  if (process.env.NODE_ENV === 'development') {
    return await worker.start()
  }
  await Promise.resolve()
}

void initialize().then(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  createRoot(document.getElementById('root')!).render(<React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>)
})
