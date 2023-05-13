import { redirect, type ActionArgs } from "@remix-run/node"; 
import { Form, useActionData, useNavigation } from "@remix-run/react";
import axios from "axios";
import { cookie } from "~/utils/cookie";

const streamToString = async (stream: NodeJS.ReadableStream): Promise<string> => {
    const chunks: Array<any> = [];
    for await (let chunk of stream) {
        chunks.push(chunk)
    }
    const buffer = Buffer.concat(chunks);
    return buffer.toString("utf-8")
}

export async function action({ request }: ActionArgs) {
    const params = await streamToString(request.body as unknown as NodeJS.ReadableStream);
    const searchParams = new URLSearchParams(params);
    const projectName = searchParams.get('projectName');
    const password = searchParams.get('password')

    try {
        const response = await axios.post(
            `https://zomtqtey67kx4jalnwhtmtjoju0hqmbj.lambda-url.eu-central-1.on.aws/`,
            JSON.stringify({ projectName, password }),
            { withCredentials: true }
        );
        
        if (response.data !== 'OK') {
            return {
                errorStatus: 'Unknown error response received from server!'
            };
        }

        return redirect('/', {
            headers: {
              'Set-Cookie': await cookie.serialize({
                'galactusCredentials': JSON.stringify({ projectName, password })
              }),
            },
        });
    } catch (error: any) {
        return {
            errorStatus: error.response?.data || 'Unknown error occured!'
        };
    }
}

export default function Login() {
    const data = useActionData();
    const transition = useNavigation();

    return (
        <main>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Galactus — Test Shape Visualizer</a>
                </div>
            </nav>

            <p className="badge bg-secondary">Welcome to the page!</p>

            <Form method="post">
                {data?.errorStatus && <div className="alert alert-danger" role="alert">
                    {data.errorStatus}
                </div>}
                <div className="input-group">
                    <div className="mb-3">
                        <label htmlFor="projectName" className="form-label">Project name</label>
                        <input type="text" className="form-control" id="projectName" name="projectName" required />
                    </div>
                </div>
                <div className="input-group">
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required />
                    </div>
                </div>
                <div>
                    <input type="submit" value="Submit" className="btn btn-primary" disabled={transition.state === "submitting"} />
                </div>
                <div>
                    {transition.state === "submitting" && <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>}
                </div>
            </Form>
        </main>
    );
}
