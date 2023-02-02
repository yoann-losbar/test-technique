import React from 'react'
import Calendar from 'features/calendar'
import Profile from 'features/profile'
import { Layout } from 'ui/atoms/containers'

const Dashboard: React.FC = () => (<Layout>
    <Profile/>
    <Calendar/>
</Layout>)

export default Dashboard
