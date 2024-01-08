import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
  
  //Normal js variable Array - The ui will not change whenever we change the data
  let listOfResturant = [
    {
      data: {
        type: "F",
        id: "84",
        name: "Richie Rich Juices & Shakes",
        uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
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
        uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
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
        uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
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
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfResturant= listOfResturant.filter((restaurant) => {
              return restaurant.data.avgRating > 4.0
            })
            console.log(listOfResturant);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => {
          return (
            <ResturantCard key={restaurant.data.uuid} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
