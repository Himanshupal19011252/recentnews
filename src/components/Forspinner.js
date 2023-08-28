import React, { Component } from 'react'
import isSpinner from './isSpinner.gif'

export default class Forspinner extends Component {
  render() {
    return (
        <div className="text-center">
            <img className="my-3" src={isSpinner} alt="loading" />
        </div>
    )
  }
}
