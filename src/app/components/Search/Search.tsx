"use client";

import React, { useEffect, useState } from "react";
import BowlAndCutleryPhoto from "../../../public/bowl-and-cutlery.jpg";
import {
  AddLocationAltOutlined,
  SearchOffOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Data, dataList } from "@/app/mockData/mockData";
import Select, { MultiValue } from "react-select";

const Search = () => {
  const [showResults, setShowResults] = useState<boolean>(true);
  const [resultsList, setResultsList] = useState<Data[]>(dataList);
  const [sortBy, setSortBy] = useState<string>("Latest Added First");
  const [reset, setReset] = useState<boolean>(false);
  const [selectedCuisineType, setSelectedCuisineType] = useState<MultiValue<{
    value: string;
    label: string;
  }> | null>(null);

  const handleSortByAddedDate = (event: any) => {
    setSortBy(event.target.value);
  };

  const handleReset = () => {
    setReset(true);
  };

  const handleDelete = (event: any) => {
    console.log(event.target.id);
    let tempList = resultsList.filter(
      (restaurant) => restaurant.name !== event.target.id
    );

    setResultsList(tempList);
  };

  // execute reset
  useEffect(() => {
    setSelectedCuisineType(null);
    setResultsList(dataList);
    setSortBy("Latest Added First");
    setReset(false);
  }, [reset]);

  // execute sort
  useEffect(() => {
    let sortedResultsList = resultsList;
    let tempList: Data[] = [];

    if (sortBy === "Latest Added First") {
      tempList = sortedResultsList.sort((a, b) => {
        if (a.dateAdded > b.dateAdded) {
          return 1;
        }
        if (a.dateAdded < b.dateAdded) {
          return -1;
        }
        return 0;
      });
    } else {
      tempList = sortedResultsList.sort((a, b) => {
        if (a.dateAdded < b.dateAdded) {
          return 1;
        }
        if (a.dateAdded > b.dateAdded) {
          return -1;
        }
        return 0;
      });
    }

    setResultsList(tempList);
  }, [sortBy]);

  // execute filter cuisine type
  useEffect(() => {
    // no selected cuisine type
    if (selectedCuisineType === null || selectedCuisineType.length === 0) {
      setResultsList(dataList);
    } else {
      // tempList to hold restaurant data that matches selected cuisine type
      const tempList: Data[] = [];

      // filter through current results list if any contains ALL selected cuisine type
      for (const restaurant of resultsList) {
        let add = false;

        selectedCuisineType?.forEach((cuisine) => {
          if (restaurant.cuisineType.indexOf(cuisine.value) === -1) {
            add = false;
          } else {
            add = true;
          }
        });

        if (add) {
          tempList.push(restaurant);
        }
      }

      setResultsList(tempList);
    }
  }, [selectedCuisineType]);

  const renderResults = () => {
    return (
      <div>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <div className="flex space-x-4">
              <div className="flex items-center justify-end pl-8">
                <p>Filter By:</p>
              </div>

              {/* Cuisine Type Filter */}
              <div className="flex items-center justify-center my-4">
                <Select
                  value={selectedCuisineType}
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

              {/* Sort Date Ascending */}
              <div className="flex items-center justify-end pl-8">
                <p>Sort By:</p>
              </div>
              <div className="flex items-center justify-center my-4">
                <select
                  value={sortBy}
                  className="py-2 px-4 rounded-lg"
                  onChange={handleSortByAddedDate}
                >
                  <option value="Latest Added First">Latest Added First</option>
                  <option value="Earliest Added First">
                    Earliest Added First
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid justify-end content-center">
            {/* Reset Button */}
            <div className="mr-8">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg bg-custom-three text-custom-one hover:bg-custom-two"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div
          className="overflow-y-auto grid gap-4"
          style={{ maxHeight: "80vh" }}
        >
          {resultsList.map((result) => {
            return (
              <div className="rounded-2xl border border-custom-three bg-custom-two text-custom-five shadow-lg flex mx-8 h-36">
                <img
                  src={BowlAndCutleryPhoto.src}
                  alt="restaurant"
                  className="rounded-l-2xl w-1/5"
                />
                <div className="px-6 grid content-center">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-xl py-2">{result.name}</p>
                    <p className="py-2">
                      {result.dateAdded.format("DD-MMM-YYYY")}
                    </p>
                  </div>
                  <div className="flex justify-left items-center my-2">
                    <AddLocationAltOutlined />
                    <p>{result.address}</p>
                  </div>
                  <p className="text-custom-five text-base my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-2 pb-2 flex flex-col justify-between w-1/5">
                  <div className="flex-wrap mt-2">
                    {result.cuisineType.map((type) => {
                      return (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-custom-five mr-2 mb-2">
                          {type}
                        </span>
                      );
                    })}
                  </div>
                  <div className="mb-2">{result.priceRange}</div>
                </div>
                <div className="flex px-4 gap-4 items-center">
                  <div>
                    <button className="text-custom-four bg-transparent border border-custom-three hover:bg-custom-one font-medium rounded-lg text-sm px-4 py-2">
                      Edit
                    </button>
                  </div>
                  <div>
                    <button
                      id={result.name}
                      onClick={handleDelete}
                      className="text-custom-one bg-custom-three hover:bg-custom-four font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-custom-two content-center min-h-80">
        <div className="grid grid-rows-2 gap-4">
          <div className="row-span-1 mt-4 grid place-items-center">
            <p className="text-4xl text-custom-four">
              Discover your next culinary adventure
            </p>
          </div>
          <div className="row-span-1 grid place-items-center">
            <form className="w-2/4">
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
        </div>
      </div>
      {showResults ? (
        renderResults()
      ) : (
        <div>
          <p>No Results Found</p>
        </div>
      )}
    </div>
  );
};

export default Search;
