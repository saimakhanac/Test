import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { deliveryTime } = resData?.card?.info?.sla;
  const { cloudinaryImageId, name, avgRatingString, cuisines } = resData?.card?.info;
  console.log(resData);
  // console.log(props);
  return (
    <div className="res-card">
      <img
        alt="res-img"
        className="res-img"
        src={`${CDN_URL}/${cloudinaryImageId}`}></img>
      <h2>{name}</h2>
      <h4 className="cuis-name">{cuisines.join(",")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;