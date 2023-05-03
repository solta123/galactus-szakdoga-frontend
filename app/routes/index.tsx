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
                headers: { 'Cookie': request.headers.get("Cookie") || '' }
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
   
    // login lambda TODO: allow-origin felvenni a github pages domain-t majdan, vagy *-ra állítani

    return (
        <main>
            <h1>
                Galactus — Test Shape Visualizer
            </h1>
            <div>
                <Form method="post">
                    <button type="submit">Sign out</button>
                </Form>
            </div>

            { 
                data.errors ?
                    <div>
                        Error happened during server request: {data.errors}
                    </div> :
                    <>
                        <p>
                            My visualizations:
                        </p>
                        
                        <ul>
                            {
                                data?.results?.map((element: string) => (
                                    <li key={element}>
                                        <Link to={`/details/${element}`}>{element}</Link>
                                    </li>
                                ))
                            }
                        </ul>       
                    </>
            }
        </main>
    );
}
