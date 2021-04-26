import {server} from '../config/';
import axios from "axios"

export default function Consulta({ articles }) {
  //console.log(articles);
  return (
    <div>
      <ul>
        {articles.map(text => <li>{text}</li>)}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  // Se genera en tiempo de construcción
  const res = await axios.get(
    `${server}/api/articles`
  );
  const articles = await res.data;

  return {
    props: { articles },
  };
};
