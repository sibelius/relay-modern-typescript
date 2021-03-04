import * as React from 'react';
import { graphql, createFragmentContainer, useLazyLoadQuery, useFragment } from 'react-relay';
import { createQueryRendererModern } from './relay';
import { Flex } from 'rebass';
import { alignItems, flexDirection, justifyContent, space } from 'styled-system';
import styled from 'styled-components';

import { UserList_query } from './__generated__/UserList_query.graphql';

const Card = styled.a`
  border-radius: 2px;
  display: flex;
  max-width: 265px;
  width: 200px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 #dfdfdf, 0 1px 5px 0 #dfdfdf;
  flex-direction: column;
  cursor: pointer;
  margin: 10px;
  ${space}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;

const UserList = () => {
  const response = useLazyLoadQuery<AppQuery>(
    graphql`
      query UserListQuery {
        ...UserList_query
      }
    `,
    { },
    {
      fetchPolicy: 'network-only',
    },
  );

  const query = useFragment<Post_post$key>(
    graphql`
      fragment UserList_query on Query {
        users(first: 10) @connection(key: "UserList_users", filters: []) {
          edges {
            node {
              id
              name
              email
            }
          }
        }
      }
    `,
    response,
  );

  const { users } = query;

  return (
    <Flex flexDirection='column'>
      {users.edges.map(({node}) => (
        <Card key={node.id}>
          <span>User: {node.name}</span>
          <span>Email: {node.name}</span>
        </Card>
      ))}
    </Flex>
  )
}

export default UserList;
