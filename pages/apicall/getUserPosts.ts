

export async function getUserPosts({
  id,
}: {
  id: string;
}) {
   
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  
    if (!res.ok) throw new Error("failed to fetch getUserPosts");
  
    const data = await res.json();
  
    return data;
  }
  
  
  
  
  
