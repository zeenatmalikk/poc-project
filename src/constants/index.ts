import home from "../assets/icons/Home.svg";
// import cells from "../assets/icons/cells.svg";
import grades from "../assets/icons/grades.svg";
import calendar from "../assets/icons/calendar.svg";
import calendar2 from "../assets/icons/calendar2.svg";
import results from "../assets/icons/results.svg";
export const sidebarLinks = [
  {
    imgURL: home,
    route: "/",
    label: "Home",
  },
  {
    imgURL: grades,
    route: "/grades",
    label: "Grades",
  },
  {
    imgURL: calendar,
    route: "/exams",
    label: "Exams",
    sublinks: [
      { label: "Exam Schedule", imgURL: results, route: "/exams/schedule" },
      { label: "Past Exams", imgURL: calendar2, route: "/exams/past" },
      { label: "Results", imgURL: results, route: "/exams/results" },
    ],
  },
];
