import React from "react";
import RestaurantOnePhoto from "../../../public/restaurant-1-photo.jpg";
import ForkAndSpoon from "../../../public/fork-and-spoon.jpg";
import SearchIcon from "@mui/icons-material/Search";

const LandingPage = () => {
  const dealRepeat = [1, 2, 3, 4];
  const cardRepeat = [1, 2, 3, 4, 5];

  return (
    <div className="w-full">
      <div className="h-80 w-full grid grid-cols-1 place-items-center">
        <div className="col-span-1">
          <p className="text-4xl">Discover your next culinary adventure</p>
          <p className="text-xl text-right">
            unearth hidden delights, one bite at a time
          </p>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-3 gap-4">
        <div className="col-span-2 h-100">
          <img className="h-full" src={ForkAndSpoon.src} alt="fork-and-spoon" />
        </div>

        <div className="col-span-1 pr-6 pr-8">
          <div className="m-4">
            <div className="flex">
              <p className="text-2xl font-bold text-custom-four">FeastFinder</p>
              <SearchIcon className="text-4xl font-bold text-custom-four" />
            </div>
            <p className="text-base text-custom-four">
              Embark on a culinary journey filled with mouth-watering dishes and
              unforgettable dining experiences. From hidden gems to renowned
              establishments, FeastFinder has all the insider tips you need to
              satisfy your food cravings
            </p>
          </div>
          <div className="m-4">
            <form>
              <label className="mb-2 text-sm font-medium sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-custom-five"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-black border border-black rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Find your next food adventure."
                  required
                />
                <button
                  type="submit"
                  className="text-custom-one absolute end-2.5 bottom-2.5 bg-custom-three hover:bg-custom-four font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="m-4 pt-4">
            <p className="text-2xl text-custom-four font-bold">Latest Deals</p>
          </div>
          <div className="grid grid-cols-1">
            {dealRepeat.map((deal) => {
              return (
                <div className="m-4 h-20 border border-black">Get 20% OFF</div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="m-8 p-4 h-2/4 rounded-2xl bg-custom-two border border-custom-two">
        <div className="p-4">
          <p className="text-2xl text-custom-five font-bold">Browse List</p>
        </div>
        <div className="p-4 grid auto-cols-[20rem] grid-flow-col gap-8 overflow-x-auto">
          {cardRepeat.map((item) => {
            return (
              <div className="max-w-sm rounded-2xl border border-custom-three bg-custom-three text-custom-five shadow-lg">
                <img
                  src={RestaurantOnePhoto.src}
                  alt="restaurant"
                  className="rounded-t-2xl"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Restaurant One</div>
                  <p className="text-custom-five text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-2 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-custom-five mr-2 mb-2">
                    Western
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-custom-five mr-2 mb-2">
                    Fusion
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
