import { FooterComponents } from "../components/footer/FooterComponents";
import Nav from "../components/nav/Nav";
import { PostList } from "../components/post/PostListComponents";

export default function Blog() {
  return (
    <>
      <Nav />
      <PostList />
      <FooterComponents />
    </>
  );
}
