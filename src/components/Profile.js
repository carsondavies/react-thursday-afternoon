import React, { Component } from 'react'
import data from '../Data'
import DataDisplay from './DataDisplay'

class Profile extends Component {
  constructor() {
    super()

    this.state = {
      currentIndex: 0
    }

    this.displayNextPerson = this.displayNextPerson.bind(this)
    this.displayPreviousPerson = this.displayPreviousPerson.bind(this)
  }

  displayNextPerson() {
    if (this.state.currentIndex >= data.length - 1) {
      this.setState({
        currentIndex: 0
      })
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  displayPreviousPerson() {
    if (this.state.currentIndex <= 0) {
      this.setState({
        currentIndex: data.length - 1
      })
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  // console.log(currentIndex)

  render() {
    return (
      <div className='background-color'>
        <div className='white-container'>
          <DataDisplay currentIndex={this.state.currentIndex} />
        </div>

        <div className='navigation-bar'>
          <button className='previous-button' onClick={this.displayPreviousPerson}> {'<'} Previous </button>
          <button className='next-button' onClick={this.displayNextPerson}>Next {'>'} </button>
        </div>
      </div >
    )
  }
  // console.log(this.state)
}

export default Profile