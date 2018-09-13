import React from 'react'
import { 
  View, 
  Text, 
  TouchableHighlight 
} from 'react-native'

import { reservationStyles } from './styles/styles'

import ModalTemplate from './Modal'

class Reservation extends React.Component {
  state = {
    modalVisible: false
  }

  componentDidMount () {
    console.log(this.props)
  }

  _toggleReservation = () => {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible
    }))
  }

  render () {
    const { modalVisible } = this.state
    const { 
      name, 
      hotelName, 
      arrivalDate 
    } = this.props
    const { 
      text, 
      wrapper, 
      modal, 
      modalText, 
      modalTitle,
      closeReservationButton,
      closeReservationButtonContainer 
    } = reservationStyles
    return (
      <View style={wrapper}>
        <ModalTemplate
          style={modal}
          modalVisible={modalVisible}
          animationType='slide'>
          <Text style={modalTitle}>RESERVATION</Text>
          <Text style={modalText}>Name: {name}</Text>
          <Text style={modalText}>Arrival Date: {arrivalDate}</Text>
          <Text style={modalText}>Hotel: {hotelName}</Text>
          <TouchableHighlight
            style={closeReservationButtonContainer}
            onPress={this._toggleReservation}
          >
            <Text
            style={closeReservationButton}>Close</Text>
          </TouchableHighlight>
        </ModalTemplate>
        <TouchableHighlight 
          onPress={this._toggleReservation}>
          <Text style={text}>{name}, {arrivalDate} {hotelName}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Reservation
