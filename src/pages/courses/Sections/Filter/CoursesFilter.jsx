import { Box } from "@mui/material";
import { filterContainer } from "./coursesFilterStyles";
import FilterSidebar from "./FilterSidebar";
import FilterMainbar from "./FilterMainbar";
import { useReducer, useState } from "react";

const initialFilters = {
  search: {
    input: "",
    qury: "",
  },
  status: "all",
  sort: "latest",
  access: {
    plus: false,
    installment: false,
    free: false,
  },
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_INPUT":
      return { ...state, search: { ...state.search, input: action.payload } };
    case "SEARCH_QUERY":
      return {
        ...state,
        search: { ...state.search, query: state.search.input },
      };
      break;
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
      return initialFilters;

    default:
      return state;
  }
};

function CoursesFilter() {
  const [filters, dispatch] = useReducer(filterReducer, initialFilters);

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
