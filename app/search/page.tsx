import CustomSelect from '@/components/CustomSelect';
import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getProducts } from 'lib/bigcommerce';
import { defaultSort, sorting } from 'lib/constants';

export const runtime = 'edge';

const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';
  const selectData = sorting.map((i) => {
    return {
      label: i?.title,
      value: i?.sortKey
    };
  });

  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
        {searchValue ? (
          <p>
            {products.length === 0
              ? 'There are no products that match '
              : `Showing ${products.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : null}
        <div className="w-[200px]">
          {<CustomSelect className="max-w-xs" data={selectData} label="Sort by" />}
        </div>
      </div>
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
