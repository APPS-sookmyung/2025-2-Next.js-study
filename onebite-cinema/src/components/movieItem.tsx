import React from 'react';
import Link from 'next/link'; // 1. { } 제거
import Image from 'next/image'; // 2. { } 제거
import { MovieData } from '@/types';
import styles from './movieItem.module.css'; // 3. { } 제거

interface MovieItemProps {
  movie: MovieData;
}

// 4. 문법 오류 수정
export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <Link href={`/movie/${movie.id}`} className={styles.item}>
      <div className={styles.imageWrapper}>
        <Image
          src={movie.posterImgUrl}
          alt={movie.title}
          width={300}
          height={450}
          className={styles.posterImage}
        />
      </div>
      <h3 className={styles.title}>{movie.title}</h3>
    </Link>
  );
}