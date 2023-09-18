import { Article } from "./types";

export function calculateArticleCount(articles: Article[]): Record<string, number> {
    const categoryCounts: Record<string, number> = {}

    articles.forEach((article) => {
        article.categories.forEach((categoryId) => {
            if (categoryCounts[categoryId]) {
                categoryCounts[categoryId]++
            } else {
                categoryCounts[categoryId] = 1
            }
        })
    })
    return categoryCounts
} 