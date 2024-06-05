export const menuItems = ["خانه", "درباره من", "دوره ها", "تماس با من"];

import course1 from "../assets/course-img/course1.png";
import course2 from "../assets/course-img/course2.png";

export interface CourseType {
  id: number;
  image: string;
  title: string;
  description: string;
  duration: number;
  startDate: Date;
  endDate: Date;
  price: number;
  language: string;
  level: string;
}

const mockCourses: CourseType[] = [
  {
    id: 1,
    image: course1,
    title: "دوره فلورال 1",
    description:
      "Learn the basics of JavaScript, the most popular programming language for web development.",
    duration: 40, // in hours
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-08-01"),
    price: 790000,
    language: "English",
    level: "Beginner",
  },
  {
    id: 2,
    image: course2,
    title: "دوره خوشنویسی 1",
    description:
      "Dive deeper into Python with advanced concepts and techniques for experienced developers.",
    duration: 60, // in hours
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-10-15"),
    price: 400000,
    language: "English",
    level: "Advanced",
  },
  // {
  //   id: 3,
  //   image: "./src/assets/banner.jpg",
  //   title: "Full Stack Web Development",
  //   description:
  //     "Become a full-stack web developer by learning both front-end and back-end technologies.",
  //   duration: 120, // in hours
  //   startDate: new Date("2023-05-15"),
  //   endDate: new Date("2023-08-15"),
  //   price: 299.99,
  //   language: "English",
  //   level: "Intermediate",
  // },
];

// Export the mock courses for use in other parts of your application
export default mockCourses;
