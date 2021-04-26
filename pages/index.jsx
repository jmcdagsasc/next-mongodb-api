import Head from "next/head";
import ArticleList from "../components/ArticleList";
import axios from "axios";
import Link from "next/link";

export default function Home({ articles }) {
  //console.log(articles);
  return (
    <>
      <Head>
        <title>Desarrollo web</title>
        <meta name="keywords" content="Desarrollo web, programacion, next" />
      </Head>

      <ArticleList articles={articles} />
      <br />
      <Link href="consulta">Datos de la API local</Link>
    </>
  );
}

export const getStaticProps = async () => {
  // Se genera en tiempo de construcción
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.data;

  return {
    props: { articles },
  };
};
