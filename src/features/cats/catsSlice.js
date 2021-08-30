export function fetchCats() {
  return function (dispatch) {
    dispatch({ type: "cats/catsLoading" });
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((r) => r.json())
      .then((cat) =>
        dispatch({ type: "cats/catsLoaded", payload: cat.images })
      );
  };
}

const initialState = {
  entities: [],
  status: "idle",
};

export default function catsReducer(state = initialState, action) {
  switch (action.type) {
    case "cats/catsLoading":
      return {
        ...state,
        status: "loading",
      };
    case "cats/catsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    default:
      break;
  }
  return state;
}
