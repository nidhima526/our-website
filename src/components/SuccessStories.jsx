import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Quote } from 'lucide-react';
import './SuccessStories.css';

const SuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rohan Sharma',
      role: 'Student, Web Dev Course',
      text: "The Full-Stack course changed my life. I learned everything from scratch and secured an internship right after.",
      rating: 5,
      type: 'student'
    },
    {
      id: 2,
      name: 'TechFlow Solutions',
      role: 'Business Client',
      text: "ASHERVISION developed our ERP software in record time. The quality and post-launch support have been incredible.",
      rating: 5,
      type: 'business'
    },
    {
      id: 3,
      name: 'Priya Desai',
      role: 'Legal Client',
      text: "I needed urgent legal agreements for my startup. The team handled it professionally and delivered fast.",
      rating: 5,
      type: 'legal'
    }
  ];

  return (
    <section className="section success-section">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2>Success <span className="text-primary">Stories</span></h2>
          <p>Don't just take our word for it. Hear from those who trust us.</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          
          {/* Main Video Testimonial */}
          <motion.div 
            className="video-testimonial premium-card p-0 col-span-2 md-col-span-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="video-thumbnail">
              <button className="play-button"><Play size={32} color="#0B57D0" fill="#0B57D0"/></button>
            </div>
            <div className="video-info p-4">
              <h3 className="text-lg">How ASHERVISION Helped Us Scale</h3>
              <p className="text-muted text-sm mt-1">Watch this case study of a startup scaling from 0 to 10k users.</p>
            </div>
          </motion.div>

          {/* Text Testimonial */}
          <motion.div 
            className="testimonial-card premium-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Quote className="quote-icon text-primary mb-4" size={32} opacity={0.2} />
            <p className="testimonial-text">"An absolute game-changer. The courses are top-notch and the instructors are very helpful."</p>
            <div className="testimonial-author mt-6 flex items-center gap-3">
              <div className="author-avatar bg-gradient">A</div>
              <div>
                <h5 className="m-0">Amit Kumar</h5>
                <span className="text-xs text-muted">Web Developer</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {testimonials.map((test, index) => (
            <motion.div 
              key={test.id}
              className="testimonial-card premium-card flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="rating flex gap-1 mb-3">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="testimonial-text flex-grow">{test.text}</p>
              <div className="testimonial-author mt-6 flex items-center gap-3">
                <div className={`author-avatar type-${test.type}`}>{test.name.charAt(0)}</div>
                <div>
                  <h5 className="m-0">{test.name}</h5>
                  <span className="text-xs text-muted">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
