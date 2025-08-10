import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Search Products | wemake" },
  { name: "description", content: "Search for products in our community" },
];

export default function SearchPage() {
  return (
    <div className="px-20 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Search Products
          </h1>
          <p className="text-lg font-light text-foreground">
            Find the perfect product for your needs
          </p>
        </div>

        <div className="max-w-2xl">
          {/* Search form will go here */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Search Form Placeholder</h3>
            <p className="text-muted-foreground">
              Product search functionality will be implemented here
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Search results will go here */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">
              Search Results Placeholder
            </h3>
            <p className="text-muted-foreground">
              Search results will be displayed here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
