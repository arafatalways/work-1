import CourseSection from "@/components/modules/courseSection";
import Hero from "@/components/modules/hero";

// const dummyCourseData = {
//   id: 1,
//   title: "Basic Video Editing with Capcut (Recorded)",
//   instructor: "Sayeed Fahad",
//   students: 30451,
//   lessons: 30, // Assuming a number for lessons based on previous context
//   originalPrice: "500.00",
//   salePrice: "",
//   badge: "Basic",
//   imageUrl: "../kids.jpg", // একটি ডামি ইমেজ URL
//   category: "Basic",
// };

export default function HeroPage() {
  return (
    <div>
      <Hero />
      <CourseSection />
      {/* <CourseCard course={dummyCourseData} /> */}
    </div>
  );
}
