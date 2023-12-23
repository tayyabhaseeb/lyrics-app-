import { createContext, useEffect, useReducer } from "react";

const AppContext = createContext();

//! INITIAL STATE

const initialState = {
  track_List: [],
  isLoading: false,
};

// ! ACTIONS AREA

function fetchData(data) {
  return {
    type: "DATA_FETCH",
    payload: data,
  };
}

function isLoadingData() {
  return {
    type: "DATA_LOADING",
  };
}

//  ! REDUCER AREA

function reducer(state, action) {
  switch (action.type) {
    case "DATA_FETCH":
      return {
        ...state,
        track_List: action.payload,
        isLoading: false,
      };
    case "DATA_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      throw new Error("Not Found");
  }
}

//! CONTEXT AREA

// eslint-disable-next-line react/prop-types
function AppContextProvider({ children }) {
  const [{ track_List, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    dispatch(isLoadingData()); // Assuming this action is used to indicate that data is being loaded.

    fetch(
      `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=19395af641ce53acb3fb0399a7d959aa`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  //   dispatch(fetchData(data.message.body.track_List))
  //https://cors-anywhere.herokuapp.com/

  return (
    <AppContext.Provider value={{ track_List, isLoading, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };
