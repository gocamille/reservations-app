import * as React from 'react'
import { Modal } from 'react-native'

class ModalTemplate extends React.Component {
  render () {
    const {
      animationType,
      transparent,
      modalVisible,
      children
    } = this.props
    return (
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={modalVisible}
      >
        {children}
      </Modal>
    )
  }
}

export default ModalTemplate
