import React from 'react'
import { graphql } from 'react-apollo'
import { Picker } from 'react-native'

import { allHotelsQuery } from '../server/src/_query'

class DropdownPickerTemplate extends React.Component {
  state = {
    hotelsData: []
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.allHotelsQuery.error) {
      this.setState({
        hotelsData: nextProps.allHotelsQuery.allHotels
      })
    }
  }

  render () {
    const { setHotelName, hotelName, allHotelsQuery: { loading } } = this.props
    const { hotelsData } = this.state

    return (
      <Picker
        selectedValue={hotelName}
        onValueChange={setHotelName}>
        {!loading ? hotelsData.map((hotel) => {
          const { label, value, id } = hotel
          return (<Picker.Item key={id} label={value} value={value} />)
        }) : null }
      </Picker>
    )
  }
}

export default graphql(allHotelsQuery, { name: 'allHotelsQuery' })(DropdownPickerTemplate)
