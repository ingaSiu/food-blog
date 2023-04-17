import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useRatePost } from '../hooks/posts.js';
import { useState } from 'react';

const StarRating = ({ ratingCount, rating, id }) => {
  const [value, setValue] = useState(1);

  const { mutateAsync: ratePost } = useRatePost();

  const handleRating = (id, stars) => {
    console.log(stars);
    console.log(value);
    ratePost({ id, stars })
      .then(() => {
        setValue(stars);
        toast.succes('Recipe rated!');
      })
      .catch((error) => console.log(error));
  };

  return (
    <RatingWrapper>
      <p>Rate this recipe!</p>
      <RatingContainer>
        <Rating
          name="size-large"
          defaultValue={1}
          size="large"
          value={value}
          onChange={(event, newValue) => {
            handleRating(id, newValue);
          }}
        />
        {/* <Rating
          name="simple-controlled"
          //value={value}
          onChange={(event, newValue) => {
    setValue(newValue);
  }}
        /> */}
        <p>
          Total score: {rating} from {ratingCount} users
        </p>
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
