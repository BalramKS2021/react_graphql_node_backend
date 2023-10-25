import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS_QUERY, USER_DELETE_QUERY, User } from "./user-graphql";
import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { UserStyle } from "./pageStyle";
import PermissionAlert from "../sub-components/AlertPermission";

const UserList = () => {
  const classes = UserStyle();
  const { loading, error, data } = useQuery(GET_ALL_USERS_QUERY);
  const [isDeleting, setIsDeleting] = useState(false);
  const [userId, setUserId] = useState<string>();

  const [deleteUser] = useMutation(USER_DELETE_QUERY, {
    variables: {
      Id: userId,
    },
    refetchQueries: ["GetAllUsers"],
  });

  const handleDeleting = (id?: string) => {
    setIsDeleting(true);
    setUserId(id);
  };

  const handleClose = () => {
    setIsDeleting(false);
  };

  const handleDelete = async () => {
    setIsDeleting(false);
    await deleteUser();
    setUserId("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box>
      <Box className={classes.HeaderBox}>
        <Typography variant="h2">Users List</Typography>
        <Button href="/user-create">Add User</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.users.map((user: User) => (
              <TableRow key={user._id}>
                <TableCell scope="row">{user.name}</TableCell>
                <TableCell scope="row">{user.age}</TableCell>
                <TableCell scope="row" align="center">
                  <ButtonGroup variant="text" aria-label="text button group">
                    <Button href={`/user-profile/${user._id}`}>
                      <Icon>visibility</Icon>
                    </Button>
                    <Button href={`/user-edit/${user._id}`} color="secondary">
                      <Icon>edit</Icon>
                    </Button>
                    <Button
                      onClick={() => handleDeleting(user._id)}
                      color="error"
                    >
                      <Icon>delete</Icon>
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {isDeleting && (
        <PermissionAlert
          open={isDeleting}
          onClose={handleClose}
          onSubmit={handleDelete}
          header="Delete User"
          message="Are you sure to delete this user?"
          loading={false}
        />
      )}
    </Box>
  );
};

export default UserList;
