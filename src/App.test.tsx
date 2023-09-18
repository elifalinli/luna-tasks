/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { calculateArticleCount } from "./utilityFunctions";
import { Article } from "./types";

describe("Hero Section", () => {
  test("renders Hero section title", async () => {
    render(<App />);
    const titleElement = screen.getByText(
      /A safe space for girls to learn and grow/i
    );
    expect(titleElement).toBeInTheDocument();
  });
});

describe("Articles Grid", () => {
  test("renders articles according to their categories if selected", () => {
    render(<App />);

    const articlesDisplayed1 = screen.queryAllByTestId("ArticleGridCell");

    expect(articlesDisplayed1).toHaveLength(12);
    const categoryButton = screen.getByText(/Periods & hormones/);
    act(() => {
      userEvent.click(categoryButton);
    });
    const articlesDisplayed2 = screen.queryAllByTestId("ArticleGridCell");
    expect(articlesDisplayed2).toHaveLength(3);
  });
  test("renders the View button in grid cells", () => {
    render(<App />);
    const viewButtons = screen.getAllByRole("button", { name: /View/ });
    viewButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
  test('renders an article when clicked to the View button', () => {
    render(<App />);
    const viewButtons = screen.getAllByRole("button", { name: /View/})
    act(() => {
      viewButtons.forEach((button) => {
        userEvent.click(button);
      });
    });
    const articlesDisplayed = screen.getAllByTestId("ArticleGridCell")
    articlesDisplayed.forEach(article => {
      expect(article).toBeInTheDocument()
    })
  })
  
});

describe("Category option buttons", () => {
  test("renders all category options", () => {
    render(<App />);
    const categoriesDisplayed1 = screen.queryAllByTestId("CategoryOption");
    expect(categoriesDisplayed1).toHaveLength(9);
  });
  test("renders the category buttons with the article count display", () => {
    render(<App />);
    const categoryButton1 = screen.getByText(/Periods & hormones \(\d+\)/);
    expect(categoryButton1).toBeInTheDocument();
    const categoryButton2 = screen.getByText(/Relationships \(\d+\)/);
    expect(categoryButton2).toBeInTheDocument();
  });
  test("clears filter and renders all the articles if user clicks the clicked category option again", () => {
    render(<App />);
    const categoryButton = screen.getByText(/Periods & hormones/);
    act(() => {
      userEvent.click(categoryButton);
    });
    act(() => {
      userEvent.click(categoryButton);
    });
    const articlesDisplayed = screen.queryAllByTestId("ArticleGridCell");
    expect(articlesDisplayed).toHaveLength(12);
  });
});

describe("Unit testing for calculateArticleCount", () => {
  test("returns the correct category count for a list of articles", () => {
    const articlesTestData: Article[] = [
      {
        id: "180957138",
        title: "Article 1",
        categories: ["4636820", "4636809"],
        subtitle: "string",
        imageUrl: "string",
        content: [
          {
            content: [{ text: "Quick summary 📝", type: "bold-text" }],
            type: "paragraph",
          },
        ],
        originalPublishDate: "string",
      },
      {
        id: "180958366",
        title: "Article 2",
        categories: ["4636807", "4636796"],
        subtitle: "string",
        imageUrl: "string",
        content: [
          {
            content: [{ text: "Quick summary 📝", type: "bold-text" }],
            type: "paragraph",
          },
        ],
        originalPublishDate: "string",
      },
    ];

    const result = calculateArticleCount(articlesTestData);

    expect(result).toEqual({
      "4636796": 1,
      "4636807": 1,
      "4636809": 1,
      "4636820": 1,
    });
  });
  test("returns the correct category counts when a certain category appears in multiple articles", () => {
    const articlesTestData: Article[] = [
      {
        id: "180957138",
        title: "Article 1",
        categories: ["4636820", "4636809", "4636807"],
        subtitle: "string",
        imageUrl: "string",
        content: [
          {
            content: [{ text: "Quick summary 📝", type: "bold-text" }],
            type: "paragraph",
          },
        ],
        originalPublishDate: "string",
      },
      {
        id: "180958366",
        title: "Article 2",
        categories: ["4636807", "4636809"],
        subtitle: "string",
        imageUrl: "string",
        content: [
          {
            content: [{ text: "Quick summary 📝", type: "bold-text" }],
            type: "paragraph",
          },
        ],
        originalPublishDate: "string",
      },
    ];
    const result = calculateArticleCount(articlesTestData);
    expect(result).toEqual({ "4636807": 2, "4636809": 2, "4636820": 1 });
  });
  test("returns an empty object when no articles categories array is empty", () => {
    const articlesTestData: Article[] = [
      {
        id: "180957138",
        title: "Article 1",
        categories: [],
        subtitle: "string",
        imageUrl: "string",
        content: [
          {
            content: [{ text: "Quick summary 📝", type: "bold-text" }],
            type: "paragraph",
          },
        ],
        originalPublishDate: "string",
      },
    ];
    const result = calculateArticleCount(articlesTestData);
    expect(result).toEqual({});
  });
});
