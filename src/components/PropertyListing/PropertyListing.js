import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    const PROPERTY_URL = 'http://localhost:4000/api/properties'
    try {
      const result = await fetch(PROPERTY_URL)
        .then(res => res.json());
      const properties = result.slice(0, 5);
      setProperties(properties);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

	return (
		<div className="PropertyListing">
			{
				properties.map((property, index) => <PropertyCard key={index} {...property}/>)
			}
		</div>
	)
};

export default PropertyListing;
