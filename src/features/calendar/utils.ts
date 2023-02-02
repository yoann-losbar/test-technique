import { v4 as uuidv4 } from 'uuid'
import { type Grid } from './types'

export const convertLitteralDayToOffset = (day: string): number => {
  const days: Record<string, number> = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0
  }
  return days[day]
}

export const getShortDayName = (): string[] => ['Sun', 'Mond', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

export const chunkArrayInGroups = (arr: any, size: number): Grid => {
  const res = []
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size))
  }
  return res
}

export const getHours = (): string[] => {
  const arr = []
  for (let i = 0; i < 24; i++) {
    let hour = i.toString()
    if (i < 10) {
      hour = '0' + hour
    }
    arr.push(`${hour}:00 AM`)
  }
  return arr
}

export const uniqid = (): string => uuidv4()
