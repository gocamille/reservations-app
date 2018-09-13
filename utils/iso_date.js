import moment from 'moment'

const convertISO = (string) => {
  return moment(string).format('LL')
}

export default convertISO
