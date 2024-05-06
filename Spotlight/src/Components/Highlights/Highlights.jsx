import React from 'react';

const Highlights = () => {
  const highlightsData = [
    {
      title: 'Put Your Work in the Limelight',
      description: 'Easily showcase your projects to a global audience. From creative endeavors to technical innovations, Spotlight provides a dedicated space for your work to shine.',
    },
    {
      title: 'Connect and Collaborate',
      description: 'Join a vibrant community of creators and enthusiasts. Engage with like-minded individuals, share insights, and collaborate on exciting projects. Spotlight is more than a platform; it\'s a creative hub.',
    },
    {
      title: 'Craft Your Creative Identity',
      description: 'Create a personalized profile that reflects your unique style and skills. Tailor your space on Spotlight to showcase your portfolio, bio, and accomplishments. Let the world see the story behind your projects.',
    },
    {
      title: 'Beyond Words - Visualize Your Ideas',
      description: 'Enhance your project presentations with rich multimedia integration. Upload images, videos, and other media to provide a comprehensive view of your creations. ',
    },
  ];

  return (
    <div className=' flex flex-wrap m-5 gap-5 justify-center'>
      {highlightsData.map((highlight,index) => (
        <div key={index} className="card w-80 rounded hover:-translate-y-2">
        
        <div className="card-body">
            <h2 className="card-header">{highlight.title}</h2>
            <p className="text-content2">{highlight.description}</p>
 
        </div>
    </div>
      ))}
    </div>
  );
};

export default Highlights;
