import { getAllPosts } from '@/service/posts';
import FilterablePosts from '@/components/FilterablePosts/FilterablePosts';

const page = async () => {
  const posts = await getAllPosts();

  const categories = ['ALL', ...new Set(posts.map((post) => post.category.toUpperCase()))];

  return (
    <section>
      <FilterablePosts posts={posts} categories={categories}></FilterablePosts>
    </section>
  );
};

export default page;
