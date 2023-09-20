import { Hero } from "./components/Hero/Hero";
import { CategorySelector } from "./components/CategorySelector/CategorySelector";
import { ArticleGrid } from "./components/ArticleGrid/ArticleGrid";
import { ArticleDisplay } from "./components/ArticleDisplay/ArticleDisplay";
import { useApp } from "./useApp";
import { calculateArticleCount } from "./utilityFunctions";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useState } from "react";
import { Article, RichTextItems } from "./types";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  const {
    articles,
    categories,
    selectedArticle,
    filteredArticles,
    selectedCategoryId,
    setSelectedCategoryId,
    setSelectedArticleId,
  } = useApp();

  const categoryCounts = calculateArticleCount(articles);

  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [searched, setSearched] = useState<boolean>(false);

  function onSearch(keyword: string) {
    const result: Article[] = [];

    function extractAsPlainText(contentStr: RichTextItems): string {
      return contentStr
        .flatMap((item) => {
          if (item.type === "paragraph") {
            return item.content.map((para) => para.text);
          } else if (
            item.type === "ordered-list" ||
            item.type === "bullet-list"
          ) {
            return item.content.flatMap((listContent) =>
              listContent.content.map((para) => para.text)
            );
          }
          return [];
        })
        .join(" ");
    }
    articles.forEach((article) => {
      const articleText = extractAsPlainText(article.content);
      if (articleText.toLowerCase().includes(keyword.toLowerCase())) {
        result.push(article);
      }
    });
    setSearchResults(result);
    setSelectedCategoryId("");
  }

  return (
    <div className="App" data-testid="App">
      <Hero />
      <CategorySelector
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={(id) => {
          setSearchResults([]);
          setSelectedCategoryId(id);
          setSearched(false);
        }}
        categoryCounts={categoryCounts}
        articles={articles}
      />
      <SearchBar
        searched={searched}
        setSearched={setSearched}
        onSearch={onSearch}
        searchResults={searchResults}
      />
      <ArticleGrid
        articles={
          searched && searchResults.length > 0
            ? searchResults
            : searched && searchResults.length === 0
            ? []
            : filteredArticles
        }
        onSelectArticle={(id) => {
          setSelectedArticleId(id);
        }}
      />

      {selectedArticle && (
        <ArticleDisplay
          article={selectedArticle}
          onHideArticle={() => {
            setSelectedArticleId(undefined);
          }}
        />
      )}
      <ScrollToTop/>
    </div>
  );
}

export default App;
