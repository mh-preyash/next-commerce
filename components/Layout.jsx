import {Await, useLocation} from '@remix-run/react';
import {Suspense} from 'react';
import {Aside} from '~/components/Aside';
import {CartMain} from '~/components/Cart';
import {
  PredictiveSearchForm,
  PredictiveSearchResults,
} from '~/components/Search';
import CustomNavbar from './nextui/CustomNavbar';
import Footer from './Footer';
import {Routes} from '../utilities/constants';
import Subscribe from './Subscribe';

const paths = [
  Routes.home,
  Routes.ingredients,
  Routes.blog,
  Routes.cleanse,
  Routes.about,
  Routes.contact,
];

export function Layout({
  cart,
  children = null,
  isLoggedIn,
  recommendedProducts,
}) {
  const location = useLocation();
  return (
    <div className={paths.includes(location.pathname) ? 'mt-0' : 'mt-[96px]'}>
      <CartAside cart={cart} />
      <SearchAside />
      <CustomNavbar cart={cart} isLoggedIn={isLoggedIn} />
      <main>{children}</main>
      <Subscribe />
      <Footer products={recommendedProducts} />
    </div>
  );
}

function CartAside({cart}) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}

function SearchAside() {
  return (
    <Aside id="search-aside" heading="SEARCH">
      <div className="predictive-search">
        <br />
        <PredictiveSearchForm>
          {({fetchResults, inputRef}) => (
            <div>
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
              />
              &nbsp;
              <button type="submit">Search</button>
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
      </div>
    </Aside>
  );
}
