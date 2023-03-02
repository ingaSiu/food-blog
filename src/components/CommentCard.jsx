import { CardContainer, Comment, Date, UserName } from './styles/CommentCard.styled';

const CommentCard = ({ userName, date, comment }) => {
  return (
    <CardContainer>
      <UserName>{userName} says:</UserName>
      <Date>Posted at: {date}</Date>
      <Comment>{comment}</Comment>
    </CardContainer>
  );
};

export default CommentCard;
