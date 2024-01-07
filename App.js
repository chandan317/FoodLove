import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search
 *   - RestaurantContainer
 *      - RestaurantCard
 *         -Img
 *         -Name of Res,Star Rating ,cuisine , delivery time
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */

// header

const Header = () => {
  return (
    <div className="header">
      <div className=" logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// const color = { backgroundColor: "yellow" };
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resObj);

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/unionl8yysinb1g9zm49"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines} </h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
const resObj = {
  info: {
    id: "85296",
    name: "DVG Benne Dosa",
    cloudinaryImageId: "t64rpsg9htqnf2zax7sv",
    locality: "Amarjoythi Layout",
    areaName: "Domlur",
    costForTwo: "₹100 for two",
    cuisines: ["South Indian"],
    avgRating: 4.1,
    veg: true,
    parentId: "7046",
    avgRatingString: "4.1",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 3.5,
      serviceability: "SERVICEABLE",
      slaString: "36 mins",
      lastMileTravelString: "3.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-05 21:00:00",
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
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹120 OFF",
      subHeader: "ABOVE ₹199",
      discountTag: "FLAT DEAL",
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
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/dvg-benne-dosa-amarjoythi-layout-domlur-bangalore-85296",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
