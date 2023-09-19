import { Article } from "../../types";
import { Button } from "../Button/Button";
import "./ArticleGrid.css";

interface IArticleGrid {
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
};

export function ArticleGrid({ articles, onSelectArticle }: IArticleGrid) {
  return (
    <div className="ArticleGrid" data-testid="ArticleGrid">
      {articles.map(({ id, title, subtitle, imageUrl }) => {
        return (
          <article
            key={id}
            className="ArticleGridCell"
            data-testid="ArticleGridCell"
          >
            <img className="ArticleGridCellImage" src={imageUrl} alt={`Represents the article titled: ${title}`}/>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <Button text="View" onClick={() => onSelectArticle(id)}
            aria-label={`View article titled: ${title}`} />
          </article>
        );
      })}
    </div>
  );
}
