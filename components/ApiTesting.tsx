"use client"
import { useQuery } from "@tanstack/react-query";

function ApiTesting() {
  const { data, isPending, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://dummyjson.com/products").then((r) => r.json()),
  });

  if (isPending) return <span>Loading...</span>;
  if (error) return <span>Oops!</span>;

 
  return (
    <ul>
      {data?.products.map((t: any) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
}

export default ApiTesting;
