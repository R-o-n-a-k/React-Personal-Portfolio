import React from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader(loading) {
  const override = {
    display: "block",
    margin: "0 auto",
    with: "100%",
    height: "100vh",
  };
  return (
    <HashLoader
      size={50}
      color={"#42A5F5"}
      cssOverride={override}
      loading={loading}
    />
  );
}

export default Loader;
