const validation = {
  name: {
    presence: {
      message: '^Please enter a full name.',
      allowEmpty: false
    }
  },
  hotelName: {
    presence: {
      message: '^Please select a hotel.',
      allowEmpty: false
    }
  },
  arrivalDate: {
    presence: {
      message: '^Please select an arrival date.',
      allowEmpty: false
    }
  },
  departureDate: {
    presence: {
      message: '^Please select a departure date.',
      allowEmpty: false
    }
  }
}

export default validation
