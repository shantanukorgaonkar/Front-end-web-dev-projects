import PropTypes from 'prop-types'
import Button from './Button'





const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text="Add" buttonColor="red" />
          
          

        </header>
    )
}

Header.defaultProps={
    title:"Give me a Title!",
}
Header.propTypes={
    title: PropTypes.string.isRequired
}

/*const headerStyle={
    color:'red', 
    backgroundColor:'black'
}*/
export default Header
