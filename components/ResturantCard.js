import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={ CDN_URL + resData.data.cloudinaryImageId}
          alt="resturant logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} STARS</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} MINUTES</h4>
      </div>
    );
  };

export default ResturantCard;