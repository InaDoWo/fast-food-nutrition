import React from 'react'
import PropTypes from 'prop-types'
import {ButtonGroup, Button, DropdownButton, MenuItem, Grid} from 'react-bootstrap'
import '../App.css';

const DietFilter = ({onVegetarian, onVegan, onKcal, value, options, selectedVegetarian, selectedVegan}) => (

    <Grid className="Diet-filter">
        <ButtonGroup justified>
          {selectedVegetarian ? <Button className="Filter-button" onClick={e => onVegetarian(e, "vegetarian")} bsStyle="success" bsSize="large" href="#" active>Vegetarisch</Button>:<Button onClick={e => onVegetarian(e, "vegetarian")} bsSize="large" href="#">Vegetarisch</Button>}
            {selectedVegan ? <Button className="Filter-button" onClick={e => onVegan(e, "vegan")} bsStyle="success" bsSize="large" href="#">Vegan</Button> : <Button onClick={e => onVegan(e, "vegan")} bsSize="large" href="#">Vegan</Button>}
            <DropdownButton className="Filter-button" value={value} bsStyle="success" bsSize="large" title={"Bis " + value + " kcal"} id="bg-justified-dropdown">
                {options.map(option => <MenuItem value={option} onClick={e => onKcal(option)} key={option} eventKey={option}><p>Bis {option} kcal</p></MenuItem>)
}
            </DropdownButton>
        </ButtonGroup>
    </Grid>

)
DietFilter.propTypes = {
  onVegetarian: PropTypes.func.isRequired,
  onVegan: PropTypes.func.isRequired,
  onKcal: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired
}
export default DietFilter
