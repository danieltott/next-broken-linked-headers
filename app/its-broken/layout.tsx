import { DisplayHeaders, getTestCookieValue } from '../display-headers';
import Link from 'next/link';

/** Add your relevant code here for the issue to reproduce */
export default async function BrokenPage({ children }) {
  const cookieValue = await getTestCookieValue();

  return (
    <div>
      <div
        style={{ border: '1px solid blue', margin: '0 0 20px', padding: 20 }}
      >
        {cookieValue ? (
          <div>It's fine when loaded directly</div>
        ) : (
          <div>
            It's broken in <code>layout.tsx</code> alongside a{' '}
            <code>loader.tsx</code>:
          </div>
        )}
        <DisplayHeaders />

        <ul>
          <li>
            If you refresh this page (ie not a `Link` navigate but a hard
            navigate, it works fine.
          </li>
          <li>
            <Link href="/its-broken">
              It even breaks when you link to itself.
            </Link>
          </li>
          <li>
            <Link href="/with-no-loader-not-broken">
              But not when you link to a page with no <code>loader.tsx</code>.
            </Link>
          </li>
        </ul>
      </div>
      <div
        style={{ border: '1px solid green', margin: '0 0 20px', padding: 20 }}
      >
        <div>Page</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
