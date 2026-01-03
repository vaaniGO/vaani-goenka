import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "3ntnvjk8",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});