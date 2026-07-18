import { Box } from "@mui/material";
import { filterContainer } from "./coursesFilterStyles";
import FilterSidebar from "./FilterSidebar";
import FilterMainbar from "./FilterMainbar";
import { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";

// const initialFilters = {
//   search: {
//     input: "",
//     qury: "",
//   },
//   status: "all",
//   sort: "latest",
//   access: {
//     plus: false,
//     installment: false,
//     free: false,
//   },
// };

function createInitialFilters(searchParams) {
  return {
    search: {
      input: searchParams.get("search") ?? "",
      query: searchParams.get("search") ?? "",
    },
    status: searchParams.get("status") ?? "all",
    sort: searchParams.get("sort") ?? "latest",
    access: {
      free: searchParams.get("free") === "true",
      plus: searchParams.get("plus") === "true",
      installment: searchParams.get("installment") === "true",
    },
  };
}

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_INPUT":
      return { ...state, search: { ...state.search, input: action.payload } };
    case "SEARCH_QUERY":
      return {
        ...state,
        search: { ...state.search, query: state.search.input },
      };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "SET_ACCESS":
      return {
        ...state,
        access: {
          ...state.access,
          [action.name]: action.checked,
        },
      };
    case "CLEAR_FILTERS":
      return createInitialFilters(new URLSearchParams());

    default:
      return state;
  }
};

function CoursesFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, dispatch] = useReducer(
    filterReducer,
    searchParams,
    createInitialFilters,
  );

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.search.query) {
      params.set("search", filters.search.query);
    }

    if (filters.status !== "all") {
      params.set("status", filters.status);
    }

    if (filters.sort !== "latest") {
      params.set("sort", filters.sort);
    }

    if (filters.access.free) {
      params.set("free", "true");
    }

    if (filters.access.plus) {
      params.set("plus", "true");
    }

    if (filters.access.installment) {
      params.set("installment", "true");
    }

    setSearchParams(params);
  }, [filters]);
  return (
    <>
      <Box sx={filterContainer}>
        <FilterSidebar filters={filters} dispatch={dispatch} />
        <FilterMainbar filters={filters} dispatch={dispatch} />
      </Box>
    </>
  );
}

export default CoursesFilter;
