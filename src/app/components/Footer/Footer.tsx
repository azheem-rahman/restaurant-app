import React from "react";

const Footer = () => {
  return (
    <div className="flex m-4">
      <div className="w-3/4 content-center">
        <p className="text-2xl font-bold text-custom-four">FeastFinder</p>
        <p className="text-lg text-custom-three">
          unearth hidden delights, one bite at a time
        </p>
      </div>
      <div className="w-1/4">
        <p className="text-lg font-bold text-custom-four">
          Any Questions? Reach out to us!
        </p>
        <p className="text-sm text-custom-three">info@food.com</p>
        <p className="text-sm text-custom-three">(65) 9123 4567</p>
        <p className="text-sm text-custom-three">
          123 Food Avenue, #12-34, Singapore 123456
        </p>
      </div>
    </div>
  );
};

export default Footer;
