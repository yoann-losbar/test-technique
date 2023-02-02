import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from 'features/auth/Login'
import { PrivateOutlet } from 'utils/PrivateOutlet'
import Dashboard from 'features/dashboard/Dashboard'

const App: React.FC = () => (<Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/*" element={<PrivateOutlet/>}>
        <Route index element={<Dashboard/>}/>
    </Route>
</Routes>)

export default App
