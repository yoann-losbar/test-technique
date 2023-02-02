import { rest } from 'msw'
import { profileMock, credentialsMock } from './data'

export const handlers = [
  rest.get('/profile', (req, res, ctx) => {
    const token = req.headers.get('authorization')
    if (token === null || token !== `Bearer ${credentialsMock.jwt}`) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Provided credentials are not valid.'
        })
      )
    }
    return res(
      ctx.json(profileMock)
    )
  }),
  rest.post('/login', async (req, res, ctx) => {
    const { username, password } = await req.json<{
      username: string
      password: string
    }>()
    if (username === credentialsMock.username && password === credentialsMock.password) {
      return await res(
        ctx.json({
          user: {
            first_name: profileMock.firstname,
            last_name: profileMock.lastname
          },
          token: credentialsMock.jwt
        })
      )
    }
    return await res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'Provided credentials are not valid.'
      })
    )
  })
]
