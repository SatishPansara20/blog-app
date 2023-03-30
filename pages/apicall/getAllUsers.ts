import { User } from "@/types";


export async function getAllUsers():Promise<User[]> {
 
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("failed to fetch getAllUsers");

  const data = await res.json();

  return data;
}




