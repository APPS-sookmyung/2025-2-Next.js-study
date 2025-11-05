// app/(with-searchbar)/search/page.tsx
type Props = {
  searchParams?: { q?: string }
}

export default function SearchPage({ searchParams }: Props) {
  const q = searchParams?.q ?? ''
  return <div>Search : {q}</div>
}