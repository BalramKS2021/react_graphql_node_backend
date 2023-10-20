import { useQuery } from '@apollo/client';
import { USER_QUERY, User } from './user-graphql';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { UserStyle } from './pageStyle';

const UserList = () => {
  const classes = UserStyle();
  const { loading, error, data } = useQuery(USER_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box>
      <Box className={classes.HeaderBox}>
        <Typography variant="h2">Users List</Typography>
        <Button href='/add-post'>Add Post</Button>
      </Box>
      <List>
        {data.users.map((user: User) => (
          <ListItem key={user._id}>{user.name}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserList;