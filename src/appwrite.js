import { Client, Databases, ID, Query, TablesDB } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const METRICS_TABLE_ID = import.meta.env.VITE_APPWRITE_METRICS_TABLE_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

const table = new TablesDB(client);

export const updateSearchCount = async (searchTerm, movie) => {
    try {
        const results = await table.listRows({
            databaseId: DATABASE_ID,
            tableId: METRICS_TABLE_ID,
            queries: [
                Query.equal("searchTerm", searchTerm),
            ]
        });

        if (results.rows.length > 0) {
            const row = results.rows[0];
            await table.updateRow({
                databaseId: DATABASE_ID,
                tableId: METRICS_TABLE_ID,
                rowId: row.$id,
                data: {
                    count: row.count + 1
                }
            });
        } else {
            await table.createRow({
                databaseId: DATABASE_ID,
                tableId: METRICS_TABLE_ID,
                rowId: ID.unique(),
                data: {
                    searchTerm: searchTerm,
                    count: 1,
                    movieId: movie.id,
                    posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }
            });
        }
    } catch (error) {
        console.error("Error updating search count:", error);
    }
}
