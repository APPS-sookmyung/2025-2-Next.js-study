// app/movie/[id]/page.tsx
type Props = {
  params: { id: string }
}

export default function MovieDetailPage({ params }: Props) {
  return <div>movie : {params.id}</div>
}