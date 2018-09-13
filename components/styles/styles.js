import { StyleSheet } from 'react-native'
import { fontSize, colors } from './utils'

export const appStyles = StyleSheet.create({
  container: {
    height: '100vh'
  }
})

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: colors.darkBlue
  },
  title: {
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: fontSize.large,
    fontWeight: '100',
    letterSpacing: 4,
    color: colors.grey
  },
  createReservationButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  createReservationButton: {
    textAlign: 'center',
    height: 60,
    width: 480,
    paddingTop: 18,
    fontSize: fontSize.large,
    color: colors.grey,
    backgroundColor: colors.teal
  }
})

export const createReservationStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  nameInput: {
    paddingHorizontal: 20,
    height: 100,
    fontSize: 20
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  saveButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 2,
    backgroundColor: colors.teal
  },
  saveButtonText: {
    color: colors.grey
  },
  cancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },
  cancelButtonText: {
    color: colors.darkBlue
  },
  datePicker: {
    padding: 10
  },
  error: {
    color: colors.red
  }
})

export const reservationStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.teal
  },
  modal: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    padding: 22,
    fontSize: fontSize.medium,
    fontWeight: '100',
    letterSpacing: 4,
    color: colors.grey
  },
  modalText: {
    padding: 22,
    fontSize: fontSize.medium,
    fontWeight: '100',
    letterSpacing: 4,
    color: colors.darkBlue
  },
  modalTitle: {
    padding: 20,
    fontSize: fontSize.large,
    letterSpacing: 4
  },
  closeReservationButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeReservationButton: {
    textAlign: 'center',
    height: 60,
    width: 480,
    paddingTop: 18,
    fontSize: fontSize.large,
    color: colors.grey,
    backgroundColor: colors.teal
  }
})
