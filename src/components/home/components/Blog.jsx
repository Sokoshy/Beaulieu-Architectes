import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_BLOG = gql`
  query BlogHome($first: Int) {
    posts(first: $first) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        blog {
          extrait
        }
      }
    }
  }
`;

export function Blog() {
  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { first: 3 },
  });
  if (loading) return;
  if (error)
    return <p className="text-3xl text-[#f8f8f8]">Error: {error.message}</p>;
  const posts = data.posts.nodes;

  return (
    <section className="w-[280px] mt-7 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl 2xl:mt-36 xl:max-w-screen-lg md:max-w-[700px] xl:mt-20 sm:container">
      <h2 className=" text-3xl font-semibold text-center 2xl:text-[5rem] md:text-5xl">
        BLOG
      </h2>
      <div className="  flex flex-col items-center mt-8 2xl:mt-14 gap-5 xl:gap-0 xl:flex-wrap xl:flex-row xl:mt-10">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className={`${
              index % 3 === 0
                ? "w-fit flex flex-col items-end  "
                : index % 3 === 1
                ? "w-auto flex flex-col items-end xl:items-center xl:flex-row-reverse 2xl:mt-[-12rem] 2xl:ml-[3.87rem] xl:ml-10 xl:mt-[-15rem]"
                : "w-fit flex flex-col items-end xl:items-center xl:flex-row 2xl:mt-[-7rem] 2xl:ml-[calc(47.5%-140px)] xl:mt-[-12.5rem] xl:ml-[calc(43%-54px)]"
            }`}
          >
            <img
              className={`${
                index % 3 === 0
                  ? "w-[270px] h-[200px] object-cover rounded-lg xl:rounded-2xl 2xl:w-[530px] 2xl:h-[476px] xl:w-[344px] xl:h-[316px] sm:w-[466px] sm:h-[350px]"
                  : index % 3 === 1
                  ? "w-[270px] h-[200px] object-cover rounded-lg xl:rounded-2xl 2xl:w-[482px] 2xl:h-[396px] xl:w-[320px] xl:h-[260px] sm:w-[466px] sm:h-[350px]"
                  : "w-[270px] h-[200px] object-cover rounded-lg xl:rounded-2xl 2xl:w-[415px] 2xl:h-[342px] xl:w-[292px] xl:h-[240px] sm:w-[466px] sm:h-[350px]"
              }`}
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText}
            />
            <div
              className={` ${
                index % 3 === 0
                  ? " mt-5"
                  : index % 3 === 1
                  ? "mt-5 2xl:mr-12 xl:mr-5"
                  : "mt-5 2xl:ml-12 xl:ml-5"
              }`}
            >
              <h4
                className={` ${
                  index % 3 === 0
                    ? "max-w-[270px] text-xl 2xl:max-w-[530px] xl:max-w-[344px] sm:max-w-[450px] mt-1 mb-2.5  2xl:text-3xl xl:text-2xl md:text-2xl text-center xl:text-start"
                    : index % 3 === 1
                    ? "max-w-[270px] text-xl 2xl:max-w-[414px] xl:max-w-[300px] sm:max-w-[450px] mt-1 mb-2.5 2xl:text-3xl xl:text-2xl md:text-2xl text-center xl:text-start"
                    : "max-w-[270px] text-xl 2xl:max-w-[450px] xl:max-w-[350px] sm:max-w-[450px] mt-4 mb-2.5 2xl:text-3xl xl:text-2xl md:text-2xl text-center xl:text-start"
                }`}
              >
                {post.title}
              </h4>

              {post.blog.extrait &&
                post.blog.extrait.split("\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className={`${
                      index % 3 === 0
                        ? "max-w-[270px] 2xl:text-xl 2xl:max-w-[530px] xl:max-w-[344px] sm:max-w-[450px] text-base"
                        : index % 3 === 1
                        ? "max-w-[270px] 2xl:text-xl 2xl:max-w-[414px] xl:max-w-[300px] sm:max-w-[450px] text-base"
                        : "max-w-[270px] 2xl:text-xl 2xl:max-w-[450px] xl:max-w-[350px] sm:max-w-[450px] text-base"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              <div className="flex justify-center xl:block">
                <button className="font-medium text-[#404040] mt-3 2xl:mt-2.5 text-base px-[32.2px] py-[11px] rounded-lg hover:scale-110 xl:text-lg 2xl:text-xl bg-[#dcb854] xl:mt-2 xl:px-[32.2px] xl:py-[11px] xl:rounded-lg">
                  <Link to={`/blog/${post.slug}`} key={post.id}>
                    Plus sur le projet
                  </Link>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
