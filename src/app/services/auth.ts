import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from 'config/config.json'
import { type RootState } from '../store'
import { type LoginRequest, type UserResponse } from './types'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.api.baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token != null) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
    })
  })
})

export default api.reducer

export const { useLoginMutation } = api
