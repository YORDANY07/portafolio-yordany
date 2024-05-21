"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

async function fetchRepos(): Promise<Repo[]> {
  const username = 'yordany07';
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
}

export default async function ReposPage() {
  const repos = await fetchRepos();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 bg-gray-300 items-center">
      <h1 className="text-3xl font-bold mb-4 ">GitHub Repositories</h1>
      
        <Slider {...settings} className="w-3/4 bg-gray-800 mb-5 h-full">
          {repos.map((repo) => (
            
            <div key={repo.id} className="bg-gray-100 rounded-lg shadow-md p-6 h-[180px] group-hover:opacity-50">
              
              <h2 className="text-xl font-semibold">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {repo.name}
                </a>
              </h2>
              <p className="text-gray-700">{repo.description || 'No description available'}</p>
            </div>
          ))}
        </Slider>
     

    </div>
  );
}