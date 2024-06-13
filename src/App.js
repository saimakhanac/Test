import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";




const styleCard = {
  backgroundColor: "#f0f0f0",
};




const RestaurantCardd = ({ resName, cuisine, star, minute }) => {
  console.log(star);
  return (
    <div className="res-card">
      <img
        alt="res-img"
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"></img>
      <h2>{resName}</h2>
      <h4>{cuisine}</h4>
      <h4>{star} Stars</h4>
      <h4>{minute} mins</h4>
    </div>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Header */}
      {/* Body */}
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout />);
