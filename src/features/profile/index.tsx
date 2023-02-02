import React from 'react'
import { useGetProfileQuery } from 'app/services/profile'
import ProfileView from '../../ui/organisms/Profile'

const Profile: React.FC = () => {
  const { data, isLoading, isError, isSuccess } = useGetProfileQuery('1')
  if (isLoading) {
    return (<span>Loading data</span>)
  }
  return (
       <ProfileView data={data} isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
  )
}

export default Profile
