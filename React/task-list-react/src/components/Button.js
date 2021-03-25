import React from 'react'
import PropTypes from 'prop-types'


const click=()=>{
    alert("clicked")
}
const Button = ({buttonColor,text}) => {
    return (
        <div>
            <button style={{backgroundColor:buttonColor}} className='btn' onClick={click}>{text}</button>
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
