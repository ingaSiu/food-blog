import CommentCard from '../components/CommentCard';
import { CommentsWrapper } from '../components/styles/CommentCard.styled';
import { PageContainer } from '../components/styles/RecipeCard.styled';
import PostComment from '../components/AdminPageForms/PostComentForm';
import RecipeCard from '../components/RecipeCard';
import StarRating from '../components/StarRating';
import { useGetCommentsByPostId } from '../hooks/comments';
import { useParams } from 'react-router-dom';
import { usePostQuery } from '../hooks/posts';

const RecipePage = () => {
  const { recipeId } = useParams();

  const { data: recipeData } = usePostQuery(recipeId);
  const { data: comments } = useGetCommentsByPostId(recipeId);

  return (
    <>
      <PageContainer>
        {recipeData && (
          <RecipeCard
            key={recipeData._id}
            title={recipeData.title}
            imageUrl={recipeData.imageUrl}
            content={recipeData.content}
          ></RecipeCard>
        )}

        <StarRating />
        <CommentsWrapper>
          {comments &&
            comments.map((comment) => (
              <CommentCard
                key={comment._id}
                userName={comment.userName}
                comment={comment.content}
                date={comment.createdAt}
              />
            ))}
        </CommentsWrapper>

        <PostComment postId={recipeId} />
      </PageContainer>
    </>
  );
};
export default RecipePage;
