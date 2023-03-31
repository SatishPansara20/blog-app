const GetUserPosts = async (authorId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${authorId}`
  );
  if (!res.ok) throw new Error("failed to fetch getUserPosts");
  const data = await res?.json();
  return data;
};

export default GetUserPosts;
