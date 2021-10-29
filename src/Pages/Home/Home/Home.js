import React from "react";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import NewsShelter from "../NewsShelter/NewsShelter";
import PopularPackages from "../PopularPackages/PopularPackages";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularPackages></PopularPackages>
            <Faq></Faq>
            <NewsShelter></NewsShelter>
        </div>
    );
};

export default Home;
