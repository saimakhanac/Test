import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
* -Logo
* - Nav Items
* Body 
* - Search
* - RestaurantContainer
 - RestaurantCard 
  - Img
  -Name of rest, star rating , cuisine, delivery time
* Footer
 - Copyright
 - Links
 - Address
 - Contact

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
          className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const resList = [
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "106763",
        name: "Rangoon Zaika",
        cloudinaryImageId: "o5bbufmcjoqdfvtm7r1n",
        locality: "Kurla East",
        areaName: "Kurla East",
        costForTwo: "₹400 for two",
        cuisines: ["Indian", "Chinese"],
        avgRating: 4,
        parentId: "166932",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 05:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹75 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=106763&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",

      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "153348",
        name: "Nawab Seekh Corner",
        cloudinaryImageId: "ssbxpgkn1fmjljx8p2k4",
        locality: "Kurla East",
        areaName: "Kurla East",
        costForTwo: "₹550 for two",
        cuisines: ["North Indian"],
        avgRating: 4.3,
        parentId: "144982",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        promoted: true,
        adTrackingId:
          "cid=14127639~p=2~adgrpid=14127639#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=153348~eid=cb574d08-ccd5-4e3c-95b9-6a0062c4ee6c~srvts=1717534225965~collid=83633",
        sla: {
          deliveryTime: 51,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "50-55 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 05:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "ABOVE ₹800",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=153348&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "7129",
        name: "Charcoal Eats - Biryani & Beyond",
        cloudinaryImageId: "9c18db360f5bee01412a495b1a67372d",
        locality: "Powai",
        areaName: "Powai",
        costForTwo: "₹499 for two",
        cuisines: ["Biryani", "Kebabs", "North Indian", "Mughlai"],
        avgRating: 4.2,
        parentId: "5338",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        promoted: true,
        adTrackingId:
          "cid=14108184~p=3~adgrpid=14108184#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=7129~eid=ff5843ed-58cd-4497-961d-1a0f0fde7cf9~srvts=1717534225965~collid=83633",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 7.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "7.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 02:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹549",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.6",
            ratingCount: "50+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=7129&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "48128",
        name: "Liberty Cafe",
        cloudinaryImageId: "b43b022b11ded346c83ea9f466e5a25b",
        locality: "Andheri West",
        areaName: "Powai",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Chinese", "Biryani"],
        avgRating: 3.9,
        parentId: "125043",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        promoted: true,
        adTrackingId:
          "cid=14093733~p=1~adgrpid=14093733#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=48128~eid=a9fff1c8-004d-404f-aa7b-685fc7c384c6~srvts=1717534225965~collid=83633",
        sla: {
          deliveryTime: 47,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=48128&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "839771",
        name: "Happy Belly",
        cloudinaryImageId: "f77223f50d3641968bc5037fccb64ccc",
        locality: "Kurla",
        areaName: "Kurla",
        costForTwo: "₹150 for two",
        cuisines: ["Indian"],
        avgRating: 3.8,
        parentId: "93401",
        avgRatingString: "3.8",
        totalRatingsString: "10+",
        promoted: true,
        adTrackingId:
          "cid=14161498~p=0~adgrpid=14161498#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=839771~eid=e81f2183-6a3a-419b-a844-76d2615954f4~srvts=1717534225965~collid=83633",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-05 06:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹150",
          discountTag: "SAVE BIG",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=839771&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "665523",
        name: "Smokin Curries",
        cloudinaryImageId: "58a6fdbc2d34efd0a275eef77b2a3717",
        locality: "Antop  Hill",
        areaName: "Sion Bhakti Park",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Indian", "Kebabs", "Tandoor", "Fast Food", "Desserts", "Beverages"],
        avgRating: 4.5,
        parentId: "329658",
        avgRatingString: "4.5",
        totalRatingsString: "500+",
        promoted: true,
        adTrackingId:
          "cid=14270944~p=1~adgrpid=14270944#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=665523~eid=5add0373-739f-484b-86dc-1f8bd72f1485~srvts=1717937445266~collid=83633",
        sla: {
          deliveryTime: 46,
          lastMileTravel: 7.3,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "7.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-10 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=665523&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "19344",
        name: "Deluxe Restaurant",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/3e78644b-935a-4ddf-b244-b3b83fdb7382_19344.jpg",
        locality: "Kurla West",
        areaName: "Kurla",
        costForTwo: "₹400 for two",
        cuisines: ["Mughlai", "Chinese", "North Indian", "Snacks", "Beverages"],
        avgRating: 4.3,
        parentId: "70705",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-09 18:51:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "15% OFF",
          subHeader: "ABOVE ₹800",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=19344&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "208111",
        name: "Jain Dugdhalay (sneh)",
        cloudinaryImageId: "apfvuiouttid0a5lpkin",
        locality: "Ghatkopar Vikhroli",
        areaName: "Ghatkopar West",
        costForTwo: "₹250 for two",
        cuisines: [
          "Sweets",
          "Desserts",
          "Bengali",
          "Indian",
          "Ice Cream",
          "Jain",
          "Use code VADAPAV10 to avail this offer!",
        ],
        avgRating: 4.7,
        veg: true,
        parentId: "108868",
        avgRatingString: "4.7",
        totalRatingsString: "1K+",
        promoted: true,
        adTrackingId:
          "cid=14270095~p=3~adgrpid=14270095#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=208111~eid=a9c5bbc3-9792-4ef9-919e-db61d80260e3~srvts=1717937445266~collid=83633",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-09 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=208111&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "355806",
        name: "Baba Falooda (Kurla)",
        cloudinaryImageId: "ys88tnnklqgfhzsftmqq",
        locality: "Powai",
        areaName: "Kurla",
        costForTwo: "₹200 for two",
        cuisines: ["Ice Cream", "Beverages", "Desserts"],
        avgRating: 4.5,
        veg: true,
        parentId: "38827",
        avgRatingString: "4.5",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-09 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "FREE ITEM",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=355806&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "814559",
        name: "I Love Fish Re",
        cloudinaryImageId: "8f13181a3b5982d7638201fefaff5367",
        locality: "Santacruz East",
        areaName: "Scruz Bandra East",
        costForTwo: "₹400 for two",
        cuisines: ["Seafood", "Biryani", "Momos"],
        avgRating: 3.9,
        parentId: "247589",
        avgRatingString: "3.9",
        totalRatingsString: "50+",
        promoted: true,
        adTrackingId:
          "cid=14271179~p=6~adgrpid=14271179#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=814559~eid=4d2acbc9-7ab9-44ac-ba17-e2a0b45213b6~srvts=1717937445266~collid=83633",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-10 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹70",
          discountTag: "POCKET HERO",
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=814559&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
  },

];


// not using keys for map is not acceptable <<<< index as key (not recomended) (use only if you dont't have a unique Id) <<<<<<<<< unique id is best to use as key

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
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>
      <h2>{name}</h2>
      <h4 className="cuis-name">{cuisines.join(",")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
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

const Body = () => {
  return (
    <div className="body">
      <div className="Search"></div>
      <div className="search">Search</div>
      <div className="res-container">
        {/* restaurant card */}
        {/* this data is for single object  */}
        {/* <RestaurantCard resData={resObj} /> */}

        {/* this is for data in array - we need to map  */}
        {resList.map((resObject, index) => (
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
