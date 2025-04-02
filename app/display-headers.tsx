import { cookies, headers } from 'next/headers';

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getTestCookieValue() {
  const cookieStore = await cookies();
  const test = cookieStore.get('testcookie');

  return test?.value;
}

export async function DisplayHeaders() {
  const headerList = await headers();
  const allheaders = [];

  for (const pair of headerList.entries()) {
    allheaders.push(`${pair[0]}: ${pair[1]}`);
  }

  return (
    <>
      <pre>Test Cookie Value: `{getTestCookieValue() || 'undefined'}`</pre>
      <div>Headers:</div>
      <pre
        style={{
          maxHeight: 200,
          overflow: 'scroll',
          padding: 10,
          background: '#eee',
        }}
      >
        {JSON.stringify(allheaders, null, 2)}
      </pre>
    </>
  );
}
