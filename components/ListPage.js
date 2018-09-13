import React from 'react'
import Reservation from './Reservation'
import { graphql } from 'react-apollo'
import {
  View,
  TouchableHighlight,
  ListView,
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
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows([]),
    modalVisible: false
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.allReservationsQuery.loading && !nextProps.allReservationsQuery.error) {
      const { dataSource } = this.state
      this.setState({
        dataSource: dataSource.cloneWithRows(nextProps.allReservationsQuery.allReservations)
      })
    }
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
      dataSource
    } = this.state
    const {
      container,
      title,
      createReservationButtonContainer,
      createReservationButton
    } = listStyles

    if (this.props.allReservationsQuery.loading) {
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
        <ListView
          enableEmptySections
          dataSource={dataSource}
          renderRow={(reservation) => {
            const { name, hotelName, arrivalDate } = reservation
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