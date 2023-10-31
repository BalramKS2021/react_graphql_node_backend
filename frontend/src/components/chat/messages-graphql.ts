import { gql } from "@apollo/client";

export interface Message {
  id?: string;
  user: string;
  content?: string;
}

export const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      user
      content
    }
  }
`;

export const POST_MESSAGES = gql`
  mutation ($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;
