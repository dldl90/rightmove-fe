import React from 'react';
import PropTypes from 'prop-types'
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ properties }) => {
	return (
		<div className="PropertyListing">
			{
				properties.map((property, index) => <PropertyCard key={index} {...property}/>)
			}
		</div>
	)
};

PropertyListing.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      bedrooms: PropTypes.number,
      branchName: PropTypes.string,
      contactUrl: PropTypes.string,
      displayAddress: PropTypes.string,
      id: PropTypes.number,
      mainImage: PropTypes.string,
      price: PropTypes.number,
      propertyTitle: PropTypes.string,
      propertyType: PropTypes.string,
      propertyUrl: PropTypes.string,
      summary: PropTypes.string
    })
  )
}

PropertyListing.defaultProps = {
  bag: []
}

export default PropertyListing;
