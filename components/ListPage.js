import React from 'react'
import Reservation from './Reservation'
import { graphql } from 'react-apollo'
import {
  View,
  TouchableHighlight,
  FlatList,
  Text
} from 'react-native'

import { allReservationsQuery } from '../server/src/_query'

import { listStyles } from './styles/styles'

import Loader from './Loader'
import CreatePage from './CreatePage'
import ModalTemplate from './Modal'
import convertISO from '../utils/iso_date'

class ListPage extends React.Component {
  state = {
    modalVisible: false
  }

  _getAllReservations = () => {
    this.props.allReservationsQuery.refetch()
    this.setState({ modalVisible: false })
  }

  _createReservation = () => {
    this.setState({ modalVisible: true })
  }

  render () {
    const {
      modalVisible,
    } = this.state
    const {
      allReservationsQuery: {
        loading,
        allReservations
      }
    } = this.props
    const {
      container,
      title,
      createReservationButtonContainer,
      createReservationButton
    } = listStyles

    if (loading) {
      return (<Loader />)
    }

    return (
      <View style={container}>
        <Text style={title}>RESERVATIONS</Text>
        <ModalTemplate
          modalVisible={modalVisible}
          animationType='slide'>
          <CreatePage
            onComplete={this._getAllReservations} />
        </ModalTemplate>
        <FlatList 
          data={allReservations}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            const { name, hotelName, arrivalDate } = item
            const formattedDate = convertISO(arrivalDate)

            return (<Reservation
              name={name}
              hotelName={hotelName}
              arrivalDate={formattedDate}
            />)
          }}
        />
        <TouchableHighlight
          style={createReservationButtonContainer}
          onPress={this._createReservation}
        >
          <Text style={createReservationButton}>Make A Reservation</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default graphql(allReservationsQuery, { name: 'allReservationsQuery' })(ListPage)
