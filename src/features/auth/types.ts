import type { User } from 'app/services/types'

export interface AuthState {
  user: User | null
  token: string | null
}
