// eslint-disable-next-line consistent-return
export default function wordEndings(count) {
  if (count === 0) {
    return 'ПРЯМОЙ РЕЙС'
  }

  if (count === 1) {
    return 'ПЕРЕСАДКА'
  }

  return 'ПЕРЕСАДКИ'
}
