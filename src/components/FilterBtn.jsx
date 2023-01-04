import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

function FilterBtn({ countryName, genderName, handleFilterBtn, filterBtn }) {
  const countryButtons = () => {
    return countryName.map((item, idx) => {
      return (
        <Button
          key={idx}
          variant="contained"
          className={
            "!bg-gray-400 !text-black !capitalize " +
            `${item === filterBtn?.country ? "!bg-gray-900 !text-white" : ""}`
          }
          name="country"
          value={item}
          onClick={handleFilterBtn}
        >
          {item}
        </Button>
      );
    });
  };

  const genderButtons = () => {
    return genderName.map((item, idx) => {
      return (
        <Button
          key={idx}
          variant="contained"
          className={
            "!bg-gray-400 !text-black !capitalize " +
            `${item === filterBtn?.gender ? "!bg-gray-900 !text-white" : ""}`
          }
          name="gender"
          value={item}
          onClick={handleFilterBtn}
        >
          {item}
        </Button>
      );
    });
  };

  return (
    <div className="flex flex-col flex-wrap gap-y-4 sm:items-center w-full">
      {/* gender box */}
      <div className="flex flex-row px-4 sm:px-0 flex-wrap gap-3">
        {genderButtons()}
      </div>
      {/* country box */}
      <div className="flex flex-row  px-4 sm:px-0 flex-wrap gap-3">
        {countryButtons()}
      </div>
    </div>

    //
  );
}

export default FilterBtn;
