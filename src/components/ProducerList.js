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
                        <button className="Producer-link" onClick={e => onProducer('mcdonalds')}>
                            <Row>
                                <Col className="Producer-icon" xs={5} md={5}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/143px-McDonald%27s_Golden_Arches.svg.png" alt="McDonalds"/>
                                </Col>
                                <Col xs={7} md={7}>
                                    <h3 className="Producer-name">McDonald&apos;s</h3>
                                </Col>
                            </Row>
                        </button>
                    </Well>

                    <Well>
                        <button className="Producer-link" onClick={e => onProducer('burgerking')}>
                            <Row>
                                <Col className="Producer-icon" xs={5} md={5}>
                                    <img src="https://upload.wikimedia.org/wikipedia/de/thumb/c/cb/Logo_Burger_King.svg/200px-Logo_Burger_King.svg.png" alt="Burger King"/>
                                </Col>
                                <Col xs={7} md={7}>
                                    <h3 className="Producer-name">Burger King</h3>
                                </Col>
                            </Row>
                        </button>
                    </Well>
                    <Well>
                        <button className="Producer-link" onClick={e => onProducer('subway')}>
                            <Row>
                                <Col className="Producer-icon" xs={5} md={5}>
                                    <img src="http://www.subway.com/~/media/base_english/images/branding/subway_logo_og.png" alt="Burger King"/>
                                </Col>
                                <Col xs={7} md={7}>
                                    <h3 className="Producer-name">Subway</h3>
                                </Col>
                            </Row>
                        </button>
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
