export default function SearchbarLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <section>
      <div style={{ padding: '8px 0' }}>
        Searchbar Layout
      </div>
      {children}
    </section>
  )
}