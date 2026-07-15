import { Box } from "@mui/material";
import { filterContainer } from "./coursesFilterStyles";
import FilterSidebar from "./FilterSidebar";
import FilterMainbar from "./FilterMainbar";
import { useState } from "react";

function CoursesFilter() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("all");

  function handleSearch() {
    setSearchQuery(searchInput);
  }

  function handleClearFilters() {
    setSearchInput("");
    setSearchQuery("");
    setStatus("all");
  }

  return (
    <>
      <Box sx={filterContainer}>
        <FilterSidebar
          searchInput={searchInput}
          onInputChange={setSearchInput}
          onSearch={handleSearch}
          onClearFilters={handleClearFilters}
          onFilterStatus={setStatus}
          statusValue={status}
        />
        <FilterMainbar searchQuery={searchQuery} courseStatus={status} />
      </Box>
    </>
  );
}

export default CoursesFilter;
