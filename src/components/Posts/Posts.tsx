import style from './Posts.module.css';
import GridWrapper from '../GridWrapper/GridWrapper';
import { getAllPosts } from '@/service/posts';

const Post = async () => {
  const posts = await getAllPosts();

  return (
    <section>
      <h3 className={style.myPost}>My Posts ! 마우스를 올려 제목과 설명을 확인할수있습니다.</h3>
      <GridWrapper posts={posts}></GridWrapper>
    </section>
  );
};

export default Post;
