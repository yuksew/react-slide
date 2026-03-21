import { useState, useEffect, useCallback } from 'react';
import './SlideDeck.css';

export default function SlideDeck({ slides }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isAnimating || index === current) return;
      if (index < 0 || index >= slides.length) return;
      setDirection(index > current ? 'next' : 'prev');
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [current, isAnimating, slides.length],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  const Slide = slides[current];

  return (
    <div className="slide-deck">
      <div className={`slide-container ${direction ?? ''}`} key={current}>
        <Slide />
      </div>

      <div className="slide-controls">
        <button onClick={prev} disabled={current === 0}>
          ←
        </button>
        <span className="slide-counter">
          {current + 1} / {slides.length}
        </span>
        <button onClick={next} disabled={current === slides.length - 1}>
          →
        </button>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
