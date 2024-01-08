import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local State variable - Super powerful variable
  const [listOfResturant, setListOfResturant]= useState([  
  {
    data: {
      type: "F",
      id: "84",
      name: "Richie Rich Juices & Shakes",
      uuid: "40b0b55b-e9af-43e7-ae-be1b012d0b1d",
      city: "21",
      area: "Athwa",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
      cuisines: ["Ice Cream"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 30,

      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
  },
  {
    data: {
      type: "F",
      id: "81094",
      name: "Juices & Shakes",
      uuid: "40b0-e9af-43e7-aeae-be1b012d0b1d",
      city: "21",
      area: "Athwa",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
      cuisines: ["Ice Cream"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 30,

      avgRating: "4.5",
      totalRatings: 500,
      new: false,
    },
  },
  {
    data: {
      type: "F",
      id: "8094",
      name: "KFC",
      uuid: "40b0b55b-e9af-43e7-aeae-be1b0d0b1d",
      city: "21",
      area: "Athwa",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
      cuisines: ["Ice Cream"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 30,

      avgRating: "4.3",
      totalRatings: 500,
      new: false,
    },
  }])


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filterList);
            setListOfResturant(filterList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((restaurant) => {
          return (
            <ResturantCard key={restaurant.data.uuid} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
