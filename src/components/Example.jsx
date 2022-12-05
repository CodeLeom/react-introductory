import React, { Component } from 'react'
import '../index.css'

class example extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome to React State',
         btn: 'submit'
      }
    }
    btnChanged= () =>{
        this.setState({
            message: 'Thank you for learning!',
            btn: 'submitted'
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

export default example



