'use client';

import { Post } from '@/service/posts';
import style from './FilterablePosts.module.css';

import GridWrapper from '../GridWrapper/GridWrapper';
import Categories from '../Categories/Categories';
import { useState } from 'react';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'ALL';

const FilterablePosts = ({ posts, categories }: Props) => {
  const [filterableCategories, setFilterableCategories] = useState(ALL_POSTS);
  const filteredPosts =
    filterableCategories === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category.toUpperCase() === filterableCategories);
  return (
    <section className={style.Wrapper}>
      <GridWrapper posts={filteredPosts}></GridWrapper>
      <Categories
        handleClick={setFilterableCategories}
        nowCategory={filterableCategories}
        categories={categories}
      ></Categories>
    </section>
  );
};

export default FilterablePosts;
