import React from 'react';

const photos = [
  {
    src: 'https://media.istockphoto.com/id/1367872098/photo/full-length-shot-of-a-handsome-young-male-athlete-running-on-an-outdoor-track.jpg?s=1024x1024&w=is&k=20&c=DlUGvkzC0zxXMcFR7nulBKiKiZU6ceyQPGf9vTCbPhc=',
    alt: 'Students participating in various sports events.',
    caption: 'Students participating in various sports events.'
  },
  {
    src: 'https://media.istockphoto.com/id/1367872098/photo/full-length-shot-of-a-handsome-young-male-athlete-running-on-an-outdoor-track.jpg?s=1024x1024&w=is&k=20&c=DlUGvkzC0zxXMcFR7nulBKiKiZU6ceyQPGf9vTCbPhc=',
    alt: 'Students presenting their science projects.',
    caption: 'Students presenting their science projects.'
  },
  {
    src: 'https://media.istockphoto.com/id/1367872098/photo/full-length-shot-of-a-handsome-young-male-athlete-running-on-an-outdoor-track.jpg?s=1024x1024&w=is&k=20&c=DlUGvkzC0zxXMcFR7nulBKiKiZU6ceyQPGf9vTCbPhc=',
    alt: 'Students performing in the cultural fest.',
    caption: 'Students performing in the cultural fest.'
  },
  {
    src: 'https://media.istockphoto.com/id/1367872098/photo/full-length-shot-of-a-handsome-young-male-athlete-running-on-an-outdoor-track.jpg?s=1024x1024&w=is&k=20&c=DlUGvkzC0zxXMcFR7nulBKiKiZU6ceyQPGf9vTCbPhc=',
    alt: 'A glimpse of our interactive classrooms.',
    caption: 'A glimpse of our interactive classrooms.'
  },
  {
    src: 'https://media.istockphoto.com/id/1367872098/photo/full-length-shot-of-a-handsome-young-male-athlete-running-on-an-outdoor-track.jpg?s=1024x1024&w=is&k=20&c=DlUGvkzC0zxXMcFR7nulBKiKiZU6ceyQPGf9vTCbPhc=',
    alt: 'Students reading and studying in the school library.',
    caption: 'Students reading and studying in the school library.'
  }
];

const videos = [
  {
    src: 'path/to/school_tour.mp4',
    title: 'Virtual tour of Springdale Public School',
  },
  {
    src: 'path/to/annual_function.mp4',
    title: 'Highlights from the Annual Function 2023',
  }
];

function GalleryPage() {
  return (
    <div className="gallery-page w-full h-auto bg-gray-100 py-20" data-scroll-section>
      <div className="container mx-auto px-5">

        {/* Photos Section */}
        <section className="photos mb-20">
          <h2 className="text-5xl font-bold text-center text-blue-900 mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {photos.map((photo, index) => (
              <div key={index} className="photo-card relative overflow-hidden rounded-lg shadow-lg bg-white group">
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-white text-xl font-semibold text-center px-4">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="videos mb-20">
          <h2 className="text-5xl font-bold text-center text-blue-900 mb-12">Video Gallery</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {videos.map((video, index) => (
              <div key={index} className="video-card relative bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 lg:w-1/3">
                <video controls className="w-full h-auto transition-transform duration-500 transform hover:scale-105">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default GalleryPage;
