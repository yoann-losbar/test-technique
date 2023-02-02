import React from 'react'
import { fireEvent, render, screen, waitFor, type Screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { store } from './store'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { credentialsMock } from 'mocks/data'

const BaseAppWithStoreAndRouter: React.FC = () =>
  (<Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>)

interface LoginFormNodes {
  submitNode: any
  usernameNode: any
  passwordNode: any
}
const getLoginFormNodes = (screen: Screen): LoginFormNodes => ({
  submitNode: screen.getByRole('submit'),
  usernameNode: screen.getByRole('username'),
  passwordNode: screen.getByRole('password')
})

describe('The user can log in', () => {
  test('it shows the login page when the user is not logged-in', async () => {
    const { findAllByText } = render(<BaseAppWithStoreAndRouter/>)
    await findAllByText('Login page')
  })
  test('it should log in the user when the user submits the login form with valid credentials', async () => {
    render(<BaseAppWithStoreAndRouter/>)
    const { submitNode, usernameNode, passwordNode } = getLoginFormNodes(screen)
    fireEvent.change(usernameNode, { target: { value: credentialsMock.username } })
    fireEvent.change(passwordNode, { target: { value: credentialsMock.password } })
    await waitFor(async () => {
      userEvent.click(submitNode)
      const inside = await screen.findAllByText('Schedule Response')
      expect(inside.length).toEqual(1)
    }, { timeout: 5000 })
  })
})
