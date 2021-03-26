import React from 'react'
import PropTypes from 'prop-types'



const Button = ({buttonColor,text,onClick}) => {
    return (
        <div>
            <button style={{backgroundColor:buttonColor}} className='btn' onClick={onClick}>{text}</button>
        </div>
    )
}
Button.defaultProps={
    buttonColor:"black"
}
Button.propTypes={
    text:PropTypes.string,
    buttonColor:PropTypes.string
}
export default Button
