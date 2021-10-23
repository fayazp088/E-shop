import React from "react";
import { RatingType } from "../types";
import StarRatingComponent from "react-star-rating-component";
import styled from "styled-components";

const Rating = ({ value, text }: RatingType) => {
  return (
    <div className="rating">
      <StarRatingComponent name="rate1" editing={false} value={value} />
      <Review>{text && text}</Review>
    </div>
  );
};

const Review = styled.span`
  display: block;
`;

export default Rating;
