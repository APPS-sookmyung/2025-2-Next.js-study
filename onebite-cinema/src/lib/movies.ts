import { MovieData } from '@/types'; // 기존에 만든 
const BASE_URL = 'http://localhost:4000';

/**
 * API 호출을 위한 공통 fetch 함수
 * @param endpoint API 엔드포인트 (예: /movies)
 */
async function fetchAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) {
    // API 요청이 실패하면 에러를 던집니다.
    throw new Error(`API ${endpoint} 요청에 실패했습니다.`);
  }
  return res.json() as Promise<T>;
}

// 1. 인덱스 페이지용 API
// 3개의 추천 영화 (json-server의 _limit=3 활용)
export const getRecommendedMovies = () => 
  fetchAPI<MovieData[]>('/movies?_limit=3');

// 전체 영화
export const getAllMovies = () => 
  fetchAPI<MovieData[]>('/movies');

// 2. 검색 페이지용 API (json-server의 title_like= 활용)
export const searchMovies = (query: string) =>
  fetchAPI<MovieData[]>(`/movies?title_like=${query}`);

// 3. 상세 페이지용 API
export const getMovieById = (id: string) =>
  fetchAPI<MovieData>(`/movies/${id}`);