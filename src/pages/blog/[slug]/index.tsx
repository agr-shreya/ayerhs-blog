import { ReactElement } from "react";
import { Layout } from "@/layouts";
import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";

const Blog: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Blog: {slug}</div>;
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Blog;
