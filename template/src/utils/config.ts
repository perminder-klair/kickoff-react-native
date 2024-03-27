type config = {
  appName: string;
  graphqlUri: string;
  isDev: boolean;
  env: string;
};

const config: config = {
  appName: 'my-app',
  graphqlUri: process.env.GRAPHQL_API || 'http://localhost:4000/graphql',
  isDev: process.env.NODE_ENV === 'development',
  env: process.env.NODE_ENV || 'development',
};

export default config;
