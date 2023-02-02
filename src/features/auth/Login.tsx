import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from 'app/services/auth'
import { Card, CardBody, CardFooter, CardHeader } from 'ui/molecules/card'
import { InputField } from 'ui/molecules/fields'
import { AccentMain } from 'ui/atoms/typography'
import { FlexboxSpace } from 'ui/atoms/containers'
import { Button } from 'ui/atoms/button'
import { setCredentials } from './slice'
import type { LoginRequest } from '../../app/services/types'

export const Login: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formState, setFormState] = useState<LoginRequest>({
    username: 'admin',
    password: 'admin'
  })
  const [login, { isLoading }] = useLoginMutation()
  const [errorLabel, setErrorLabel] = useState('')

  const handleUsername = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setFormState((prev) => ({ ...prev, username: ev.target.value }))
  }
  const handlePassword = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setFormState((prev) => ({ ...prev, password: ev.target.value }))
  }

  const handleSubmit = async (): Promise<void> => {
    if (isLoading) return
    setErrorLabel('')
    try {
      const user = await login(formState).unwrap()
      dispatch(setCredentials(user))
      navigate('/')
    } catch (err: any) {
      setErrorLabel(err.data.errorMessage)
    }
  }

  return (
        <Card width={'small'}>
            <CardHeader padding={20}>
                <AccentMain>Login page</AccentMain>
            </CardHeader>
            <CardBody direction={'column'}>
                <InputField role={'username'} value={formState.username} onChange={handleUsername} spaceBetween={20} width={100}
                            label={'Username'}/>
                <FlexboxSpace height={10}/>
                <InputField role={'password'} value={formState.password} onChange={handlePassword} spaceBetween={20} width={100}
                            label={'Password'}/>
                {(Boolean(errorLabel)) && (<AccentMain> {errorLabel} </AccentMain>)}
            </CardBody>
            <CardFooter>
                <Button role={'submit'} primary onClick={handleSubmit}>
                    <AccentMain>Submit</AccentMain>
                </Button>
                {isLoading && (<AccentMain> {'Loading'} </AccentMain>)}
            </CardFooter>
        </Card>
  )
}

export default Login
