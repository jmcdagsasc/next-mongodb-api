import Link from "next/link";
import styles from "../styles/Article.module.css";

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const ArticleItem = ({ article }) => {
  return (
    <div className={styles.card}>
      <Link key={article.id} href="/article/[id]" as={`/article/${article.id}`}>
        <span>
          <h3>{capitalize(article.title)}</h3>
          <p>{article.body}</p>
        </span>
      </Link>
    </div>
  );
};

export default ArticleItem;
