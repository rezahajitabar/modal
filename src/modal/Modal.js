import React from 'react'
import './Modal.css'
import propTypes from 'prop-types'
export default class Modal extends React.Component {
  
  render(){
    return (
      <div>
        <div className='cd-popup is-visible' role='alert'>
           <div className='cd-popup-container'>
           <p>{this.props.message}</p>
            <ul className='cd-buttons'>
                <li><a href="#">تایید</a></li>
                <li><a href="#">بازگشت</a></li>
            </ul>
            <a  href="#0" className='cd-popup-close img-replace'>X</a>
           </div>
        </div>
      </div>
    )
  }
 
  }

Modal.defaultProps= {
message:'شما با موفقیت وارد پنل کاربریتان شدید'
}

