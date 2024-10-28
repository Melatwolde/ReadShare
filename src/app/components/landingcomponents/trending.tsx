'use client';
import React from 'react';
import Image from 'next/image';
import Fall from '../../../../public/Fall.png';

const TrendingBooks = () => {
    const books = [
        {
          id: 1,
          title: 'They Both Die at the End',
          imageSrc: Fall,
        },
        
      ];
    return(
        <div className='mt-[-100px]'>
            <div className='absolute w-[434px] h-217px] ml-[147px] mt-[100px] flex flex-col gap-[20px]'>
                <h1 className='text-[65px] font-medium'>New & Trending</h1>
                <h3 className='text-[30px]'>Explore new books every day</h3>
            </div>
            <div className=" absolute flex mb-[]  ml-[55.76%] mr-[19.93%] p-4 w-[400px] h-[500px]">
                {books.map((book) => (
                    <div key={book.id} className="" >
                        <Image src={book.imageSrc} alt={book.title} className="w-full h-auto rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    )
};
export default TrendingBooks;