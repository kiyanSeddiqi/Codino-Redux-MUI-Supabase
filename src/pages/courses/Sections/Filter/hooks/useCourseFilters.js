import { useMemo } from "react";

function useCourseFilters(filters, slug, products) {
  const { search, status, access, sort } = filters;

  const filteredCourses = useMemo(() => {
    let courses = [...products];

    // CATEGORY
    if (slug) {
      courses = courses.filter((item) => item?.categories?.includes(slug));
    }

    // SEARCH
    if (search?.query?.trim()) {
      courses = courses.filter((p) =>
        p.title
          .toLocaleLowerCase()
          .includes(search.query.trim().toLocaleLowerCase()),
      );
    }

    // STATUS
    if (status !== "all") {
      courses = courses.filter((course) => course.status === status);
    }

    // ACCESS
    if (access.free) {
      courses = courses.filter((item) => item.price === 0);
    }
    if (access.installment) {
      courses = courses.filter((item) => item.has_installment);
    }
    if (access.plus) {
      courses = courses.filter((item) => item.tags.includes("plus"));
    }

    // SORT
    switch (sort) {
      case "latest":
        courses = courses.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at),
        );
        break;
      case "best-seller":
        courses = courses.filter((item) => item.tags.includes("best-seller"));
        break;
      case "price-asc":
        courses = courses
          .filter((item) => item.price > 0)
          .sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        courses = courses.sort((a, b) => b.price - a.price);
        break;
      case "most-visited":
        courses = courses.filter((item) => item.tags.includes("most-visited"));
        break;

      default:
        break;
    }

    return courses;
  }, [products, search.query, status, access, sort, slug]);

  return filteredCourses;
}
export default useCourseFilters;
