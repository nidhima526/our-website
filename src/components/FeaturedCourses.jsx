import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, User, BarChart } from 'lucide-react';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Full-Stack Web Development Bootcamp',
      instructor: 'Nidhima',
      duration: '12 Weeks',
      level: 'Beginner to Pro',
      price: '$499',
      rating: 4.9,
      reviews: 1240,
      imageClass: 'course-img-1'
    },
    {
      id: 2,
      title: 'AI Tools & Prompt Engineering',
      instructor: 'Alex R.',
      duration: '4 Weeks',
      level: 'Intermediate',
      price: '$199',
      rating: 4.8,
      reviews: 856,
      imageClass: 'course-img-2'
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      instructor: 'Sarah K.',
      duration: '8 Weeks',
      level: 'All Levels',
      price: '$299',
      rating: 4.7,
      reviews: 2100,
      imageClass: 'course-img-3'
    }
  ];

  return (
    <section className="section featured-courses" id="courses">
      <div className="container">
        <div className="section-header flex justify-between items-center mb-6">
          <div>
            <h2>Featured <span className="text-primary">Courses</span></h2>
            <p>Upskill with our industry-leading professional courses.</p>
          </div>
          <button className="btn btn-secondary desktop-only">View All Courses</button>
        </div>

        <div className="courses-grid grid grid-cols-3">
          {courses.map((course, index) => (
            <motion.div 
              key={course.id} 
              className="course-card premium-card p-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`course-image ${course.imageClass}`}></div>
              <div className="course-content">
                <div className="course-meta flex justify-between mb-2">
                  <span className="flex items-center gap-1 text-sm"><Clock size={14}/> {course.duration}</span>
                  <span className="flex items-center gap-1 text-sm"><BarChart size={14}/> {course.level}</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <div className="course-instructor flex items-center gap-2 mb-3">
                  <div className="instructor-avatar"><User size={14}/></div>
                  <span className="text-sm">{course.instructor}</span>
                </div>
                <div className="course-rating flex items-center gap-1 mb-4">
                  <Star size={16} fill="#F59E0B" color="#F59E0B" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-muted">({course.reviews})</span>
                </div>
                <div className="course-footer flex justify-between items-center mt-auto">
                  <span className="course-price">{course.price}</span>
                  <button className="btn btn-primary px-4 py-2">Enroll Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6 mobile-only">
          <button className="btn btn-secondary w-full">View All Courses</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
