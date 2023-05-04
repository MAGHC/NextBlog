import style from './FeaturedPosts.module.css';
import GridWrapper from '../GridWrapper/GridWrapper';
import { getFeaturedPosts } from '@/service/posts';

const Post = async () => {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h3 className={style.myPost}>
        Featured Posts / if you put mouse on the image you can check more information
      </h3>
      <GridWrapper posts={posts}></GridWrapper>
    </section>
  );
};

export default Post;
