import React from "react";
import MobilesChild from "./Mobiles-Child";

const Mobile = () => {
  let Mobiles = [
    {
      id: "001",
      name: "Oneplus11",
      price: 56999,
      isPurchased: true,
    },
    {
      id: "002",
      name: "Vivo Y100",
      price: 24999,
      isPurchased: false,
    },
    {
      id: "003",
      name: "Redmi 10",
      price: 56999,
      isPurchased: true,
    },
    {
      id: "004",
      name: "Iphone 13",
      price: 62990,
      isPurchased: false,
    },
    {
      id: "005",
      name: "Nokia",
      price: 12000,
      isPurchased: true,
    },
    {
      id: "006",
      name: "Poco M4",
      price: 13999,
      isPurchased: true,
    },
  ];
  return (
    <div>
      <MobilesChild Mobiless={Mobiles} />
    </div>
  );
};

export default Mobile;
