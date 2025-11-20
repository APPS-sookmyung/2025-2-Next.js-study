import React, { useState, FormEvent, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${searchTerm.trim()}`);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <h1 className={styles.logo}>ONEBITE CINEMA</h1>
        </Link>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            검색
          </button>
        </form>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}