import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import '../App.css';
import {selectVegetarian, selectVegan, selectKcal, selectProducer, fetchProductsIfNeeded} from '../actions'
import {Grid, Row} from 'react-bootstrap'
import DietFilter from '../components/DietFilter.js'
import ProducerList from '../components/ProducerList.js'
import ProductList from '../components/ProductList.js'

class App extends Component {
    static PropTypes = {
        selectedVegan: PropTypes.bool.isRequired,
        selectedVegetarian: PropTypes.bool.isRequired,
        selectedKcal: PropTypes.number.isRequired,
        selectedProducer: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedProducer !== this.props.selectedProducer) {
            const {dispatch, selectedProducer} = nextProps
            dispatch(fetchProductsIfNeeded(selectedProducer))
        }
    }
    filterVegetarian = value => {
        if (this.props.selectedVegetarian === false) {
            this.props.dispatch(selectVegetarian(true))
            if (this.props.selectedVegan === true) {
                this.props.dispatch(selectVegan(false))
            }
        } else {
            this.props.dispatch(selectVegetarian(false))
        }
    }

    filterVegan = value => {
        if (this.props.selectedVegan === false) {
            this.props.dispatch(selectVegan(true))
            if (this.props.selectedVegetarian === true) {
                this.props.dispatch(selectVegetarian(false))
            }
        } else {
            this.props.dispatch(selectVegan(false))
        }
    }

    filterKcal = value => {
        this.props.dispatch(selectKcal(value))
    }

    setProducer = producer => {
        this.props.dispatch(selectProducer(producer))
    }

    clickBack = () => {
        this.props.dispatch(selectProducer(""))
    }

    render() {
        const {selectedKcal, selectedVegan, selectedVegetarian, categories, name, thumbnail, selectedProducer} = this.props
        const producerSelected = selectedProducer !== ""
        return (
            <div className="App">
                <div className="App-header">
                    <Grid>
                        <Row className="Text-image-block">
                            <img src="https://image.flaticon.com/sprites/new_packs/146089-food-collection.png" className="App-logo" alt="logo"/>
                        </Row>
                        <Row className="Text-image-block">
                            <h1>Fast Food Ern&auml;hrungshelfer</h1>
                        </Row>
                    </Grid>
                </div>
                <div className="Space"></div>
                <DietFilter onVegetarian={this.filterVegetarian} onVegan={this.filterVegan} onKcal={this.filterKcal} value={selectedKcal} options={[200, 400, 600, 800, 1000]} selectedVegetarian={selectedVegetarian} selectedVegan={selectedVegan}/>
                <div className="Space"></div>
                {!producerSelected
                    ? <ProducerList onProducer={this.setProducer}/>
                  : <ProductList selectedProducer={selectedProducer} categories={categories} name={name} thumbnail= {thumbnail} selectedVegan={selectedVegan} selectedVegetarian={selectedVegetarian} selectedKcal={selectedKcal} clickBack={this.clickBack}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {selectedProducer, productsByProducer, selectedVegan, selectedVegetarian, selectedKcal} = state
    const {isFetching, name, thumbnail, items: categories} = productsByProducer[selectedProducer] || {
        isFetching: true,
        items: []
    }

    return {
        selectedProducer,
        categories,
        isFetching,
        selectedVegetarian,
        selectedVegan,
        selectedKcal,
        name,
        thumbnail
    }
}

export default connect(mapStateToProps)(App)
