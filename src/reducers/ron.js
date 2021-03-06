import { FETCH_FACTS, UPDATE_LOADING } from '../actions/ron';

const initialState = {
  facts: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_FACTS:
      return {
        ...state,
        facts: action.payload,
        loading: false
      };
    case UPDATE_LOADING:
      return {
        ...state,
        loading: true
      };
    default: 
      return state;
  }
}
