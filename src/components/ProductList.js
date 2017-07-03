import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col, Well, Button} from 'react-bootstrap'
import '../App.css';

const ProductList = ({selectedProducer, clickBack, categories, name, thumbnail, selectedVegetarian, selectedVegan, selectedKcal}) => (
    <div className="ProductList">
        <Grid>
          <Row className="Back-button">
              <Button onClick={e => clickBack(e)}>Zur&uuml;ck zur &Uuml;bersicht</Button>
          </Row>
          <Row className="Producer-row">
            <div className="Producer-name-product">
              <div className="Producer-block">
              <img src={thumbnail} alt={name}/>
              <h3 className="Producer-name">{name}</h3>
              </div></div>
          </Row>
            {categories.map((category, i) => <Grid key={i}>
                <Row className="Categories">
                    <h3>{category.categoryName + ":"}
                    </h3>
                </Row>
                <div className="Space"></div>

                <Row>
                    {selectedVegan
                        ? category.products.filter(product => product.calories <= selectedKcal && product.vegan).map((product, j) => <Col key={j} xs={12} sm={6} md={3} lg={3}>
                            <Well className="Product-card">
                                <p className="Diet-info">{"Vegan, unter " + Math.ceil(product.calories / 100) * 100 + " kcal:"}</p>
                                <img src={product.thumbnail} alt={product.title}/>
                                <h4>{product.title}</h4>
                                <p>{product.calories + " kcal"}</p>
                            </Well>
                        </Col>)
                        : <div></div>}
                </Row>
                <Row>
                    {selectedVegetarian
                        ? category.products.filter(product => product.calories <= selectedKcal && product.vegetarian).map((product, j) => <Col key={j} xs={12} sm={6} md={3} lg={3}>
                            <Well className="Product-card">
                                <p className="Diet-info">{product.vegan
                                        ? "Vegan, unter " + Math.ceil(product.calories / 100) * 100 + " Kcal:"
                                        : "Vegetarisch, unter " + Math.ceil(product.calories / 100) * 100 + " kcal:"}</p>
                                <img src={product.thumbnail} alt={product.title}/>
                                <h4>{product.title}</h4>
                                <p>{product.calories + " kcal"}</p>
                            </Well>
                        </Col>)
                        : <div></div>}
                </Row>
                <Row>
                    {!selectedVegan && !selectedVegetarian
                        ? category.products.filter(product => product.calories <= selectedKcal).map((product, j) => <Col key={j} xs={12} sm={6} md={3} lg={3}>
                            <Well className="Product-card">
                                <p className="Diet-info">{product.vegan
                                        ? "Vegetarisch, unter " + Math.ceil(product.calories / 100) * 100 + " kcal:"
                                        : "Unter " + Math.ceil(product.calories / 100) * 100 + " kcal:"}</p>
                                <img src={product.thumbnail} alt={product.title}/>
                                <h4>{product.title}</h4>
                                <p>{product.calories + " kcal"}</p>
                            </Well>
                        </Col>)
                        : <div></div>}
                </Row>
            </Grid>)}
        </Grid>
    </div>

)
ProductList.propTypes = {
    clickBack: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    selectedVegetarian: PropTypes.bool.isRequired,
    selectedVegan: PropTypes.bool.isRequired,
    selectedKcal: PropTypes.number.isRequired
}
export default ProductList
