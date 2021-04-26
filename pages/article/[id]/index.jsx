// import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const article = ({ article }) => {
  //   const myrouter = useRouter();
  //   const { id } = myrouter.query;

  //   return <div>Soy el artículo {id}</div>;
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Regresar</Link>
    </>
  );
};

export const getStaticProps = async context => {
  let res = "";
  if (JSON.parse(context.params.id) !== 9) {
    res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );
  } else {
    res = {
      data: { id: "9", title: "No title", body: "No data available" },
    };
  }

  const article = await res.data;
  //console.log(article);

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );

  const articles = await res.data;
  //console.log(article);

  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({ params: { id: JSON.stringify(id) } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
