import type { MetaFunction } from "react-router";
import type { Route } from "./+types/category-page";

export const meta: MetaFunction<typeof Route> = ({ params }) => [
  { title: `${params.category} Products | wemake` },
  {
    name: "description",
    content: `Products in the ${params.category} category`,
  },
];

export default function CategoryPage({ params }: Route.ComponentProps) {
  const { category } = params;

  return (
    <div className="px-20 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            {category}
          </h1>
          <p className="text-lg font-light text-foreground">
            Products in the {category} category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Products in this category will go here */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">
              Category Product Placeholder
            </h3>
            <p className="text-muted-foreground">
              Products in {category} will be displayed here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
