import gql from 'graphql-tag'

export const allReservationsQuery = gql`
  query {
    allReservations(orderBy: createdAt_DESC) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export const allHotelsQuery = gql`
  query {
    allHotels(orderBy: value_ASC) {
      id
      label
      value
    }
  }
`
