export const ACTION_TOGGLE_EDIT_MODE = "ACTION_TOGGLE_EDIT_MODE";

export const ACTION_SET_TODOS = "ACTION_SET_TODOS";

export const setTodos = (payload) => ({
  type: ACTION_SET_TODOS,
  payload,
});

export const ACTION_SET_REQUEST_STATUS = "ACTION_SET_REQUEST_STATUS";

export const setRequestStatus = (payload) => ({
  type: ACTION_SET_REQUEST_STATUS,
  payload,
});
