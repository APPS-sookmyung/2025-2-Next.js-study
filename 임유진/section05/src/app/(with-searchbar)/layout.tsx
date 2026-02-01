import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Suspense: 클라이언트 측에서만 렌더링되는 컴포넌트 */}
      <Suspense fallback={<div>Loading ... </div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
