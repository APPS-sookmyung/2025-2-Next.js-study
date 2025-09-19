import "../styles/global.css";
import { useRouter } from "next/router";
import GlobalLayout from "../components/GlobalLayout";
import SearchableLayout from "../components/SearchableLayout";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const useSearchLayout =
    router.pathname === "/" || router.pathname.startsWith("/search");
  const Page = <Component {...pageProps} />;

  return (
    <GlobalLayout>
      {useSearchLayout ? (
        <SearchableLayout>{Page}</SearchableLayout>
      ) : (
        Page
      )}
    </GlobalLayout>
  );
}
