import React from 'react';
import PropTypes from 'prop-types';

const Awards = ({ data }) => (
  <div className="awards">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards and Recognition</h3>
     </div>
     
    <ul className="points">
      
      {data.points.map(point => (
        <li key={point}>{point}
      
  
      </li>

      ))}
    
    </ul>
  </div>
 );
 
Awards.propTypes = {
  data: PropTypes.shape({
      points: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Awards;
