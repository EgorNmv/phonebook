import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import * as path from "path";
import graphqlHTTP from "express-graphql";
import {buildSchemaSync} from "type-graphql";
import {RecipeResolver} from "./gql/resolvers/recipeResolver";
import {UserResolver} from "./gql/resolvers/userResolver";
import {GraphQLSchema} from "graphql";

dotenv.config();

const PORT: number = Number(process.env.SERVER_PORT) || 8080;
const app: express.Application = express();
const schema: GraphQLSchema = buildSchemaSync({
    resolvers: [RecipeResolver, UserResolver],
    emitSchemaFile: path.resolve(__dirname, "../src/gql", "schema.gql"),
});

app.get("/", (req: express.Request, res: express.Response): void => {
    res.send("Sorry, i'm in dev yet");
});

app.listen(PORT, (): void => {
    console.log(`Server started at http://localhost:${PORT}`);
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
        customFormatErrorFn: (error) => ({
            message: error.message,
            locations: error.locations,
            stack: error.stack ? error.stack.split("\n") : [],
            path: error.path,
        }),
    })
);
