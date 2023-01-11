export default async (request) => {
    return new Response("Hello, Sygnal!", {
      headers: { "content-type": "text/html" },
    });
  };