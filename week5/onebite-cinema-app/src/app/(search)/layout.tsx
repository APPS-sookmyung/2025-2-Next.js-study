// app/(search)/layout.tsx
import Searchbar from './components/Searchbar'

export default function SearchbarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div style={{ padding: '8px 0' }}>
        <strong>Searchbar Layout</strong>
        <div style={{ marginTop: 6 }}>
          <Searchbar />
        </div>
      </div>
      {children}
    </section>
  )
}