import * as React from 'react'
import { graphql } from 'react-apollo'
import { 
  View, 
  TextInput, 
  Text, 
  TouchableHighlight 
} from 'react-native'

import { createReservationMutation } from '../server/src/_mutation'

import validator from '../utils/validate-wrapper'

import DatePickerTemplate from './DatePicker'
import DropdownPickerTemplate from './Dropdown'

import { createReservationStyles } from './styles/styles'

class CreatePage extends React.Component {
  state = {
    name: '',
    hotelName: '',
    arrivalDate: new Date,
    departureDate: new Date,
    nameError: '',
    hotelNameError: '',
    arrivalDateError: '',
    departureDateError: ''
  }

  _setDate = (date, mode) => {
    this.setState({ [mode]: date })
  }

  _setHotelName = (value) => {
    this.setState({ hotelName: value })
  }

  _createReservation = async () => {
    const { 
      name, 
      hotelName, 
      arrivalDate, 
      departureDate 
    } = this.state
    const { 
      createReservationMutation, 
      onComplete 
    } = this.props

    await createReservationMutation({
      variables: { name, hotelName, arrivalDate, departureDate }
    })
    onComplete()
  }
 
  render () {
    const { onComplete } = this.props
    const {
      name,
      nameError,
      hotelName,
      arrivalDate,
      departureDate,
    } = this.state
    const {
      error,
      container,
      nameInput,
      buttons,
      cancelButton,
      cancelButtonText,
      saveButton,
      saveButtonText
    } = createReservationStyles

    return (
      <View style={container}>
        <TextInput
          style={nameInput}
          placeholder='Type your full name'
          onChangeText={(text) => this.setState({name: text})}
          value={name}
          onBlur={() => {
            this.setState({
              nameError: validator('name', name)
            })
          }}
        />
        {nameError ? <Text style={error}>{nameError}</Text> : null}
        <DropdownPickerTemplate
          hotelName={hotelName}
          setHotelName={this._setHotelName}
        />
        <DatePickerTemplate 
          date={arrivalDate}
          mode="arrivalDate"
          setDate={this._setDate}
        />
        <DatePickerTemplate
          date={departureDate}
          mode="departureDate"
          setDate={this._setDate}
        />

        <View style={buttons}>
          <TouchableHighlight
            style={cancelButton}
            onPress={onComplete}
          >
            <Text style={cancelButtonText}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={saveButton}
            onPress={this._createReservation}
          >
            <Text style={saveButtonText}>Make Reservation</Text>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
}

export default graphql(createReservationMutation, {name: 'createReservationMutation'})(CreatePage)