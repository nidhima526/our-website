import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Hide default cursor on body
    document.body.style.cursor = 'none';

    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !target.tagName) return;
      
      const tagName = target.tagName.toLowerCase();
      
      // Check if hovering over clickable elements or text that should be inverted
      if (
        tagName === 'button' ||
        tagName === 'a' ||
        (target.closest && target.closest('button')) ||
        (target.closest && target.closest('a')) ||
        (target.classList && target.classList.contains('cursor-pointer')) ||
        tagName === 'h1' ||
        tagName === 'h2' ||
        tagName === 'h3'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Determine scale based on state
  let cursorScale = 1;
  if (isHovering) cursorScale = 4; // Scale up when hovering over links/headings
  if (isClicking) cursorScale = cursorScale * 0.8; // Shrink slightly when clicking

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center"
      animate={{
        x: mousePosition.x - 8, // center the 16px (w-4) circle
        y: mousePosition.y - 8,
        scale: cursorScale,
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 28, 
        mass: 0.2 // Very responsive, almost instant but perfectly smooth
      }}
    >
    </motion.div>
  );
};

export default CustomCursor;
