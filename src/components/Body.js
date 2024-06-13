import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local State variable - Super powerful variable
  const [listOfRestaurant,setListOfRestaurant] = useState(resList);

  // Normal JS Variable
  // let listOfRestaurants = [
  //   {
  //     card: {
  //       info: {
  //         id: "106763",
  //         name: "Rangoon Zaika",
  //         cloudinaryImageId: "o5bbufmcjoqdfvtm7r1n",
  //         areaName: "Kurla East",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Indian", "Chinese"],
  //         avgRating: 3,
  //         avgRatingString: "3.9",
  //         totalRatingsString: "5K+",
  //         sla: {
  //           deliveryTime: 23,
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       info: {
  //         id: "106723",
  //         name: "Dominos",
  //         cloudinaryImageId: "o5bbufmcjoqdfvtm7r1n",
  //         areaName: "Kurla East",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Indian", "Chinese"],
  //         avgRating: 4.1,
  //         avgRatingString: "4.6",
  //         totalRatingsString: "5K+",
  //         sla: {
  //           deliveryTime: 23,
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       info: {
  //         id: "106729",
  //         name: "MCD",
  //         cloudinaryImageId: "o5bbufmcjoqdfvtm7r1n",
  //         areaName: "Kurla East",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Indian", "Chinese"],
  //         avgRating: 4.7,
  //         avgRatingString: "4.6",
  //         totalRatingsString: "5K+",
  //         sla: {
  //           deliveryTime: 23,
  //         },
  //       },
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="Search"></div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res.card.info.avgRating > 4);
            setListOfRestaurant(filteredList);
            // Filter logic here
            // listOfRestaurant = listOfRestaurant.filter((res) => res.card.info.avgRating > 4);
            console.log(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((resObject) => (
          <RestaurantCard key={resObject.card.info.id} resData={resObject} />
        ))}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" star="4.4" minute="22" />
        <RestaurantCardd
          resName="Meghna Foods"
          cuisine="Biryani, North Indian, Asia"
          star="3.3"
          minute="34"
        /> */}
      </div>
    </div>
  );
};
export default Body;
