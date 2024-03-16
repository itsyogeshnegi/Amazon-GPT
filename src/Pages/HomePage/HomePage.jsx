import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Banner from "../../Components/Banner/Banner";
import ProductFeed from "../../Components/ProductFeed/ProductFeed";
import Footer from "../../Components/Footer/Footer";
const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <main className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
        <Banner />
        <ProductFeed />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
