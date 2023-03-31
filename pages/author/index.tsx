import Link from "next/link";
import { useEffect, useState } from "react";

import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import { User } from "@/types";
import GetAllAuthor from "../../lib/getAllAuthor";

export const getStaticProps: GetStaticProps<{
  data: User[];
}> = async () => {
  const data = await GetAllAuthor();

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
              <Link href={`/author/${author?.id}`}>{author?.name}</Link>

              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Page;
