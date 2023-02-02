import React from 'react'
import styled from 'styled-components'
import { getHours } from 'features/calendar/utils'
import { InputField } from 'ui/molecules/fields'
import { ScrollableContainer } from 'ui/atoms/containers'
import { List, ListItem } from 'ui/molecules/list'
import { AccentLight } from 'ui/atoms/typography'

const StyledTimePicker = styled.div``

interface TimePickerProps {
  children?: React.ReactNode
  onSelection: (value: string) => (ev: React.MouseEvent<HTMLElement>) => void
  hourSelection: string
}

export const TimePicker: React.FC<TimePickerProps> = ({ onSelection, hourSelection, ...rest }) => {
  const hours = getHours()
  return <StyledTimePicker {...rest}>
        <InputField onChange={() => {
        }} padding={15} value={hourSelection} label={'Time'} width={140} spaceBetween={14}/>
        <ScrollableContainer height={245}>
            <List>
                {
                    hours.map((item: string) => {
                      return (<ListItem onClick={onSelection(item)} key={item}>
                            <AccentLight>{item}</AccentLight>
                        </ListItem>)
                    })
                }
            </List>
        </ScrollableContainer>
    </StyledTimePicker>
}

export default TimePicker
