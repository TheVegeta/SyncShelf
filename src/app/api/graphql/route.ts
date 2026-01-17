import "reflect-metadata";

import { initialize } from "@/data-source";
import { HelloResolver } from "@/resolvers/hello";
import { createYoga } from "graphql-yoga";
import { buildSchemaSync } from "type-graphql";

interface NextContext {
  params: Promise<Record<string, string>>;
}

(async () => {
  await initialize();
})();

const { handleRequest } = createYoga<NextContext>({
  schema: buildSchemaSync({
    resolvers: [HelloResolver],
    validate: false,
  }),
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
  cors: {
    origin: ["*"],
  },
});

export {
  handleRequest as GET,
  handleRequest as OPTIONS,
  handleRequest as POST,
};
