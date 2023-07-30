import React from "react";
import "./Home.css";
import ImageSlider from "./components/ImagesSlider";
import { SliderData } from "./components/SliderData";
import Product from "./product";
import Onebox from "./onebox";
import { useDispatch } from "react-redux";
import { actionCreator } from "./state/index";
import img1 from "./assests/Screenshot 2023-02-13 190408.png";
import { useState, useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      setShowPopup(true);
      localStorage.setItem("visited", "true");
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home">
      <ImageSlider slides={SliderData} className="ok" />
      <div className="product_row">
        <Product
          title="Top picks for your home"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
          name="ACs"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
          name2="Refrigetor"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
          name3="microwave"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
          name4="washing machine"
        />

        <Product
          title="Shop & Pay | Earn rewards daily"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg"
          name="Claims your scratch card"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg"
          name2="Redeem your rewards"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg"
          name3="Unlock more rewards"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_PayAndShop._SY116_CB627364845_.jpg"
          name4="Explore all offers"
        />
        <Product
          title="Amazon Pay | Book your travel tickets"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Flight_1._SY116_CB636958158_.jpg"
          name="Flight tickets"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Bus_3._SY116_CB636958158_.jpg"
          name2="Bus tickets"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Train_2._SY116_CB636958158_.jpg"
          name3="Train Tickets"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Travel_accessories_4._SY116_CB636958158_.jpg"
          name4="Travel products"
        />
        <button
          onClick={() => dispatch(actionCreator.depositMoney(1))}
        ></button>
      </div>
      <div className="product_row">
        <Product
          title="Shop by Category"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg"
          name="ACs"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg"
          name2="Refrigetor"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg"
          name3="microwave"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
          name4="washing machine"
        />

        <Product
          title="Shop & Pay | Earn rewards daily"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
          name="Claims your scratch card"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
          name2="Redeem your rewards"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
          name3="Unlock more rewards"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
          name4="Explore all offers"
        />
        <Product
          title="Amazon Pay | Book your travel tickets"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg"
          name="Flight tickets"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpgg"
          name2="Bus tickets"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg"
          name3="Train Tickets"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
          name4="Travel products"
        />
        <div className="credit">
          <h3>Pay Your Credit Card Bill</h3>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
            className="ok1"
            alt=""
          />
          <a href={() => false}>...</a>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <button onClick={handleClosePopup}>Close</button>
          <div>click To see more for viewing all products</div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
