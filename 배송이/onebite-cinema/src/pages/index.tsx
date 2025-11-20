import Layout from '@/components/Layout';
import MovieItem from '@/components/MovieItem';
import { MovieData } from '@/types';
import dummyData from '@/dummyData.json';
import styles from './homeModule.css';

export default function Home() {
  // "지금 가장 추천하는 영화" - 3개
  const recommendedMovies = dummyData.slice(0, 3);
  
  // "등록된 모든 영화" - 전체
  const allMovies = dummyData;

  return (
    <Layout>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>지금 가장 추천하는 영화</h2>
        <div className={styles.grid3}>
          {recommendedMovies.map((movie) => (
            <MovieItem key={movie.id} movie={movie as MovieData} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>등록된 모든 영화</h2>
        <div className={styles.grid5}>
          {allMovies.map((movie) => (
            <MovieItem key={movie.id} movie={movie as MovieData} />
          ))}
        </div>
      </section>
    </Layout>
  );
}