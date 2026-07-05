import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import './BlogSection.css';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      category: 'Technology',
      title: 'The Future of AI in Enterprise Software',
      date: 'Oct 15, 2026',
      author: 'Nidhima',
      imageClass: 'blog-img-1'
    },
    {
      id: 2,
      category: 'Legal Awareness',
      title: 'Essential Legal Documents Every Startup Needs',
      date: 'Oct 12, 2026',
      author: 'Legal Team',
      imageClass: 'blog-img-2'
    },
    {
      id: 3,
      category: 'Career Tips',
      title: 'How to Land Your First Tech Internship',
      date: 'Oct 08, 2026',
      author: 'Career Desk',
      imageClass: 'blog-img-3'
    }
  ];

  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <div className="section-header flex justify-between items-center mb-6">
          <div>
            <h2>Latest <span className="text-primary">Insights</span></h2>
            <p>Read our latest articles on tech, law, and career growth.</p>
          </div>
          <button className="btn btn-secondary desktop-only">View All Posts</button>
        </div>

        <div className="blog-grid grid grid-cols-3">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="blog-card premium-card p-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`blog-image ${post.imageClass}`}></div>
              <div className="blog-content p-4 flex flex-col h-full">
                <span className="text-sm text-primary font-bold mb-2 uppercase">{post.category}</span>
                <h3 className="blog-title">{post.title}</h3>
                
                <div className="blog-meta mt-auto pt-4 flex justify-between items-center text-sm text-muted">
                  <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
