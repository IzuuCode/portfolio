
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < 800; i++) {
        stars.push({
          x: Math.random() * 2000 - 1000,
          y: Math.random() * 2000 - 1000,
          z: Math.random() * 1000,
          px: 0,
          py: 0,
        });
      }
      starsRef.current = stars;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX - window.innerWidth / 2) * 0.01;
      mouseRef.current.y = (e.clientY - window.innerHeight / 2) * 0.01;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      starsRef.current.forEach((star) => {
        star.z -= 2;
        if (star.z <= 0) {
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
          star.z = 1000;
        }

        const x = (star.x / star.z) * 100 + centerX + mouseRef.current.x;
        const y = (star.y / star.z) * 100 + centerY + mouseRef.current.y;

        const size = (1 - star.z / 1000) * 2;
        const opacity = 1 - star.z / 1000;

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(100, 150, 255, ${opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(150, 100, 255, ${opacity * 0.2})`);
          
          ctx.fillStyle = gradient;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();

          // Draw connecting lines for nearby stars
          if (star.px !== 0 && star.py !== 0) {
            const distance = Math.sqrt((x - star.px) ** 2 + (y - star.py) ** 2);
            if (distance < 100) {
              ctx.strokeStyle = `rgba(100, 150, 255, ${(1 - distance / 100) * opacity * 0.3})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(star.px, star.py);
              ctx.lineTo(x, y);
              ctx.stroke();
            }
          }

          star.px = x;
          star.py = y;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950"
      style={{ zIndex: 1 }}
    />
  );
};
