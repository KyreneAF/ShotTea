import spikedDrinks from "../../../spikedDrinks.json";
import React from "react";
import {
  milkTea,
  spikedThaiTea,
  taroRefresher,
  berryMojito,
  pinaColada,
  honeydewRefresherSpiked,
  cranberrySurprise,
  spikedJasmineGT,
  spikedLychee,
  spikedDragonfruitLemonade,
  peachBlackTea,
  passionfruitBomb,
  mangoPaloma,
  frozenMargarita,
  tequilaSunrise,
  spikedGreentea,
} from "../../assets/images/carouselImages";
// import "../../../sass/stylesheets/components/_SpikedMenu.scss";
const SpikedMenu = () => {
  const drinkImges = [
    milkTea,
    null,
    spikedThaiTea,
    taroRefresher,
    berryMojito,
    pinaColada,
    honeydewRefresherSpiked,
    cranberrySurprise,
    spikedJasmineGT,
    spikedLychee,
    spikedDragonfruitLemonade,
    tequilaSunrise,
    spikedGreentea,
    peachBlackTea,
    passionfruitBomb,
    mangoPaloma,
    frozenMargarita,
  ];
  return (
    // <div className="regular-menu">
    //   <div className="all-drinks">
    //     {spikedDrinks.map((drinkObj, index) => (
    //       <div key={index} className="single-drink">
    //         <img
    //           src={
    //             drinkImges[0] && drinkImges[index] !== null
    //               ? drinkImges[index]
    //               : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
    //           }
    //         />
    //         <span className="__drink-name">{drinkObj.name}</span>
    //         <div className="price">
    //           <span>{drinkObj.size[0]}.00</span>
    //           <span>{drinkObj.size[1]}.00</span>
    //         </div>
    //         <div key={index} className="ingredients">
    //           {drinkObj.ingredients.map((ingredient) => (
    //             <p>{ingredient},</p>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SpikedMenu;
// "ingredients": ["Brandy", "Boba"],
