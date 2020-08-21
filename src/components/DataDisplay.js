import React, { Component } from 'react'
import data from '../Data'

class DataDisplay extends Component {
  constructor(props) {
    super()

    this.state = {
    }
  }

  render() {
    const currentIndex = data[this.props.currentIndex]
    return (
      <div className='complete-profile'>
        <p className='index-position'>{currentIndex.id}/{data.length}</p>
        <p className='profile-name'>{currentIndex.name.first} {currentIndex.name.last}</p>
        <p className='where-from'>From: {currentIndex.city}, {currentIndex.country}</p>
        <p className='job-title'>Job Title: {currentIndex.title}</p>
        <p className='employer'>Employer: {currentIndex.employer}</p>
        <p className='favorite-movies'>Favorite Movies:
          <li className='movie-one'>{currentIndex.favoriteMovies[0]}</li>
          <li className='movie-two'>{currentIndex.favoriteMovies[1]}</li>
          <li className='movie-three'>{currentIndex.favoriteMovies[2]}</li>
        </p>
      </div>
    )
  }
}

export default DataDisplay