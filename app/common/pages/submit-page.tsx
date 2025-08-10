import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Submit Product | wemake" },
  { name: "description", content: "Submit your product to our community" },
];

export default function SubmitProductPage() {
  return (
    <div className="px-20 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Submit a Product
          </h1>
          <p className="text-lg font-light text-foreground">
            Share your amazing product with our community
          </p>
        </div>

        <div className="max-w-2xl">
          {/* Product submission form will go here */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">
              Product Submission Form Placeholder
            </h3>
            <p className="text-muted-foreground">
              Form for submitting new products will be implemented here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
