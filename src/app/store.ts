import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'features/auth/slice'
import { api } from './services/auth'
import { createLogger } from 'redux-logger'
import { userApi } from './services/profile'

const logger = createLogger({
  collapsed: true
})

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => {
    const combined = getDefaultMiddleware()
      .concat(api.middleware)
      .concat(userApi.middleware)
    if (process.env.NODE_ENV === 'development') {
      combined.concat(logger)
    }
    return combined
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
