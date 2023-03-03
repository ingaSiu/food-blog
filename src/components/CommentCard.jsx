import { CardContainer, Comment, Date, UserContent, UserIcon, UserInfo, UserName } from './styles/CommentCard.styled';

const CommentCard = ({ userName, date, comment }) => {
  const commentDate = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);

  return (
    <CardContainer>
      <UserContent>
        <UserIcon />
        <UserInfo>
          <UserName>{userName} says:</UserName>
          <Date>{commentDate}</Date>
        </UserInfo>
      </UserContent>

      <Comment>{comment}</Comment>
    </CardContainer>
  );
};

export default CommentCard;
