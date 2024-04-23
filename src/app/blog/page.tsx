// import PostCard from "@/components/postCard/postCard";

import { getStores } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.log("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  //   const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getStores();

  return (
    <div className="">
      {posts?.map((post) => (
        <div className="" key={post.id}>
          <div className=" text-lg">{post.shopName}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
