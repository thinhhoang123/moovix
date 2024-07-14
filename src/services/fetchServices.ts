'use service';

// the following is dangerous, and will allow API content to be intercepted and modified between the client and the server.
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

async function FetchServices({
  endpoint,
  method,
}: {
  endpoint: string;
  method: string;
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, {
    method,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    console.log(res);
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function GET(endpoint: string) {
  return await FetchServices({ endpoint, method: 'GET' });
}

export { GET };
