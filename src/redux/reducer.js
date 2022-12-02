import { GET_DATA_FAILURE, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./action";

const initialState = {
  userList: [],
  loading: false,
  error: false,
};

export const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
      return {
        userList: [],
        loading: true,
        error: false,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        userList: payload,

        loading: false,
        error: false,
      };
    }

    case GET_DATA_FAILURE: {
      return {
        userList: [],
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
