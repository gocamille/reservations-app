import validation from './validation'
import validate from 'validate.js'

const validator = (fieldName, value) => {
  console.log(fieldName, value)
  var formValues = {}
  formValues[fieldName] = value

  var formFields = {}
  formFields[fieldName] = validation[fieldName]

  const result = validate(formValues, formFields)

  if (result) {
    return result[fieldName][0]
  }
  return null
}

export default validator
