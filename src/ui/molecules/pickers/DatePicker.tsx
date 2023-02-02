import React from 'react'
import styled from 'styled-components'
import { getShortDayName, uniqid } from 'features/calendar/utils'
import { InputField } from 'ui/molecules/fields'
import { FlexboxSpace, FlexContainer } from '../../atoms/containers'
import { AccentUltraLight, InteractableText } from 'ui/atoms/typography'
import { Chevron } from 'ui/atoms/button'
import { Table, TableR, Thead, TableH } from 'ui/molecules/table'
import { type Grid } from 'features/calendar/types'

const StyledDatePicker = styled.div``

interface DatePickerProps {
  grid: Grid
  decrease: (ev: React.MouseEvent<HTMLElement>) => void
  increase: (ev: React.MouseEvent<HTMLElement>) => void
  selection?: string
  label: string
  onDateSelection: (value: string) => (ev: React.MouseEvent<HTMLElement>) => void
}

export const DatePicker: React.FC<DatePickerProps> = (props) => (<StyledDatePicker>
    <InputField
        value={props.selection}
        padding={16}
        label={'Date'}
        width={140}
        spaceBetween={15}
        onChange={() => {}}
    />
    <FlexContainer direction={'row'} justifyContent={'space-between'}>
        <InteractableText>{props.label}</InteractableText>
        <FlexContainer>
            <Chevron onClick={props.decrease}>
                <AccentUltraLight>{'<'}</AccentUltraLight>
            </Chevron>
            <FlexboxSpace width={20}/>
            <Chevron onClick={props.increase}>
                <AccentUltraLight>{'>'}</AccentUltraLight>
            </Chevron>
        </FlexContainer>
    </FlexContainer>
    <Table>
        <Thead>
            <TableR>
                {getShortDayName().map((day) => {
                  return (
                        <TableH key={uniqid()}> <AccentUltraLight>  {day.charAt(0).toUpperCase()}</AccentUltraLight>
                        </TableH>)
                })}
            </TableR>
        </Thead>
        <tbody>
        {
            props.grid.map((row, index) => (
                <TableR key={uniqid()}>
                    {row.map((cell) =>
                        <TableH
                            onClick={props.onDateSelection(cell.value)}
                            selectable={!cell.overlap && !cell.ending}
                            key={uniqid()}>
                            <AccentUltraLight active={!cell.overlap && !cell.ending}>{cell.value}</AccentUltraLight>
                        </TableH>
                    )}
                </TableR>
            ))
        }
        </tbody>
    </Table>
</StyledDatePicker>)

export default DatePicker
