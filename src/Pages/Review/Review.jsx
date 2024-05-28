import React, { useState } from 'react';
import  './Review.css'
const Review = () => {
    const [rating, setRating] = useState(0); // State to hold the rating value

// Function to handle when a star is clicked
const handleStarClick = (value) => {
  setRating(value);
};
    return (
        <div className='py-20 bg-[#EEF7FF]'>
        <div className='flex justify-center items-center'>
            <p className='pb-20 text-2xl font-semibold md:text-6xl text-[#4D869C]'>Feedback from our client</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
            <div className='px-10'>
            <div className="rating py-3">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={starValue <= rating ? "star filled" : "star"}
            onClick={() => handleStarClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
                <p className='max-w-[300px]'>Use this space to talk about your company's history,background,mission or vission.Talk about your phylosophy and how it affected your company's trajectory</p>
                <p className='max-w-[300px] font-semibold text-lg py-5'>Taqi Yeasir</p>
            </div>
            <div className='px-10'>
            <div className="rating py-3">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={starValue <= rating ? "star filled" : "star"}
            onClick={() => handleStarClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
                <p className='max-w-[300px]'>Use this space to talk about your company's history,background,mission or vission.Talk about your phylosophy and how it affected your company's trajectory</p>
                <p className='max-w-[300px] font-semibold text-lg py-5'>Hridoy Pal</p>
            </div>
            <div className='px-10'>
            <div className="rating py-3">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={starValue <= rating ? "star filled" : "star"}
            onClick={() => handleStarClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
                <p className='max-w-[300px]'>Use this space to talk about your company's history,background,mission or vission.Talk about your phylosophy and how it affected your company's trajectory</p>
                <p className='max-w-[300px] font-semibold text-lg py-5'>Rakibul Islam</p>
            </div>
        </div>
    </div>
    );
};

export default Review;