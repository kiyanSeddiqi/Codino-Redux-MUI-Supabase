import { Box } from "@mui/material";
import { filterContainer } from "./coursesFilterStyles";
import FilterSidebar from "./FilterSidebar";
import FilterMainbar from "./FilterMainbar";
import { useState } from "react";

function CoursesFilter() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("latest");
  const [accessFilter, setAccessFilter] = useState({
    plus: false,
    installment: false,
    free: false,
  });
  function handleSearch() {
    setSearchQuery(searchInput);
  }

  function handleClearFilters() {
    setSearchInput("");
    setSearchQuery("");
    setStatus("all");
    setSort("latest");
    setAccessFilter({
      plus: false,
      installment: false,
      free: false,
    });
  }

  function handleAccessFilter(name, checked) {
    setAccessFilter((prev) => ({
      ...prev,
      [name]: checked,
    }));
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
          onFilterAccess={handleAccessFilter}
          accessFilter={accessFilter}
        />
        <FilterMainbar
          searchQuery={searchQuery}
          courseStatus={status}
          accessFilter={accessFilter}
          sortValue={sort}
          onSort={setSort}
        />
      </Box>
    </>
  );
}

export default CoursesFilter;
