import React from "react";
import { Users, BookOpen } from "lucide-react";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    instructor: string;
    students: number;
    lessons: number;
    originalPrice: string;
    salePrice: string;
    badge: string;
    imageUrl: string;
    category: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl dark:hover:shadow-2xl border border-gray-100 dark:border-gray-700">
      {/* Course Image & Badges */}
      <div className="relative h-48">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
            course.badge === "Live Advanced"
              ? "bg-purple-600 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {course.badge}
        </span>
        <div className="absolute top-3 right-3 flex space-x-2">
          {/* Example icons as seen in image */}
          {course.category === "Advanced" && (
            <>
              <span className="bg-blue-600 p-1 rounded-full text-xs font-bold text-white">
                Pr
              </span>
              <span className="bg-indigo-600 p-1 rounded-full text-xs font-bold text-white">
                Ae
              </span>
            </>
          )}
        </div>
      </div>

      {/* Course Details */}
      <div className="p-5">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="../kids.jpg"
            alt={course.instructor}
            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
          />
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {course.instructor}
          </p>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 line-clamp-2">
          {course.title}
        </h3>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm mb-4">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Users className="w-4 h-4 mr-2" />
            <span>{course.students} Students</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>{course.lessons} Lessons</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-lg font-bold">
            {course.salePrice ? (
              <>
                <span className="text-gray-400 line-through mr-2 text-sm">
                  {course.originalPrice}৳
                </span>
                <span className="text-green-600 dark:text-green-400">
                  {course.salePrice}৳
                </span>
              </>
            ) : (
              <span className="text-green-600 dark:text-green-400">
                {course.originalPrice}৳
              </span>
            )}
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 shadow-md">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
