import { Post } from '@/service/posts';

import style from './GridWrapper.module.css';
import PostFigureCard from '../PostFigure/PostFigureCard';

type Props = {
  posts: Post[];
};

const GridWrapper = ({ posts }: Props) => {
  return (
    <ul className={style.wrapper}>
      {posts.map((post, index) => {
        return (
          <li key={index}>
            <PostFigureCard post={post}></PostFigureCard>
          </li>
        );
      })}
    </ul>
  );
};

export default GridWrapper;
