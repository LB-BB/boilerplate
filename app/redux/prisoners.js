import axios from "axios";
const SET_PRISONERS = "SET_PRISONERS";
const ADD_PRISONER = "ADD_PRISONER";
const DELETE_PRISONER = "DELETE_PRISONER";

export const setPrisoners = (prisoners) => ({
  type: SET_PRISONERS,
  prisoners,
});

export const addPrisoner = (prisoner) => ({
  type: ADD_PRISONER,
  prisoner,
});

export const deletePrisoner = (prisoner) => {
  return {
    type: DELETE_PRISONER,
    prisoner,
  };
};

export const fetchPrisoners = () => async (dispatch) => {
  try {
    const prisoners = await axios.get("/api/prisoners");
    dispatch(setPrisoners(prisoners.data));
  } catch (error) {
    console.log("oh no", error);
  }
};

export const fetchNewPrisoner = (text) => async (dispatch) => {
  try {
    const prisoner = await axios.post("/api/prisoners", text);
    dispatch(addPrisoner(prisoner.data));
  } catch (error) {
    console.log("oh no", error);
  }
};

export const fetchDeletePrisoner = (id) => async (dispatch) => {
  try {
    const prisonerToDelete = await axios.get(`/api/prisoners/${id}`);

    await axios.delete(`/api/prisoners/${id}`);
    dispatch(deletePrisoner(prisonerToDelete.data));

    console.log("deleted!");
  } catch (error) {
    console.log("this prisoner is too important to delete.");
  }
};

const initialState = [];
const prisonersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRISONERS:
      return [...action.prisoners];
    case ADD_PRISONER:
      return [...state, action.prisoner];
    case DELETE_PRISONER:
      return state.filter((item) => item.id !== action.prisoner.id);

    default:
      return state;
  }
};

export default prisonersReducer;
