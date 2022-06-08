import { ACTION_SET_TODOS, ACTION_SET_REQUEST_STATUS } from "../actions";

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

    default:
      return state;
  }
}
