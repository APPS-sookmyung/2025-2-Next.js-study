import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchableLayout({ children }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  // initialize from current query
  useEffect(() => {
    if (typeof router.query.q === "string") {
      setKeyword(router.query.q);
    }
  }, [router.query.q]);

  const onSubmit = (e) => {
    e.preventDefault();
    const q = keyword.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  return (
    <>
      <div className="container">
        <form className="searchBar" onSubmit={onSubmit}>
          <input
            placeholder="검색어를 입력하세요 ..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">검색</button>
        </form>
      </div>
      {children}
    </>
  );
}
