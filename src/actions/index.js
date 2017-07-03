import mcdonalds from '../mcdonalds.json'
import burger_king from '../burger_king'
import subway from '../subway'
export const SELECT_VEGETARIAN = 'SELECT_VEGETARIAN'
export const SELECT_VEGAN = 'SELECT_VEGAN'
export const SHOW_PRODUCER = 'SHOW_PRODUCER'
export const SELECT_PRODUCER = 'SELECT_PRODUCER'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const SELECT_KCAL = 'SELECT_KCAL'



export const selectVegetarian = filter => ({
  type: SELECT_VEGETARIAN,
  filter
})

export const selectVegan = filter => ({
  type: SELECT_VEGAN,
  filter
})
export const selectKcal = filter => ({
  type: SELECT_KCAL,
  filter
})

export const showProducer = producer => ({
  type: SHOW_PRODUCER,
  producer
})

export const selectProducer = producer => ({
  type: SELECT_PRODUCER,
  producer
})

export const requestProducts = producer => ({
  type: REQUEST_PRODUCTS,
  producer
})

export const receiveProducts = (producer, json) => ({
  type: RECEIVE_PRODUCTS,
  producer,
  categories: json[0].products.categories,
  name: json[0].name,
  thumbnail: json[0].thumbnail
})

export const fetchProducts = producer => dispatch => {
  dispatch(requestProducts(producer))
  if(producer === 'mcdonalds'){
    return dispatch(receiveProducts(producer, mcdonalds))
  }
  else if (producer === 'burgerking') {
    return dispatch(receiveProducts(producer, burger_king))
  }
  else if (producer === 'subway') {
    return dispatch(receiveProducts(producer, subway))
  } else {
    return ""
  }
}
const shouldFetchProducts = (state, producer) => {
  const categories = state.productsByProducer[producer]
  if (!categories) {
    return true
  }
  if (categories.isFetching) {
    return false
  }
}

export const fetchProductsIfNeeded = producer => (dispatch, getState) => {
  if (shouldFetchProducts(getState(), producer)) {
    return dispatch(fetchProducts(producer))
  }
}
