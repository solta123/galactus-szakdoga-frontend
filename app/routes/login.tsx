import { redirect, type ActionArgs } from "@remix-run/node"; 
import { Form, useActionData, useTransition } from "@remix-run/react";
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
        console.log(response.data)

        if (response.data !== 'OK') {
            return {
                errorStatus: 'Unknown error response received from server!'
            };
        }

        return redirect("/", {
            headers: {
              "Set-Cookie": await cookie.serialize({
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
    const transition = useTransition();

    return (
        <main>
            <h1>
                Galactus — Test Shape Visualizer
            </h1>
            <p>
                Welcome to the page!
            </p>

            <Form method="post">
                <div>
                    <label htmlFor="projectName">Project name:</label>
                    <input type="text" id="projectName" name="projectName" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <input type="submit" value="Submit" disabled={transition.state === "submitting"} />
                    {transition.state === "submitting" && <span>Signing in...</span>}
                </div>
                { data?.errorStatus && <div style={{ color: 'red' }}>{data.errorStatus}</div> }
            </Form>
        </main>
    );
}
