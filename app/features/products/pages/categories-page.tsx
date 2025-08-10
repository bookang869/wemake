import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Product Categories | wemake" },
  { name: "description", content: "Browse products by category" },
];

export default function CategoriesPage() {
  return (
    <div className="px-20 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Product Categories
          </h1>
          <p className="text-lg font-light text-foreground">
            Browse products by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category cards will go here */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Category Placeholder</h3>
            <p className="text-muted-foreground">
              Product categories will be displayed here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
