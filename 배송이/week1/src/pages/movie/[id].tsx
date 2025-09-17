import { useRouter } from "next/router";
export default function MovieDetail() {
  const { query } = useRouter(); // /movie/1091051
  return <h1>{String(query.id ?? "")} 영화 상세페이지</h1>;
}