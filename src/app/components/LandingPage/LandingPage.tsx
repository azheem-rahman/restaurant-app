"use client";

import React, { useState } from "react";
import RestaurantOnePhoto from "../../../public/restaurant-1-photo.jpg";
import ForkAndSpoon from "../../../public/fork-and-spoon.jpg";
import SearchIcon from "@mui/icons-material/Search";
import {
  AccessTimeOutlined,
  Add,
  AddLocationAlt,
  AddLocationAltOutlined,
  AttachMoneyOutlined,
  CalendarTodayOutlined,
  LanguageOutlined,
  LocalDining,
  LocalDiningOutlined,
  LocalPhoneOutlined,
  MapOutlined,
  PlusOneOutlined,
  RestaurantOutlined,
} from "@mui/icons-material";
import Select, { MultiValue } from "react-select";
import { Data, dataList } from "../../mockData/mockData";
import Link from "next/link";
import dayjs from "dayjs";

const LandingPage = () => {
  const dealRepeat = [1, 2, 3, 4];
  const cardRepeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [restaurantData, setRestaurantData] = useState<Data[]>(dataList);
  const [selectedCuisineType, setSelectedCuisineType] = useState<MultiValue<{
    value: string;
    label: string;
  }> | null>(null);
  const [openingHoursFields, setOpeningHoursFields] = useState([
    {
      dayOpen: "",
      operatingHours: "",
    },
  ]);

  const handleChangeDayOpen = (event: any) => {
    const currentIndex = event.target.name;
    const currentValue = event.target.value;
    if (typeof openingHoursFields[currentIndex] === "undefined") {
      setOpeningHoursFields([
        ...openingHoursFields,
        {
          dayOpen: currentValue,
          operatingHours: "",
        },
      ]);
    } else {
      const newOpeningHoursArr = openingHoursFields;
      newOpeningHoursArr[currentIndex] = {
        dayOpen: currentValue,
        operatingHours: newOpeningHoursArr[currentIndex].operatingHours,
      };
      setOpeningHoursFields(newOpeningHoursArr);
    }
  };

  const handleChangeOperatinghours = (event: any) => {
    const currentIndex = event.target.name;
    const currentValue = event.target.value;
    if (typeof openingHoursFields[currentIndex] === "undefined") {
      setOpeningHoursFields([
        ...openingHoursFields,
        {
          dayOpen: "",
          operatingHours: currentValue,
        },
      ]);
    } else {
      const newOpeningHoursArr = openingHoursFields;
      newOpeningHoursArr[currentIndex] = {
        dayOpen: newOpeningHoursArr[currentIndex].dayOpen,
        operatingHours: currentValue,
      };
      setOpeningHoursFields(newOpeningHoursArr);
    }
  };

  const handleAddNewDay = (event: any) => {
    event.preventDefault();
    let newField = { dayOpen: "", operatingHours: "" };
    setOpeningHoursFields([...openingHoursFields, newField]);
  };

  const handleAddRestaurantSubmit = (formData: any) => {
    console.log(selectedCuisineType);
    console.log(openingHoursFields);
    let cuisineTypeList: string[] = [];
    if (selectedCuisineType) {
      cuisineTypeList = selectedCuisineType?.map((item) => item.value);
    }

    const newRestaurant: Data = {
      name: formData.get("name"),
      address: formData.get("address"),
      dayOpen: openingHoursFields.map((item) => item.dayOpen),
      operatingHours: openingHoursFields.map((item) => item.operatingHours),
      phoneNumber: formData.get("phoneNumber"),
      website: formData.get("website"),
      reservationRequired: formData.get("reservationRequired"),
      cuisineType: cuisineTypeList,
      overallRating: 5,
      menuLink: "",
      priceRange: formData.get("priceRange"),
      region: formData.get("region"),
      dateAdded: dayjs(),
    };

    setRestaurantData([newRestaurant, ...restaurantData]);
  };

  return (
    <div className="w-full">
      <div className="h-80 w-full grid grid-cols-1 place-items-center">
        {/* Top Landing Page Title */}
        <div className="col-span-1">
          <p className="text-4xl text-custom-four">
            Discover your next culinary adventure
          </p>
          <p className="text-xl text-right text-custom-three">
            unearth hidden delights, one bite at a time
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full h-full grid grid-cols-3 gap-4 pb-4">
        {/* Left Side */}
        <div className="col-span-2 h-100">
          <img className="" src={ForkAndSpoon.src} alt="fork-and-spoon" />
        </div>

        {/* Right Side */}
        <div className="col-span-1 pr-6 pr-8 flex flex-col justify-between">
          <div className="pl-4 pr-4">
            <div className="flex mb-4">
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
          <div className="mx-4">
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

          {/* Add New Restaurant Form */}
          <div className="mt-4 mx-4">
            <p className="text-2xl font-bold">Add your new found spot here</p>
            <div className="mt-4">
              <form className="grid gap-4" action={handleAddRestaurantSubmit}>
                {/* Restaurant Name Input */}
                <div className="flex gap-4 justify-start items-center">
                  <RestaurantOutlined />
                  <input
                    name="name"
                    className="grow rounded-lg p-2"
                    placeholder="Restaurant Name"
                  />
                </div>
                {/* Address */}
                <div className="flex gap-4 justify-start items-center">
                  <AddLocationAltOutlined />
                  <input
                    name="address"
                    className="grow rounded-lg p-2"
                    placeholder="Address"
                  />
                </div>
                {/* Region */}
                <div className="flex gap-4 justify-start items-center">
                  <MapOutlined />
                  <select name="region" className="grow rounded-lg p-2">
                    <option>Central</option>
                    <option>North</option>
                    <option>North-East</option>
                    <option>East</option>
                    <option>West</option>
                  </select>
                </div>
                {/* Operating Hours */}
                {openingHoursFields.map((item, index) => {
                  return (
                    <div key={item.dayOpen} className="grid grid-cols-2 gap-4">
                      <div className="col-span-1 w-full flex gap-4 justify-start items-center">
                        <CalendarTodayOutlined />
                        <select
                          name={String(index)}
                          onChange={handleChangeDayOpen}
                          className="grow rounded-lg p-2"
                        >
                          <option>Monday</option>
                          <option>Tuesday</option>
                          <option>Wednesday</option>
                          <option>Thursday</option>
                          <option>Friday</option>
                          <option>Saturday</option>
                          <option>Sunday</option>
                        </select>
                      </div>
                      <div className="col-span-1 w-full flex gap-4 justify-start items-center">
                        <AccessTimeOutlined />
                        <input
                          name={String(index)}
                          placeholder="Opening Hours"
                          className="grow rounded-lg p-2"
                          onChange={handleChangeOperatinghours}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="flex gap-4 justify-end items-center">
                  <button
                    onClick={handleAddNewDay}
                    className="flex justify-center items-center text-custom-three bg-transparent border border-custom-three hover:bg-custom-two font-medium rounded-lg text-sm px-4 py-2"
                  >
                    <Add />
                    <p>Add Day</p>
                  </button>
                </div>
                {/* Contact Number */}
                <div className="flex gap-4 justify-start items-center">
                  <LocalPhoneOutlined />
                  <input
                    name="phoneNumber"
                    className="grow rounded-lg p-2"
                    placeholder="Contact Number"
                  />
                </div>
                {/* Website */}
                <div className="flex gap-4 justify-start items-center">
                  <LanguageOutlined />
                  <input
                    name="website"
                    className="grow rounded-lg p-2"
                    placeholder="Website"
                  />
                </div>
                {/* Cuisine Type */}
                <div className="flex gap-4 justify-start items-center">
                  <LocalDiningOutlined />
                  <div className="grow">
                    <Select
                      placeholder="Cuisine Type"
                      isMulti
                      options={[
                        { value: "Halal", label: "Halal" },
                        { value: "Vegetarian", label: "Vegetarian" },
                        { value: "Italian", label: "Italian" },
                        { value: "Chinese", label: "Chinese" },
                        { value: "French", label: "French" },
                        { value: "Thai", label: "Thai" },
                        { value: "Middle East", label: "Middle East" },
                        { value: "Korean", label: "Korean" },
                        { value: "Western", label: "Western" },
                      ]}
                      onChange={setSelectedCuisineType}
                    />
                  </div>
                </div>
                {/* Price Range */}
                <div className="flex gap-4 justify-start items-center">
                  <AttachMoneyOutlined />
                  <select name="priceRange" className="grow rounded-lg p-2">
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
                    <option>$$$$</option>
                    <option>$$$$$</option>
                  </select>
                </div>
                {/* Reservation Required */}
                <div className="flex gap-4 justify-start items-center">
                  <label>Reservation Required?</label>
                  <input
                    name="reservationRequired"
                    className="h-4 w-4 rounded-lg text-lg"
                    type="checkbox"
                  />
                </div>
                <div className="flex gap-4 justify-start items-center">
                  <button
                    type="submit"
                    className="grow text-custom-one bg-custom-three hover:bg-custom-four font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 mx-8 p-4 h-2/4 rounded-3xl bg-custom-two border border-custom-two">
        <div className="p-4 flex items-center gap-4">
          <p className="text-2xl text-custom-five font-bold">Browse List</p>
          <Link href="/search">
            <p className="text-sm text-custom-four hover:cursor-pointer hover:underline">
              View More
            </p>
          </Link>
        </div>
        <div className="p-4 grid auto-cols-[20rem] grid-flow-col gap-8 overflow-x-auto">
          {restaurantData.map((item) => {
            return (
              <div
                key={item.name}
                className="max-w-sm rounded-2xl border border-custom-three bg-custom-three text-custom-five shadow-lg"
              >
                <img
                  src={RestaurantOnePhoto.src}
                  alt="restaurant"
                  className="rounded-t-2xl"
                />
                <div className="px-6 py-4">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-xl mb-2">{item.name}</p>
                    <p className="mb-2">
                      {item.dateAdded.format("DD-MMM-YYYY")}
                    </p>
                  </div>
                  <p className="text-custom-five text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-2 pb-2 flex justify-between">
                  <div className="flex-wrap">
                    {item.cuisineType.map((type) => {
                      return (
                        <span
                          key={type}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-custom-five mr-2 mb-2"
                        >
                          {type}
                        </span>
                      );
                    })}
                  </div>
                  <div>{item.priceRange}</div>
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
