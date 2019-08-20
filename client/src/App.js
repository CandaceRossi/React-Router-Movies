import React, { useState } from "react";

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route path="/" />
        <Route path="/movies/" />
      </div>
    </div>
  );
};

export default App;

//Old Work

// import React, { useState } from "react";
// import { Route } from "react-router-dom";

// import SavedList from "./Movies/SavedList";
// import Movie from "./Movies/Movie";
// import MovieList from "./Movies/MovieList";

// const App = () => {
//   const [savedList, setSavedList] = useState([]);

//   const addToSavedList = movie => {
//     setSavedList([...savedList, movie]);
//   };

//   return (
//     <div>
//       <SavedList list={savedList} />
//       <div>
//         <Route exact path="/" component={MovieList} />
//         <Route path="/movies/:id/" render={props => <Movie {...props} />} />
//         <Route path="/movies/SavedList" component={SavedList} />
//       </div>
//     </div>
//   );
// };

// export default App;
