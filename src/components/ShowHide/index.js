// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstShowHide: false,
    isLastHideShow: false,
    // visibility: 'para-hide',
  }

  onShowHide = () => {
    this.setState(prevState => ({isFirstShowHide: !prevState.isFirstShowHide}))
  }

  onHideShow = () => {
    this.setState(prevState => ({isLastHideShow: !prevState.isLastHideShow}))
  }

  render() {
    const {isFirstShowHide, isLastHideShow, visibility} = this.state
    // console.log(isFirstShowHide)
    /* let firstVisibleBtn
    let lastVisibleBtn

     if (!isFirstShowHide) {
      firstVisibleBtn = `${visibility}`
      // console.log(isFirstShowHide)
    }

    if (!isLastHideShow) {
      lastVisibleBtn = `${visibility}`
    } */

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div>
              <button className="knob" type="button" onClick={this.onShowHide}>
                Show/Hide Firstname
              </button>

              {isFirstShowHide && <p className={`para ${visibility}`}>Joe</p>}
            </div>
            <div>
              <button className="knob" type="button" onClick={this.onHideShow}>
                Show/Hide Lastname
              </button>

              {isLastHideShow && <p className={`para ${visibility}`}>Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
