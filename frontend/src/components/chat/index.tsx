import { useState } from "react";
import { Box, Button, Container, Paper, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { chatStyle } from "./pageStyle";
import { Messages } from "./messages";
import { Message, POST_MESSAGES } from "./messages-graphql";

const Chat = () => {
  const classes = chatStyle();
  const [message, setMessage] = useState<Message>({
    user: "kanha",
    content: "",
  });
  const [postMessage] = useMutation(POST_MESSAGES);
  const onSend = () => {
    if (message?.content && message?.content.length > 0) {
      postMessage({
        variables: message,
      });
    }
    setMessage({
      ...message,
      content: "",
    });
  };
  return (
    <Container sx={{ p: 3 }}>
      <Messages user={message?.user} />
      <Paper elevation={3} className={classes.messageChatBox}>
        <Box>
          <TextField
            hiddenLabel
            variant="outlined"
            label="User"
            name="user"
            value={message.user}
            onChange={(evt) =>
              setMessage({
                ...message,
                user: evt.target.value,
              })
            }
          />
        </Box>
        <Box>
          <TextField
            hiddenLabel
            variant="outlined"
            label="Message"
            placeholder="Message"
            value={message.content}
            name="content"
            onChange={(evt) =>
              setMessage({
                ...message,
                content: evt.target.value,
              })
            }
            onKeyUp={(evt) => {
              if (evt.keyCode === 13) {
                onSend();
              }
            }}
          />
        </Box>
        <Box>
          <Button onClick={onSend} className={classes?.messageSendButton}>
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Chat;
