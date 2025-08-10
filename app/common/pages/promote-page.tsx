import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Promote Product | wemake" },
  { name: "description", content: "Promote your product to reach more users" },
];

export default function PromoteProductPage() {
  return (
    <div className="px-20 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Promote Your Product
          </h1>
          <p className="text-lg font-light text-foreground">
            Get your product in front of the right audience
          </p>
        </div>

        <div className="max-w-2xl">
          {/* Product promotion form will go here */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">
              Product Promotion Form Placeholder
            </h3>
            <p className="text-muted-foreground">
              Form for promoting products will be implemented here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
