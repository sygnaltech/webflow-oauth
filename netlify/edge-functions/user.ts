import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
/*
  switch (url.searchParams.get("action")) {
    case "set":
      context.cookies.set({
        name: "action",
        value: "hello",
      });

      return new Response('Cookie value has been set. Reload this page without the "action" parameter to see it.');

    case "clear":
      context.cookies.delete("action");

      return new Response(
        'Cookie value has been cleared. Reload this page without the "action" parameter to see the new state.',
      );
  }
*/

  const value = context.cookies.get("userData");

  if (!value) 
    return new Response("No user logged in."); 

  const userData = JSON.parse(value);
//  const message = value
//    ? `Cookie value is "${userData.email}"".`
//    : 'Cookie has not been set. You can do so by adding "?action=set" to the URL.';

    return new Response(JSON.stringify(userData), {
        headers: { "content-type": "application/json" },
        }); 


//  return new Response(message);
};