import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card src={"https://www.thewanderlustwithin.com/wp-content/uploads/2019/12/villa-cancun-rental.jpg"} tittle={"Entire homes"} description={"Take an early morning stroll and enjoy the Trevi Fountain without the tourists. Wander around the historic streets while the city sleeps."} price={"Rs.15000"}/>
        <Card tittle={"Big Homes"} description={"Take an early morning stroll and enjoy the Trevi Fountain without the tourists. Wander around the historic streets while the city sleeps."} src={"https://media.cntraveler.com/photos/5ea354e75e5dc70008d054b9/16:9/w_2560%2Cc_limit/24912891-australia-3.jpg"} price={"Rs.10000"}/>
        <Card description={"Take an early morning stroll and enjoy the Trevi Fountain without the tourists. Wander around the historic streets while the city sleeps."} src={"https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"} tittle={"Luxury homes"} price={"Rs.8000"}/>

      </div>
      <div className="home__section">
        <Card src={"https://miro.medium.com/max/1024/1*ty1y3p7KiolYhUOstFzwFA.png"} description={"Take an early morning stroll and enjoy the Trevi Fountain without the tourists. Wander around the historic streets while the city sleeps."} tittle={"Online Experience"} price={"Rs.9000"} />
        <Card src={"https://assets.architecturaldigest.in/photos/60c99c3a3f2db0747b7c1f0d/16:9/w_2400,h_1350,c_limit/Airbnb%20is%20looking%20for%2012%20people%20to%20live%20anywhere%20for%20one%20year%201.jpg"} description={"Take an early morning stroll and enjoy the Trevi Fountain without the tourists. Wander around the historic streets while the city sleeps."} tittle={"Full View"} price={"Rs.17000"}/>

        <Card src={"https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/2dc381b9-041c-44f4-b50d-d568f4e18ac5/fef23926-2322-448d-960d-72f8f442e140/1280x720/match/image.jpg&w=1280&h=720&q=90&c=cc"} description={"Take an early morning stroll and enjoy the Trevi Fountain without the tourists. Wander around the historic streets while the city sleeps. "} tittle={"Happy Stays"} price={"Rs.15000"}/>

      </div>
    </div>
  );
}

export default Home;
