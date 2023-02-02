import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ProfileState {
  profile_picture: string | null
  phone: string | null
  whatsapp: string | null
  telegram: string | null
}

const initialState: ProfileState = {
  profile_picture: '',
  phone: '',
  whatsapp: '',
  telegram: ''
}
const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (
      state,
      action: PayloadAction<ProfileState>
    ) => {
      state.profile_picture = action.payload.profile_picture
    }
  }
})

export const { setProfile } = slice.actions
