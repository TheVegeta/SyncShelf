"use client";

import { Provider } from "@/components/ui/provider";
import { GOOGLE_CLIENT_ID } from "@/constant";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { FC, ReactNode } from "react";

const client = new ApolloClient({
  link: new HttpLink({ uri: "/api/graphql" }),
  cache: new InMemoryCache(),
});

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <Provider>{children}</Provider>
        </GoogleOAuthProvider>
      </ApolloProvider>
    </>
  );
};

export default AppProvider;
