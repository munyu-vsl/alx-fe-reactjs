import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  return (
    <div>
      <h1>Post ID: {postId}</h1>
    </div>
  );
};

export default Post;