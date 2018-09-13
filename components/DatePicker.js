import React from 'react'
import DatePicker from 'react-native-datepicker'

// Use today's date to set arrivalDate minDate limit
const todaysDate = new Date().toISOString()

class DatePickerTemplate extends React.Component {
  render () {
    const {
      date,
      setDate,
      mode } = this.props
    return (
      <DatePicker
        style={{ width: 300, padding: 20 }}
        date={date}
        mode='date'
        placeholder='Select Date'
        format='YYYY-MM-DD'
        minDate={todaysDate}
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        onDateChange={(date) => setDate(date, mode)}
      />
    )
  }
}

export default DatePickerTemplate
