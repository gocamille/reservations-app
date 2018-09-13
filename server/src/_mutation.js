import gql from 'graphql-tag'

export const createReservationMutation = gql`
  mutation ($name: String!, $hotelName: String!, $arrivalDate: DateTime!, $departureDate: DateTime!){
    createReservation(name: $name, hotelName: $hotelName, arrivalDate: $arrivalDate, departureDate: $departureDate) {
      id
    }
  }
`
