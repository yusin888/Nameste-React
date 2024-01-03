import React from "react";
import ReactDOM from "react-dom/client";

// Headers
// -logo
// -nav-item

// body
// -search
// -Resturant container
//     -Resturant Card
//        -name , rating , cuisine ,
// Footer
// -Copyright
// -links
// -Address
// -Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {/* jsx does not work well with local image*/}
        <img
          className="logo"
          src={require("./Public/logo1.png")}
          alt="Image description"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={require("./Public/images.jpg")}
        alt="Biryani"
      />
      <h3>Meghana Food</h3>
      <h4>Biryani North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
