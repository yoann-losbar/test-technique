import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardHeader, CardBody } from 'ui/molecules/card'
import { AccentMain, AccentLight, InteractableText, LightText } from 'ui/atoms/typography'
import ProfilePicture from 'ui/atoms/profilepicture/ProfilePicture'
import { FlexboxSpace, FlexContainer } from 'ui/atoms/containers'
import { RichRow, Row } from 'ui/atoms/row/Row'
import { type Profile } from '../../app/services/types'

interface ProfileProps {
  data?: Profile
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}

const ProfileView: React.FC<ProfileProps> = ({
  data, isLoading, isError, isSuccess
}) => {
  if (isLoading || data === undefined) {
    return null
  }

  const { firstname, lastname, phone, profilePicture, whatsapp, telegram, mail, location: { city, state } } = data
  return (
        <Card width={'small'}>
            <CardHeader padding={8}>
                <AccentMain>Overview</AccentMain>
                <InteractableText>View contact</InteractableText>
            </CardHeader>
            <CardBody direction={'column'}>
                <RichRow>
                    <FlexContainer direction={'row'}>
                        <FontAwesomeIcon icon="user"/>
                        <FlexboxSpace width={10}/>
                        <FlexContainer direction={'column'}>
                            <AccentMain>{firstname} {lastname}</AccentMain>
                            <FlexboxSpace height={8}/>
                            <LightText>{city}, {state}</LightText>
                            <FlexboxSpace height={3}/>
                            <LightText>Customer</LightText>
                        </FlexContainer>
                    </FlexContainer>
                    <ProfilePicture
                        src={profilePicture}/>
                </RichRow>
                <Row>
                    <FontAwesomeIcon icon="phone"/> <FlexboxSpace width={10}/> <AccentLight>{phone}</AccentLight>
                </Row>
                <Row>
                    <FontAwesomeIcon icon="phone"/> <FlexboxSpace width={10}/><AccentLight> {whatsapp} </AccentLight>
                </Row>
                <Row>
                    <FontAwesomeIcon icon="phone"/> <FlexboxSpace
                    width={10}/><AccentLight> {telegram} </AccentLight>
                </Row>
                <Row><FontAwesomeIcon
                    icon="mail-bulk"/> <FlexboxSpace
                    width={10}/><AccentLight> {mail} </AccentLight></Row>
            </CardBody>
        </Card>
  )
}

export default ProfileView
