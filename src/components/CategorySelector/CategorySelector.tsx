import { Category } from "../../types";
import { Article } from "../../types";
import "./CategorySelector.css";


interface ICategorySelector {
  categories: Category[];
  selectedCategoryId?: Category["id"];
  onSelectCategory: (categoryId: Category["id"]) => void;
  categoryCounts: Record<string, number>;
  articles: Article[]
}

 

export function CategorySelector({
  categories,
  selectedCategoryId,
  onSelectCategory,
  categoryCounts
}: ICategorySelector) {


  const sortedCategories = [...categories].sort((a, b) =>
  a.title.localeCompare(b.title)
);
const handleCategoryClick = (categoryId: string) => {
  if(selectedCategoryId === categoryId) {
    onSelectCategory("")
  } else {
    onSelectCategory(categoryId)
  }

}
  return (
    <div className="CategorySelector" data-testid="CategorySelector">
      {sortedCategories.map(({ id, title, color }) => {
        const isSelected = selectedCategoryId === id;
        const articleCount = categoryCounts[id] || 0;
        return (
          <div
            key={id}
            className="CategoryOption"
            style={{ backgroundColor: isSelected ? "white" : color }}
            onClick={() => {
              handleCategoryClick(id);
            }}
          >
            {title} ({articleCount})
          </div>
        );
      })}
    </div>
  );
}
