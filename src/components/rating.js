import React from "react";
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i key={i}
        style={{color}}
        className={
          value >= i
            ? "fas fa-star"
            : value >= i - 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      />
    );
  }
  return (
    <React.Fragment>
      {stars}
      <span>{text && text}</span>
    </React.Fragment>
  );
};

Rating.defaultProps = {
    color: '#FFB200'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating;
