import { useSubscription } from "@apollo/client";
import { Box, Chip, Typography } from "@mui/material";
import { GET_MESSAGES, Message } from "./messages-graphql";
import { chatStyle } from "./pageStyle";

export const Messages = ({ user }: Message) => {
  const classes = chatStyle();
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }

  return (
    <>
      {data?.messages.map(({ id, user: messageUser, content }: Message) => (
        <Box
          className={classes?.messageBox}
          sx={{
            justifyContent: user === messageUser ? "flex-end" : "flex-start",
          }}
          key={id}
        >
          <Typography className={classes?.messageUserBox}>
            {messageUser.slice(0, 2).toUpperCase()}
          </Typography>
          <Chip
            className={classes?.messageContentBox}
            color={user === messageUser ? "primary" : "secondary"}
            label={content}
          />
        </Box>
      ))}
    </>
  );
};
