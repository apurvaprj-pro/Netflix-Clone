import React, { useEffect, useState, useRef } from 'react';
import './TrendingSlider.css';
import { useTranslation } from 'react-i18next';

const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=5c93f6be8235dc3533f26b98778e9ff6";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const TrendingSlider = () => {
  const [movies, setMovies] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results || []))
      .catch(err => console.error("Failed to fetch trending movies", err));
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      if (!slider) return;
      setShowLeftArrow(slider.scrollLeft > 10); 
    };

    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      
      handleScroll();
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, [movies]); 


  const scroll = (direction) => {
    const { current } = sliderRef;
    if (!current) return;

    const item = current.querySelector('.slider-item');
    const gap = 30; 
    if (!item) return;

    const itemWidth = item.offsetWidth + gap;
    const scrollAmount = itemWidth * 4; 

    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };


  return (
    <div className="slider-wrapper">
      <h2 className="slider-title">{t("sliderTitle")}</h2>

      {showLeftArrow && (
        <div className="arrow left" onClick={() => scroll('left')}>
          <i>&#9664;</i>
        </div>
      )}

      <div className="slider" ref={sliderRef}>
        {movies.slice(0, 10).map((movie, index) => (
          <div className="slider-item" key={movie.id}>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="slider-poster"
            />
            <span className="slider-rank">{index + 1}</span>
          </div>
        ))}
      </div>

      <div className="arrow right" onClick={() => scroll('right')}>
        <i>&#9654;</i>
      </div>
    </div>
  );
};

export default TrendingSlider;
