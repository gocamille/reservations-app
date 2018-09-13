import React from 'react'
import { Modal } from 'react-native'

class ModalTemplate extends React.Component {
  render () {
    const { animationType, transparent } = this.props
    return (
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={this.props.modalVisible}
      >
        {this.props.children}
      </Modal>
    )
  }
}

export default ModalTemplate
