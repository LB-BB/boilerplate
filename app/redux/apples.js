import axios from "axios";
const SET_APPLES = "SET_APPLES";
const ADD_APPLE = "ADD_APPLE";
const DELETE_APPLE = "DELETE_APPLE";

export const setApples = (apples) => ({
  type: SET_APPLES,
  apples,
});

export const addApple = (apple) => ({
  type: ADD_APPLE,
  apple,
});

export const deleteApple = (apple) => {
  return {
    type: DELETE_APPLE,
    apple,
  };
};

export const fetchApples = () => async (dispatch) => {
  try {
    const apples = await axios.get("/api/apples");
    dispatch(setApples(apples.data));
  } catch (error) {
    console.log("oh no", error);
  }
};

export const fetchNewApple = (text) => async (dispatch) => {
  try {
    const apple = await axios.post("/api/apples", text);
    dispatch(addApple(apple.data));
  } catch (error) {
    console.log("oh no", error);
  }
};

export const fetchDeleteApple = (id) => async (dispatch) => {
  try {
    const appleToDelete = await axios.get(`/api/apples/${id}`);

    await axios.delete(`/api/apples/${id}`);
    dispatch(deleteApple(appleToDelete.data));

    console.log("deleted!");
  } catch (error) {
    console.log("this apple is too important to delete.");
  }
};

const initialState = [];
const applesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPLES:
      return [...action.apples];
    case ADD_APPLE:
      return [...state, action.apple];
    case DELETE_APPLE:
      return state.filter((item) => item.id !== action.apple.id);

    default:
      return state;
  }
};

export default applesReducer;
