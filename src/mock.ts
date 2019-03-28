import { SchemaLink } from 'apollo-link-schema';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Query {
    commentaries: [Commentary]
}
type Commentary {
  id: ID!,
  title: String!,
  text: String!,
  minute: Int!
}
`;

const commentaries = [{
  id: 1001,
  title: 'This is the second commentary',
  text: 'This is the first commentary',
  minute: 12
}, {
  id: 1002,
  title: 'This is the second commentary',
  text: 'This is the second commentary',
  minute: 17
}];

const mocks = {
  Query: () => ({
    commentaries: () => commentaries,
  }),
};

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ mocks, schema });

export const mockedLink = new SchemaLink({ schema });

export default null;
