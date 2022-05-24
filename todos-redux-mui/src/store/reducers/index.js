import {
  ACTION_SET_TODOS,
  ACTION_SET_REQUEST_STATUS,
  ACTION_TOGGLE_EDIT_MODE,
} from "../actions";

const INITIAL_STATE = {
  todos: [{ id: null, description: "", completed: false }],
  requestStatus: "",
};
export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_SET_TODOS: {
      return { ...state, todos: payload };
    }

    case ACTION_SET_REQUEST_STATUS: {
      return { ...state, requestStatus: payload };
    }

    case ACTION_TOGGLE_EDIT_MODE: {
      return { ...state, editmode: !state.editmode };
    }

    default:
      return state;
  }
}
