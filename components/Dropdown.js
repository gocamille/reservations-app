import React from 'react'
import { graphql } from 'react-apollo'
import { Picker } from 'react-native'

import { allHotelsQuery } from '../server/src/_query'

class DropdownPickerTemplate extends React.Component {
  render () {
    const {
      setHotelName,
      hotelName,
      allHotelsQuery: {
        loading,
        allHotels
      }
    } = this.props

    return (
      <Picker
        selectedValue={hotelName}
        onValueChange={setHotelName}>
        {!loading ? allHotels.map((hotel) => {
          const { value, id } = hotel
          return (<Picker.Item key={id} label={value} value={value} />)
        }) : null }
      </Picker>
    )
  }
}

export default graphql(allHotelsQuery, { name: 'allHotelsQuery' })(DropdownPickerTemplate)
