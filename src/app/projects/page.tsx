"use client"
import React, { useEffect, useState } from 'react';
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

const ReposPage = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const username = 'yordany07';
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        setRepos(data);
      } catch (error) {
       
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 bg-gray-300 items-center">
      <div className='p-4 md:col-span-1'>
        <h1 className="font-bold text-2xl bg-gray-800 p-4 rounded-lg">Repositorios de GitHub</h1>
      </div>
      
      <Slider {...settings} className="w-3/4 m-5 h-full bg-white rounded-lg mx-10">
        {repos.map((repo) => (
          <div className='p-4' key={repo.id}>
            <div className="bg-gray-800 rounded-lg shadow-md p-6 h-[180px]
              transition duration-300 ease-in-out transform hover:scale-110 ">
              <h2 className="text-xl font-semibold mb-2 text-cyan-500">
                {repo.name}
              </h2>
              <ul>
                <li className='hover:underline hover:text-cyan-300 inline-block'>
                  <Link href={repo.html_url}>Ir a GitHub</Link>
                </li>
                <li className='hover:underline hover:text-cyan-300 inline-block'>
                  <Link href={`${repo.html_url}/archive/refs/heads/main.zip`}>Descargar Repositorio</Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReposPage;