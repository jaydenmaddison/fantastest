import * as React from 'react';
import { FlatList, Text } from 'react-native';

import graphqlTag from 'graphql-tag';
import { Query } from 'react-apollo';

const QUERY_COMMENTARIES = graphqlTag`
query queryCommentaries {
  commentaries {
    id
    text
    minute
    title
  }
}
`;

interface Data {
  posts: {
    text: string;
    id: number;
  }[];
}

class QueryCommentaries extends Query<Data> {}

const CommentaryList = () => (
  <QueryCommentaries query={QUERY_COMMENTARIES}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error:{error}</Text>;
      if (!data) return <Text>No Data</Text>;
      return (
        <FlatList
          data={data.commentaries}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Text>{item.text}{item.minute}{item.title}</Text>}
        />
      );
    }}
  </QueryCommentaries>
);

export default CommentaryList;
