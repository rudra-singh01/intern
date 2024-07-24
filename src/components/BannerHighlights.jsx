import React from 'react';

const highlights = [
  {
    image: 'https://images.unsplash.com/photo-1616500156885-e51d834cab8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Annual Sports Day - Celebrating Excellence in Sports',
  },
  {
    image: 'https://media.istockphoto.com/id/973292338/photo/two-kids-looking-at-a-science-exhibit-back-view.jpg?s=1024x1024&w=is&k=20&c=8ibRZ6uls4x1QyM0_bui3DJPqWDiF2eGnEsnWCtRsqQ=',
    text: 'Science Exhibition - Showcasing Student Innovations',
  },
  {
    image: 'https://media.istockphoto.com/id/2150388165/photo/fans-raise-hands-in-excitement-at-vibrant-outdoor-music-fest-lights-illuminate-stage-dynamic.jpg?s=1024x1024&w=is&k=20&c=rE2gPGLrIqqFbIw5My9Up-Yx4DwmDx4A0MZft8Uwttk=',
    text: 'Cultural Fest - Embracing Diversity and Creativity',
  },
];

function BannerHighlights() {
  return (
    <div className="banner-highlights w-full bg-[#9DB0EC] py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src={highlight.image}
                alt={highlight.text}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg md:text-2xl font-semibold text-white px-4 text-center">{highlight.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerHighlights;
