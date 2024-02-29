import React from 'react';
import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

function BlogCard({ id, title, blog_img, description }) {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <Card className="max-w-sm blog-card mx-4 mb-4">
      {/* <img src={blog_img} alt={title} className="blog-img" /> */}
      <img src="/blog.jpg" alt={title} className="blog-img" />

      <div className="card-content">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <Button className='read-more' onClick={handleReadMore(id)}>
          Read more
          <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </Card>
  );
}

export default BlogCard;
