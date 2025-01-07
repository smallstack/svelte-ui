import { text } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
	// robots.txt allow everything, follow every path
	return text(`User-agent: *
Disallow:`);
};
