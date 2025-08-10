import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboard-page.tsx"),
      route(
        "/yearly/:year",
        "features/products/pages/yearly-leaderboard-page.tsx"
      ),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-leaderboard-page.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-leaderboard-page.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-leaderboard-page.tsx"
      ),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),
    route("/search", "common/pages/search-page.tsx"),
    route("/submit", "common/pages/submit-page.tsx"),
    route("/promote", "common/pages/promote-page.tsx"),
  ]),
] satisfies RouteConfig;
