import { React } from 'react'; // 1. React 추가
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { MovieData } from '@/types';
import { dummyData } from '@/dummyData.json';
import { styles }from './movieDetailModule.css'; /
interface MovieDetailProps {
  movie: MovieData;
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  if (!movie) {
    return <div>영화를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={styles.container}>
      {/* 1. 흐릿한 배경 이미지 */}
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${movie.posterImgUrl})` }}
      />
      
      {/* 2. 상세 정보 컨텐츠 */}
      <div className={styles.content}>
        <div className={styles.posterWrapper}>
          <Image
            src={movie.posterImgUrl}
            alt={movie.title}
            width={400}
            height={600}
            className={styles.posterImage}
            priority // 우선순위 높여서 로드
          />
        </div>
        
        <div className={styles.infoWrapper}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.meta}>
            <span>{movie.releaseDate} 개봉</span>
            <span>·</span>
            <span>{movie.genres.join(', ')}</span>
            <span>·</span>
            <span>{movie.runtime}분</span>
          </p>
          <p className={styles.company}>배급: {movie.company}</p>
          
          <h3 className={styles.subTitle}>{movie.subTitle}</h3>
          
          <p className={styles.description}>{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

// 3. 빌드 시 동적 경로 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dummyData.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: false }; // fallback: false는 없는 경로면 404
};

// 4. 각 경로에 데이터 주입
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { id } = context.params as { id: string };
  const movie = dummyData.find((m) => m.id.toString() === id);

  return {
    props: {
      movie,
    },
  };
};