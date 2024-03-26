import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './assets/css/tailwind.output.css'
import App from 'app'
import {SidebarProvider} from 'context/SidebarContext'
import {ThemedSuspense} from 'components'
import {Windmill} from '@windmill/react-ui'
import {store, persistor} from 'stores'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SidebarProvider>
        <Suspense fallback={<ThemedSuspense />}>
          <Windmill usePreferences>
            <App />
          </Windmill>
        </Suspense>
      </SidebarProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
