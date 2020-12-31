import axios from "axios";
const SET_PRISONS = "SET_PRISONS";
const ADD_PRISON = "ADD_PRISON";
const DELETE_PRISON = "DELETE_PRISON";

export const setPrisons = (prisons) => ({
  type: SET_PRISONS,
  prisons,
});

export const addPrison = (prison) => ({
  type: ADD_PRISON,
  prison,
});

export const deletePrison = (prison) => {
  return {
    type: DELETE_PRISON,
    prison,
  };
};

export const fetchPrisons = () => async (dispatch) => {
  try {
    const prisons = await axios.get("/api/prisons");
    dispatch(setPrisons(prisons.data));
  } catch (error) {
    console.log("oh no", error);
  }
};

export const fetchNewPrison = (text) => async (dispatch) => {
  try {
    const prison = await axios.post("/api/prisons", text);
    dispatch(addPrison(prison.data));
  } catch (error) {
    console.log("oh no", error);
  }
};

export const fetchDeletePrison = (id) => async (dispatch) => {
  try {
    const prisonToDelete = await axios.get(`/api/prisons/${id}`);

    await axios.delete(`/api/prisons/${id}`);
    dispatch(deletePrison(prisonToDelete.data));

    console.log("deleted!");
  } catch (error) {
    console.log("this prison is too important to delete.");
  }
};

const initialState = [];

const prisonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRISONS:
      return [...action.prisons];
    case ADD_PRISON:
      return [...state, action.prison];
    case DELETE_PRISON:
      return state.filter((item) => item.id !== action.prison.id);

    default:
      return state;
  }
};

export default prisonsReducer;
