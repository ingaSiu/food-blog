import Rating from '@mui/material/Rating';
import styled from 'styled-components';

const StarRating = () => {
  return (
    <RatingWrapper>
      <p>Rate this recipe!</p>
      <RatingContainer>
        <Rating name="size-large" defaultValue={1} size="large" />
        <p>Total score:</p>
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
