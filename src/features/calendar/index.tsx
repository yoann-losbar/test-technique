import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { chunkArrayInGroups, convertLitteralDayToOffset } from './utils'
import CalendarView from 'ui/organisms/Calendar'
import { type Grid } from './types'

const Calendar: React.FC = () => {
  const getLabelFromBaseDate = (date: string): string => {
    return moment(date).format('MMMM YYYY')
  }
  const [hourSelection, SetHourSelection] = useState('')
  const [baseDate, SetBaseDate] = useState(moment().format('YYYY-MM-') + '15')
  const [label, SetLabel] = useState(getLabelFromBaseDate(baseDate))
  const [selection, SetSelection] = useState('')
  const [grid, SetGrid] = useState<Grid>([])
  const increase = (): void => {
    const nextDate = moment(baseDate).add(1, 'months')
    const nextBaseDate = nextDate.format('YYYY-MM-DD')
    SetBaseDate(nextBaseDate)
    SetLabel(getLabelFromBaseDate(nextBaseDate))
  }
  const decrease = (): void => {
    const previous = moment(baseDate).subtract(1, 'months')
    SetBaseDate(previous.format('YYYY-MM-DD'))
    SetLabel(getLabelFromBaseDate(previous.format('YYYY-MM-DD')))
  }

  useEffect(() => {
    updateTable()
  }, [baseDate])

  const getMonthFromBaseDate = (): string => {
    return baseDate.split('-')[1]
  }

  const getYearFromBaseDate = (): string => {
    return baseDate.split('-')[0]
  }

  const onDateSelection = (value: string) => (ev: React.MouseEvent<HTMLElement>) => {
    SetSelection(`${getYearFromBaseDate()}/${getMonthFromBaseDate()}/${value}`)
  }

  const onHourSelection = (value: string) => (ev: React.MouseEvent<HTMLElement>) => {
    SetHourSelection(value)
  }

  const updateTable = (): void => {
    const startOfMonth = moment(baseDate).startOf('month').format('dddd')
    const endOfMonth = +moment(baseDate).endOf('month').format('DD')
    const endLastMonth = +moment(baseDate).subtract(1, 'months').endOf('month').format('DD')
    const board = [...new Array(40)].map(() => ({ value: '', overlap: false, ending: false }))
    const offset = convertLitteralDayToOffset(startOfMonth)
    let day = 0
    for (let i = 0; i < board.length; i++) {
      if (i < offset) {
        board[i].value = (endLastMonth - (offset - i - 1)).toString()
        board[i].overlap = true
      } else {
        if (day < endOfMonth) {
          day++
          board[i].value = day.toString()
        } else {
          board[i].ending = true
        }
      }
    }
    SetGrid(chunkArrayInGroups(board, 7))
  }

  return (
        <CalendarView
            onHourSelection={onHourSelection}
            hourSelection={hourSelection}
            label={label} selection={selection}
            grid={grid}
            onDateSelection={onDateSelection}
            increase={increase}
            decrease={decrease}
        />
  )
}

export default Calendar
