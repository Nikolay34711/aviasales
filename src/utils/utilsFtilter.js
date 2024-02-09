export default function utilsFilter(filterTransfers, sortedTickets) {
  let filterTickets = []
  const noTransfersOn = filterTransfers[1].checked
  const oneTransfersOn = filterTransfers[2].checked
  const twoTransfersOn = filterTransfers[3].checked
  const threeTransfersOn = filterTransfers[4].checked

  if (noTransfersOn) {
    filterTickets = sortedTickets.filter(
      (el) => el.segments[1].stops.length === 0 && el.segments[0].stops.length === 0,
    )
  } else if (oneTransfersOn) {
    filterTickets = sortedTickets.filter(
      (el) => el.segments[1].stops.length === 1 || el.segments[0].stops.length === 1,
    )
  } else if (twoTransfersOn) {
    filterTickets = sortedTickets.filter(
      (el) => el.segments[1].stops.length === 2 || el.segments[0].stops.length === 2,
    )
  } else if (threeTransfersOn) {
    filterTickets = sortedTickets.filter(
      (el) => el.segments[1].stops.length === 3 || el.segments[0].stops.length === 3,
    )
  }

  return filterTickets
}
