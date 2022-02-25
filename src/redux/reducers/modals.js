import { SET_MODAL } from '../actions/modals';

const initialState = {
  modal: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        modal: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
