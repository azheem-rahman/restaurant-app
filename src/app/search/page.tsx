import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";

const page = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="m-4">
        <NavBar />
        <hr className="w-full mt-2 mb-2 border border-gray-400" />
      </header>
      <main>
        <Search />
      </main>
      <footer className="m-4">
        <Footer />
      </footer>
    </div>
  );
};

export default page;
