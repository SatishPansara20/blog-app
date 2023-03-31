import GetAllAuthor from "@/lib/getAllAuthor";
import getUserPosts from "@/lib/getUserPosts";

import { Post, User } from "@/types";
import { Spin } from "antd";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface IParams extends ParsedUrlQuery {
  authorId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await GetAllAuthor();

  const paths = users.map((user: User) => ({
    params: { authorId: user.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { authorId } = context.params as IParams;
  const posts = await getUserPosts(authorId);
  return { props: { posts } };
};

const Page = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Spin />;
  }

  return (
    <div className="container mx-auto">
      {posts?.map((post: Post) => {
        return (
          <div
            key={post.id}
            className="h-200 p-3 flex flex-col gap-2 shadow-md"
          >
            <h2 className="text-xl text-gray-400 font-serif font-medium">
              {post.title}
            </h2>
            <p className="text-sm text-teal-800 font-light text-ellipsis">
              {post.body}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
