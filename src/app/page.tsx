import FeaturedPost from '@/components/Posts/FeaturedPosts';
import Profile from '@/components/Profile/Profile';
import SliderPosts from '@/components/SliderPosts/SliderPosts';

export default function Home() {
  return (
    <section>
      <Profile></Profile>
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPost></FeaturedPost>
      {/* @ts-expect-error Async Server Component */}
      <SliderPosts></SliderPosts>
    </section>
  );
}
