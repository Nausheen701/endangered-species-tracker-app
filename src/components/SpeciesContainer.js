import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSpecies } from '../actions/speciesActions'
import SpeciesForm from './SpeciesForm'
// import SpeciesList from './SpeciesList'

class SpeciesContainer extends Component {

    componentDidMount() {
        this.props.fetchSpecies()
    }
    render() {
        return (
            <div>
               {/* <SpeciesList  /> */}
                <SpeciesForm />
            </div>
        );
    }
}

export default connect(null, {fetchSpecies})(SpeciesContainer);