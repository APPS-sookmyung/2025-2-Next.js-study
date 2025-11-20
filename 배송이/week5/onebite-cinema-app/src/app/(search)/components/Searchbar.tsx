'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function Searchbar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initial = searchParams.get('q') ?? ''
  const [keyword, setKeyword] = useState(initial)

  useEffect(() => {
    setKeyword(initial)
  }, [initial])

  const go = useCallback(() => {
    const q = keyword.trim()
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : '/search')
  }, [keyword, router])

  return (
    <div style={{ display: 'inline-flex', gap: 8 }}>
      <input
        placeholder="검색어를 입력하세요 ..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && go()}
        style={{ padding: '6px 8px' }}
      />
      <button onClick={go}>검색</button>
    </div>
  )
}