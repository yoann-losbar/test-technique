import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from 'ui/molecules/card'
import { DatePicker, TimePicker } from 'ui/molecules/pickers'
import { AccentMain, AccentLight } from 'ui/atoms/typography'
import Button from 'ui/atoms/button/Button'
import { type Grid } from 'features/calendar/types'

interface CalendarProps {
  grid: Grid
  decrease: (ev: React.MouseEvent<HTMLElement>) => void
  increase: () => void
  onDateSelection: (value: string) => (ev: React.MouseEvent<HTMLElement>) => void
  onHourSelection: (value: string) => (ev: React.MouseEvent<HTMLElement>) => void
  selection: string
  label: string
  hourSelection: string
}

const CalendarView: React.FC<CalendarProps> = ({
  grid,
  decrease,
  hourSelection,
  onHourSelection,
  increase,
  onDateSelection,
  label,
  selection
}) => (
    <Card width={'large'}>
        <CardHeader padding={15}>
            <AccentMain>Schedule Response</AccentMain>
        </CardHeader>
        <CardBody direction={'row'}>
            <DatePicker label={label} onDateSelection={onDateSelection} selection={selection} decrease={decrease}
                        increase={increase} grid={grid}/>
            <TimePicker hourSelection={hourSelection} onSelection={onHourSelection}/>
        </CardBody>
        <CardFooter>
            <Button primary onClick={() => {
            }}><AccentLight>Schedule</AccentLight></Button>
            <Button light onClick={() => {
            }}><AccentLight>Cancel</AccentLight></Button>
        </CardFooter>
    </Card>
)
export default CalendarView
