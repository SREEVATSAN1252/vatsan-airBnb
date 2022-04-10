import React, { useState } from "react";
import "./Search.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { PeopleOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
function Search() {
  const history = useHistory();
  const [showSearch, setshowSearch] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleOutline />
      </h2>
      <input min={0} defaultValue={2} type="number"/>

        <Button onClick={()=>history.push("/search")}>Search Airbnb</Button>
     
    </div>
  );
}

export default Search;
