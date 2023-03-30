import { getAllUsers } from "@/pages/apicall/getAllUsers";
import { getUserPosts } from "@/pages/apicall/getUserPosts";
import { Post, User } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useEffect, useState, ReactNode, HTMLAttributes } from "react";

const Page = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="container mx-auto">
      {posts?.map((post) => {
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

export async function getStaticPaths({ userId }: { userId: string }) {
  console.log(userId);
  const users = await getAllUsers();

  console.log(users);

  const paths = users.map((user: User) => ({
    params: { userId: user.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({
  params: { userId },
}: {
  params: { userId: string };
}) {
  const posts = await getUserPosts({ id: userId });

  return { props: { posts } };
}
