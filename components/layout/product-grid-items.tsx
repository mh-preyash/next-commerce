import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { VercelProduct as Product } from 'lib/bigcommerce/types';
import Link from 'next/link';
import Label from "../label";

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => {
        const label = {
          title: product.title,
          amount: product.priceRange.maxVariantPrice.amount,
          currencyCode: product.priceRange.maxVariantPrice.currencyCode
        };
        return (
          <div key={product.handle}>
            <Grid.Item className="animate-fadeIn">
              <Link className="relative inline-block h-full w-full" href={`${product.handle}`}>
                <GridTileImage
                  alt={product.title}
                  label={label}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </Link>
            </Grid.Item>
            {label ? (
              <Label
                title={label.title}
                amount={label.amount}
                currencyCode={label.currencyCode}
                position={label.position}
              />
            ) : null}
          </div>
        );
      })}
    </>
  );
}
