import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";
function Cats() {
  const catPics = useSelector((state) => state.entities);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <div>
      <h1>CatBook</h1>
      {/*status === "idle" ? <CatList catPics={catPics} /> : <h3>loading...</h3>*/}
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
