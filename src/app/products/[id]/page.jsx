// /app/products/[id]/page.js

import ProductDetails from '@/components/mainCompos/ProductDetails';
import { allproducts } from '@/constants/allproducts';

export async function generateStaticParams() {
  // Generate the static paths for each product ID
  return allproducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }) {
  const { id } = params;

  // Debugging: Log params and the id
  console.log("Params:", params);
  console.log("ID from URL:", id);

  // Find the specific product based on the ID from the URL
  const product = allproducts.find((item) => item.id.toString() === id);

  // Debugging: Log the found product or null
  console.log("Found product:", product);

  // If the product is not found, handle it gracefully
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex justify-center">
      {/* Pass the found product as 'item' prop */}
      <ProductDetails item={product} />
    </div>
  );
}
