import { Form, Link, useLoaderData } from "@remix-run/react";
import { redirect, type LoaderArgs } from "@remix-run/node";
import axios from "axios";
import { getCookie } from "~/utils/get-cookie";
import { cookie } from "~/utils/cookie";

export async function loader({ request }: LoaderArgs): Promise<object> {
  if (!getCookie(request.headers.get('Cookie'), 'galactusCredentials')) {
      return redirect('/login', {
          statusText: 'You are not signed in, or your session has expired.'
      });
  }
    
  try {
      const response = await axios.post(
        'https://jh2jcgeo42rtmhlmmeirhadkla0zgnic.lambda-url.eu-central-1.on.aws/',
        '',
        {
          withCredentials: true,
          headers: { 'Cookie': request.headers.get("Cookie") }
        }
      );

      return {
        errors: null,
        results: response.data
      }
  } catch (error: any) {
    return {
      errors: error.response?.data || 'Unknown error occured!',
      results: null
    };
  }
}

export async function action() {
  return redirect('/login', {
    headers: {
      "Set-Cookie": await cookie.serialize('', {
        expires: new Date(0),
      }),
    },
  });
}

export default function Index() {
  const data = useLoaderData();

  return (
    <main>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <span className="navbar-text text-light">Galactus — Test Shape Visualizer</span>
          <Form method="post" className="d-flex">
            <button className="btn btn-ternary text-light" type="submit">Sign out</button>
          </Form>
        </div>
      </nav>
      { 
        data.errors ?
          <div className="alert alert-danger" role="alert">
            Error happened during server request: {data.errors}
          </div> :
          <>
            <p className="badge bg-secondary">
              My visualizations
            </p>
                        
            <ul className="list-group">
              {
                data?.results?.map((element: string) => (
                  <Link key={element} 
                    className="list-group-item list-group-item-action" 
                    to={`/details/${element}`}>
                    {element}
                  </Link>  
                ))
              }
            </ul>       
          </>
      }
    </main>
  );
}
