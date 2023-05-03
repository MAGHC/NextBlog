import { getAllPosts } from '@/service/posts';
import Multicarousel from '../MultiCarousel/Multicarousel';
import PostFigureCard from '../PostFigure/PostFigureCard';

import style from './SliderPosts.module.css';

const SliderPosts = async () => {
  const posts = await getAllPosts();

  return (
    <section className={style.section}>
      <h2>More Posts</h2>
      <Multicarousel>
        {posts.map((post, idx) => {
          return <PostFigureCard key={idx} post={post}></PostFigureCard>;
        })}
      </Multicarousel>
    </section>
  );
};

export default SliderPosts;
