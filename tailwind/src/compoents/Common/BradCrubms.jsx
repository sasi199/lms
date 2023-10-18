import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BreadCrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  const breadcrumbs = pathSegments.map((segment, index) => {
    if (index === 0) return null; // Skip the first segment (Homepage)
    
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const decodedSegment = decodeURIComponent(segment); // Decode URL-encoded segment
    const name = decodedSegment.replace(/%20/g, ' ').charAt(0).toUpperCase() + decodedSegment.slice(1);
    const isActive = index === pathSegments.length - 1; // Check if the link is active
    
    return (
      <span key={index}>
        <Link
          to={path}
          className={`${
            isActive ? 'text-secondary' : 'text-primary'
          } hover:underline`}
        >
          {name}
        </Link>
        {index < pathSegments.length - 1 ? ' | ' : ''}
      </span>
    );
  });

  return <div className="breadcrumbs">{breadcrumbs}</div>;
}

export default BreadCrumbs;