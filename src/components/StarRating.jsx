import Rating from '@mui/material/Rating';
import styled from 'styled-components';

const StarRating = ({ ratingCount }) => {
  return (
    <RatingWrapper>
      <p>Rate this recipe!</p>
      <RatingContainer>
        <Rating name="size-large" defaultValue={1} size="large" />
        {/* <Rating
          name="simple-controlled"
          //value={value}
          onChange={(event, newValue) => {
    setValue(newValue);
  }}
        /> */}
        <p>Total score: {ratingCount}</p>
      </RatingContainer>
    </RatingWrapper>
  );
};

export default StarRating;

export const RatingWrapper = styled.div`
  padding: 10px;
`;

const RatingContainer = styled.div`
  display: flex;

  p {
    font-size: 18px;
    margin: 7px;
  }
`;
