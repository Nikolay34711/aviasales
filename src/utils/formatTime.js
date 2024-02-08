import { format, add } from 'date-fns'

const formatTime = (segment) => {
  const startTime = new Date(segment.date)
  const endTime = add(startTime, { minutes: segment.duration })
  return `${format(startTime, 'HH:mm')} – ${format(endTime, 'HH:mm')}`
}

export default formatTime
