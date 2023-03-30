import Link from "next/link";
import { useEffect, useState } from "react";

import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import { User } from "@/types";

export const getStaticProps: GetStaticProps<{
  data: User[];
}> = async () => {
  const res = await fetch(`http://localhost:3001/users`);
  const data: User[] = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

function Page({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="container  mx-auto">
        {data?.map((author, i) => {
          return (
            <div key={author.id}>
              <Link href={`/home/${author.id}`}>{author.name}</Link>

              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Page;
