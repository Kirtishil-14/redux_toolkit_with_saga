import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  return (
    <div className="App">
      <div>
        {cats.map((e) => {
          return <p key={e.id}>{e.title}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
