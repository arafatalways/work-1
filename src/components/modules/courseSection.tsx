import CourseCard from "@/components/modules/courseCard";
import React from "react";
// নিশ্চিত করুন যে CourseCard-এর পাথ সঠিক আছে আপনার প্রোজেক্ট অনুযায়ী

const courses = [
  {
    id: 1,
    title: "Video Editing with After Effects and Premiere Pro Batch 2",
    instructor: "Abdur Rahman",
    students: 4899,
    lessons: 30,
    originalPrice: "15,000.00",
    salePrice: "",
    badge: "Live Advanced",
    imageUrl: "../kids.jpg", // আপনার ইমেজ সোর্স এখানে ব্যবহার করুন
    category: "Advanced",
  },
  {
    id: 2,
    title: "Premier Pro Course (Recorded)",
    instructor: "Abdur Rahman",
    students: 4756,
    lessons: 30,
    originalPrice: "2,500.00",
    salePrice: "1,990.00",
    badge: "Recorded",
    imageUrl: "../kids.jpg",
    category: "Basic",
  },
  {
    id: 3,
    title: "Basic Video Editing with Capcut (Recorded)",
    instructor: "Abdur Rahman",
    students: 30451,
    lessons: 30,
    originalPrice: "500.00",
    salePrice: "",
    badge: "Basic",
    imageUrl: "../kids.jpg",
    category: "Basic",
  },
  {
    id: 4,
    title: "Basic Video Editing with Capcut (Recorded)",
    instructor: "Abdur Rahman",
    students: 30451,
    lessons: 30,
    originalPrice: "500.00",
    salePrice: "",
    badge: "Basic",
    imageUrl: "../kids.jpg",
    category: "Basic",
  },
  {
    id: 5,
    title: "Basic Video Editing with Capcut (Recorded)",
    instructor: "Abdur Rahman",
    students: 30451,
    lessons: 30,
    originalPrice: "500.00",
    salePrice: "",
    badge: "Basic",
    imageUrl: "../kids.jpg",
    category: "Basic",
  },
  {
    id: 6,
    title: "Basic Video Editing with Capcut (Recorded)",
    instructor: "Abdur Rahman",
    students: 30451,
    lessons: 30,
    originalPrice: "500.00",
    salePrice: "",
    badge: "Basic",
    imageUrl: "../kids.jpg",
    category: "Basic",
  },
];

const CourseSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          My Courses
        </h2>

        {/* এইখানে গ্রিড লেআউট সেট করা হয়েছে */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
