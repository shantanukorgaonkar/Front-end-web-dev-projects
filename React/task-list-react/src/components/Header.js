import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'




const Header = ({title,toggleButton,showAdd}) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/'&&<Button text={showAdd?'close':'add'} buttonColor={showAdd?'red':'green'} onClick={toggleButton} />}
          
          

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
