import { useLoaderData } from "@remix-run/react";
import { redirect, type LoaderArgs } from "@remix-run/node";
import { getCookie } from "~/utils/get-cookie";
import axios from "axios";

export async function loader({ request, params }: LoaderArgs): Promise<object> {
    if (!getCookie(request.headers.get('Cookie'), 'galactusCredentials')) {
        return redirect('/login', {
            statusText: 'You are not signed in, or your session has expired.'
        });
    }

    try {
        const response = await axios.post(
            `https://t766bh2wwhlbxwsoj3nedgcm340bnmgk.lambda-url.eu-central-1.on.aws/`,
            params.filename,
            {
                withCredentials: true,
                headers: { 'Cookie': request.headers.get("Cookie") || '' }
            }
        );

        return {
            errors: null,
            text: response.data,
            key: params.filename
        }
    } catch (error: any) {
        return {
            errors: error.response?.data || 'Unknown error occured!',
            text: null,
            key: params.filename
        };
    }
}

export default function DetailsRoute() {
    const data = useLoaderData();

    return (
        <>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Galactus — Test Shape Visualizer</a>
                </div>
            </nav>
            <p className="badge bg-secondary">Details page for {data?.key}</p>
            <div dangerouslySetInnerHTML={{__html: data?.text}}></div>
        </>
    );
}
