import { User } from "@/types";



const GetAllAuthor= async (): Promise<User[]>  => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("failed to fetch getAllUsers");
  const data = await res?.json();
  return data;
};

export default GetAllAuthor;
