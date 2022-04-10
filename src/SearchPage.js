import React from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";
function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpage__info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More</Button>

        <SearchResult img="https://images.adsttc.com/media/images/5ca3/72de/284d/d1cd/8300/0002/newsletter/6.jpg?1554215641"
        location="Private room in center of LOndon"
        tittle="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.7}
        price="Rs.5000/ night"
        total="Rs 42000 total"
        />
        <SearchResult img="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Airbnb-Home-AdobeStock-298309756%20-%20Copy-2.jpeg"
        location="Private room in center of LOndon"
        tittle="30 mins to Oxford Street, Excel London"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.3}
        price="Rs.7000/ night"
        total="Rs 48000 total"
        />
        <SearchResult img="https://www.castleresorts.com/images/KBK/gallery/Kona-Bali-Kai-940x470-03-Lanai-02.jpg"
        location="Private room in center of LOndon"
        tittle="Independent Studio Luxury Apartment"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.1}
        price="Rs.15000/ night"
        total="Rs 53000 total"
        />
        <SearchResult img="https://static01.nyt.com/images/2015/02/22/magazine/22airbnb2/22mag-22airbnb.t_CA1-facebookJumbo.jpg?year=2015&h=549&w=1050&s=d5dfd3c00bcee57ec22c8aa14f619bdbba92b27ca6c0cedf44f2c0e2707b403a&k=ZQJBKqZ0VN"
        location="Private room in center of LOndon"
        tittle="5 Star Luxury Apartment"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={3.7}
        price="Rs.11000/ night"
        total="Rs 37000 total"
        />
      </div>
    </div>
  );
}

export default SearchPage;
