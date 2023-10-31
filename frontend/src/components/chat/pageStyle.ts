import { makeStyles } from "@mui/styles";

export const chatStyle = makeStyles({
  messageBox: {
    display: "flex",
    paddingBottom: "1em",
  },
  messageUserBox: {
    marginRight: "0.5em",
    border: "2px solid #e5e6ea",
    borderRadius: 25,
    textAlign: "center",
    fontSize: "18pt",
    padding: 5,
  },
  messageContentBox: {
    padding: "1em",
    borderRadius: "1em",
    maxWidth: "60%",
    fontSize: "0.9rem",
  },
  messageChatBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px",
    position: "sticky",
  },
  messageSendButton: {
    backgroundColor: "#60a820",
    color: "white",
  },
});
