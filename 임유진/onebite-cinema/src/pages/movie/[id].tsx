import { useRouter } from "next/router";
import style from "./[id].module.css";
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import fetchOneMovie from "@/lib/fetch-one-movies";
import { Infer } from "next/dist/compiled/superstruct";
import Head from "next/head";
import { notFound } from "next/navigation";
import { tree } from "next/dist/build/templates/app-page";

// const mockData = {
//   id: 1,
//   title: "미키 17",
//   releaseDate: "2025-02-28",
//   company: "워너 브라더스 코리아",
//   genres: ["모험", "드라마", "SF", "코미디"],
//   subTitle: "당신은 몇 번째 미키입니까?",
//   description:
//     "“당신은 몇 번째 미키입니까?” 친구 ‘티모’와 함께 차린 마카롱 가게가 쫄딱 망해 거액의 빚을 지고 못 갚으면 죽이겠다는 사채업자를 피해 지구를 떠나야 하는 ‘미키’. 기술이 없는 그는, 정치인 ‘마셜’의 얼음행성 개척단에서 위험한 일을 도맡고, 죽으면 다시 프린트되는 익스펜더블로 지원한다. 4년의 항해와 얼음행성 니플하임에 도착한 뒤에도 늘 ‘미키’를 지켜준 여자친구 ‘나샤’. 그와 함께, ‘미키’는 반복되는 죽음과 출력의 사이클에도 익숙해진다. 그러나 ‘미키 17’이 얼음행성의 생명체인 ‘크리퍼’와 만난 후 죽을 위기에서 돌아와 보니 이미 ‘미키 18’이 프린트되어 있다. 행성 당 1명만 허용된 익스펜더블이 둘이 된 ‘멀티플’ 상황. 둘 중 하나는 죽어야 하는 현실 속에 걷잡을 수 없는 사건이 기다리고 있었으니… “자알 죽고, 내일 만나”",
//   runtime: 137,
//   posterImgUrl:
//     "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250207_265%2F1738893336962Cn1Vd_JPEG%2Fmovie_image.jpg",
// };

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movie },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>한입시네마</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입시네마" />
          <meta
            property="og:description"
            content="한입 시네마에 등록된 도서들을 만나보세요"
          />
        </Head>
        <div>로딩중입니다.</div>
      </>
    );
  }
  if (!movie) return "문제가 발생했습니다. 다시 시도하세요.";

  const {
    id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={posterImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url('${posterImgUrl}')` }}
        >
          <img src={posterImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.info}>
          {releaseDate} / {genres} / {runtime}
        </div>
        <div className={style.company}>{company}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
