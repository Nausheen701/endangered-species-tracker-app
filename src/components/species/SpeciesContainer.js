import React from 'react'
import { connect } from 'react-redux'

import { fetchSpecies } from '../../actions/speciesActions'



class SpeciesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchSpecies()
    }
    render() {
        return (
            <div>
               
            </div>
        )
    }
}

export default connect(null, {fetchSpecies})(SpeciesContainer);