import style from './Posts.module.css';
import GridWrapper from '../GridWrapper/GridWrapper';
import { getAllPosts } from '@/service/posts';

const Post = async () => {
  const posts = await getAllPosts();

  return (
    <section>
      <h3 className={style.myPost}>My Posts ! Pls put mouse on the image</h3>
      <GridWrapper posts={posts}></GridWrapper>
    </section>
  );
};

export default Post;
