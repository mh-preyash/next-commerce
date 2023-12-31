import {Divider} from '@nextui-org/react';
import {XCircle} from 'react-feather';

/**
 * A side bar component with Overlay that works without JavaScript.
 * @example
 * ```jsx
 * <Aside id="search-aside" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 */

export function Aside({children, heading, id = 'aside'}) {
  return (
    <div aria-modal className="overlay" id={id} role="dialog">
      <button
        className="close-outside"
        onClick={() => {
          history.go(-1);
          window.location.hash = '';
        }}
      />
      <aside>
        <header className="border-b-0 flex flex-col justify-center mt-2">
          <div className="flex items-center justify-between w-full">
            <h3>{heading}</h3>
            <CloseAside />
          </div>
          <Divider className="mt-3" />
        </header>
        <main>{children}</main>
      </aside>
    </div>
  );
}

function CloseAside() {
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <XCircle
      className="cursor-pointer"
      onClick={() => {
        history.go(-1);
        window.location.hash = '';
      }}
    />
  );
}
