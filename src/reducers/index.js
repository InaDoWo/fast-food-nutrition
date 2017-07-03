import {
    combineReducers
} from 'redux'
import {
    SELECT_VEGAN,
    SELECT_VEGETARIAN,
    SELECT_KCAL,
    SELECT_PRODUCER,
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS
} from '../actions'

const selectedVegetarian = (state = false, action) => {
    switch (action.type) {
        case SELECT_VEGETARIAN:
            return action.filter
        default:
            return state
    }
}
const selectedVegan = (state = false, action) => {
    switch (action.type) {
        case SELECT_VEGAN:
            return action.filter
        default:
            return state
    }
}

const selectedKcal = (state = 1000, action) => {
  switch (action.type) {
      case SELECT_KCAL:
          return action.filter
      default:
          return state
  }
}

const selectedProducer = (state = '', action) => {
    switch (action.type) {
        case SELECT_PRODUCER:
            return action.producer
        default:
            return state
    }
}

const categories = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                isFetching: false,
                name: action.name,
                thumbnail: action.thumbnail,
                items: action.categories,
            }
        default:
            return state

    }
}

const productsByProducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
        case REQUEST_PRODUCTS:
            return {
                ...state,
                [action.producer]: categories(state[action.producer], action)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectedVegan,
    selectedVegetarian,
    selectedKcal,
    selectedProducer,
    productsByProducer
})

export default rootReducer
