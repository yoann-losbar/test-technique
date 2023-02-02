import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Profile } from './types'
import config from 'config/config.json'
import { type RootState } from '../store'

export const userApi = createApi({
  reducerPath: 'profile',
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
    getProfile: builder.query<Profile, string>({
      query: (id) => '/profile'
    })
  })
})

export const { useGetProfileQuery } = userApi
