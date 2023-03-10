import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from 'features/auth/slice'
import { type User } from '../app/services/types'

export const useAuth = (): { user: User | null } => {
  const user = useSelector(selectCurrentUser)
  return useMemo(() => ({ user }), [user])
}
