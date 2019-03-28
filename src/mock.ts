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
  keyMoment: Boolean!
}
`;

const commentaries = [{
  id: 1001,
  title: 'This is the second commentary',
  text: 'This is the first commentary This is the first commentary This is the first commentary This is the first commentary This is the first commentary This is the first commentary This is the first commentary This is the first commentary This is the first commentary This is the first commentary This is the first commentary',
  minute: 4,
  keyMoment: false,
}, {
  id: 1002,
  title: 'This is the second commentary',
  text: 'This is the second commentary This is the second commentary This is the second commentary',
  minute: 9,
  keyMoment: false,
}, {
  id: 1003,
  title: 'Yellow Card',
  text: 'This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary',
  minute: 12,
  keyMoment: true,
}, {
  id: 1004,
  title: 'This is the second commentary',
  text: 'This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary',
  minute: 17,
  keyMoment: false,
}, {
  id: 1005,
  title: 'This is the second commentary',
  text: 'This is the second commentary This is the second commentary This is the second commentary',
  minute: 19,
  keyMoment: false,
}, {
  id: 1006,
  title: 'Goal',
  text: 'This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary',
  minute: 22,
  keyMoment: true,
}, {
  id: 1007,
  title: 'This is the second commentary',
  text: 'This is the second commentary This is the second commentary This is the second commentary',
  minute: 28,
  keyMoment: false,
}, {
  id: 1008,
  title: 'This is the second commentary',
  text: 'This is the second commentary This is the second commentary This is the second commentary This is the second commentary',
  minute: 29,
  keyMoment: false,
}, {
  id: 1009,
  title: 'Save',
  text: 'This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary ',
  minute: 30,
  keyMoment: true,
}, {
  id: 1010,
  title: 'This is the second commentary',
  text: 'This is the second commentary This is the second commentary This is the second commentary',
  minute: 34,
  keyMoment: false,
}, {
  id: 1011,
  title: 'This is the second commentary',
  text: 'This is the second commentary This is the second commentary This is the second commentary',
  minute: 39,
  keyMoment: false,
}, {
  id: 1012,
  title: 'Red Card',
  text: 'This is the second commentary This is the second commentary This is the second commentary This is the second commentary This is the second commentary',
  minute: 40,
  keyMoment: true,
}, {
  id: 1013,
  title: 'This is the second commentary',
  text: 'This is the second commentary This is the second commentary This is the second commentary This is the second commentary',
  minute: 42,
  keyMoment: false,
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
