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
          <div
            key={id}
            className="ArticleGridCell"
            data-testid="ArticleGridCell"
          >
            <img className="ArticleGridCellImage" src={imageUrl} alt="Photos related to young girls' issues, changes depending on the theme"/>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <Button text="View" onClick={() => onSelectArticle(id)} />
          </div>
        );
      })}
    </div>
  );
}
