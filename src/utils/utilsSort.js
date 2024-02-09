export default function utilsSort(ticketsData, activeFilter) {
  // eslint-disable-next-line prefer-const
  let sortedTickets = [...ticketsData]

  switch (activeFilter) {
    case 'cheap':
      sortedTickets.sort((a, b) => a.price - b.price)
      break
    case 'fast':
      sortedTickets.sort((prevEl, nextEl) => {
        const sum1 = prevEl.segments[0].duration + prevEl.segments[1].duration
        const sum2 = nextEl.segments[0].duration + nextEl.segments[1].duration
        return sum1 - sum2
      })
      break
    case 'optimal':
      sortedTickets.sort((prevEl, nextEl) => {
        const mult1 = prevEl.price * prevEl.segments[0].duration
        const mult2 = nextEl.price * nextEl.segments[0].duration
        return mult1 - mult2
      })
      break
    default:
      break
  }

  return sortedTickets
}
