import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col, Well} from 'react-bootstrap'
import '../App.css';

const ProducerList = ({onProducer}) => (
    <div className="Producer-list">
        <Grid>
            <Row>
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={8}>
                    <Well>
                        <Row>
                            <Col className="Producer-icon" xs={5} md={5}>
                                <button className="Producer-link" onClick={e => onProducer('mcdonalds')}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/143px-McDonald%27s_Golden_Arches.svg.png" alt="McDonalds"/></button>
                            </Col>
                            <Col xs={7} md={7}>
                                <button className="Producer-link Producer-title" onClick={e => onProducer('mcdonalds')}>
                                    <h3 className="Producer-name">McDonald&apos;s</h3>
                                </button>
                            </Col>
                        </Row>
                    </Well>

                    <Well>
                        <Row>
                            <Col className="Producer-icon" xs={5} md={5}>
                                <button className="Producer-link" onClick={e => onProducer('burgerking')}><img src="https://upload.wikimedia.org/wikipedia/de/thumb/c/cb/Logo_Burger_King.svg/200px-Logo_Burger_King.svg.png" alt="Burger King"/></button>
                            </Col>
                            <Col xs={7} md={7}>
                                <button className="Producer-link Producer-title" onClick={e => onProducer('burgerking')}>
                                    <h3 className="Producer-name">Burger King</h3>
                                </button>
                            </Col>
                        </Row>
                    </Well>
                </Col>
                <Col xs={0} md={2}></Col>
            </Row>
        </Grid>
    </div>
)
ProducerList.propTypes = {
    onProducer: PropTypes.func.isRequired
}
export default ProducerList
