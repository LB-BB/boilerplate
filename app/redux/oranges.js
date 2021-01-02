import axios from "axios";
const SET_ORANGES = "SET_ORANGES";
const ADD_ORANGE = "ADD_ORANGE";
const DELETE_ORANGE = "DELETE_ORANGE";

export const setOranges = (oranges) => ({
  type: SET_ORANGES,
  oranges,
});

export const addOrange = (orange) => ({
  type: ADD_ORANGE,
  orange,
});

export const deleteOrange = (orange) => {
  return {
    type: DELETE_ORANGE,
    orange,
  };
};

export const fetchOranges = () => async (dispatch) => {
  try {
    const oranges = await axios.get("/api/oranges");
    dispatch(setOranges(oranges.data));
  } catch (error) {
    console.log("oh no", error);
  }
};

export const fetchNewOrange = (text) => async (dispatch) => {
  try {
    const orange = await axios.post("/api/oranges", text);
    dispatch(addOrange(orange.data));
  } catch (error) {
    console.log("oh no", error);
  }
};

export const fetchDeleteOrange = (id) => async (dispatch) => {
  try {
    const orangeToDelete = await axios.get(`/api/oranges/${id}`);

    await axios.delete(`/api/oranges/${id}`);
    dispatch(deleteOrange(orangeToDelete.data));

    console.log("deleted!");
  } catch (error) {
    console.log("this orange is too important to delete.");
  }
};

const initialState = [];

const orangesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORANGES:
      return [...action.oranges];
    case ADD_ORANGE:
      return [...state, action.orange];
    case DELETE_ORANGE:
      return state.filter((item) => item.id !== action.orange.id);

    default:
      return state;
  }
};

export default orangesReducer;
