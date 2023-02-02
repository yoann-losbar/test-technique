import React from 'react'
import styled from 'styled-components'

const StyledProfilePicture = styled.img`
  font-size: .7em;
  background-image: url('${(props: ProfilePictureProps) => props.src}');
  align-self: flex-start;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`

interface ProfilePictureProps {
  children?: React.ReactNode
  src: string
}

export const ProfilePicture: React.FC<ProfilePictureProps> = (props) => (<StyledProfilePicture {...props}>
    {props.children}
</StyledProfilePicture>)

export default ProfilePicture
