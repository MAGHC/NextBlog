import { Post } from '@/service/posts';
import style from './AdjacentPostCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  meta: Post;
  type: 'next' | 'prev';
};

const AdjacentPostCard = ({ meta, type }: Props) => {
  return (
    <Link className={style.adjacantCard} href={`posts/${meta.path}`}>
      <Image
        width={150}
        height={100}
        alt={meta.title}
        src={`/images/blogPosts/${meta.path}.jpg`}
      ></Image>

      <div className={style.adjacantMeta}>
        {type === 'next' && <span className={style.arrow}>{`>`}</span>}
        {type === 'prev' && <span className={style.arrow}>{`<`}</span>}
        <h4>{meta.title}</h4>
        <p>{meta.description}</p>
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
