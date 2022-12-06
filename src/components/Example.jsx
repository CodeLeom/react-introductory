import React, { Component } from 'react'
import '../index.css'

class Example extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome to React State',
         btn: 'click me'
      }
    }
   btnChanged = ()=> {
        this.setState({
            message: 'Thank you for clicking the button',
            btn: 'clicked'
        })
   }

  render() {
    const styles = {
        color: 'black'
    }
    return (
      <>
        <p>{this.state.message}</p>
        <button className='btn' style={styles} onClick={this.btnChanged}>{this.state.btn}</button>
      </>
    )
  }
}

export default Example



