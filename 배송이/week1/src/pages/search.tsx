import { useRouter } from "next/router";
export default function SearchPage() {
  const { query } = useRouter(); // /search?q=파묘
  return <h1>검색 결과 : {String(query.q ?? "")}</h1>;
}