import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import MovieItem from '@/components/movieItem';
import { MovieData } from '@/types';
import dummyData from '@/dummyData.json';
import styles from './searchModule.css';

export default function Search() {
  const router = useRouter();
  const { query } = router.query;
  const [searchResults, setSearchResults] = useState<MovieData[]>([]);

  useEffect(() => {
    if (typeof query === 'string' && query.trim() !== '') {
      const filteredData = dummyData.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredData as MovieData[]);
    } else {
      // 쿼리가 없으면 빈 배열 (또는 전체 데이터를 보여줄 수도 있습니다)
      setSearchResults([]); 
    }
  }, [query]);

  return (
    <Layout>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          "{query}" 검색 결과
        </h2>
        {searchResults.length > 0 ? (
          <div className={styles.grid3}>
            {searchResults.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className={styles.noResults}>검색 결과가 없습니다.</p>
        )}
      </section>
    </Layout>
  );
}