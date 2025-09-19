import { useRouter } from "next/router";
export default function SearchPage() {
  const router = useRouter();
  const q = typeof router.query.q === "string" ? router.query.q : "";
  return <h1>검색 결과 : {q || "없음"}</h1>;
}
