import { useQuery } from '@apollo/client';
import { GET_USER_QUERY } from './user-graphql';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { UserStyle } from './pageStyle';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const classes = UserStyle();
    const { loading, error, data } = useQuery(GET_USER_QUERY, {
        variables: {
            Id: id
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Box>
            <Box className={classes.HeaderBox}>
                <Typography variant="h2">User Detail</Typography>
                <Button onClick={() => navigate(-1)}>Back</Button>
            </Box>
            <List>
                {data.user && (
                    <ListItem key={data.user._id}>
                        <ListItemText primary={data.user.name} />
                        <ListItemText primary={data.user.age} />
                    </ListItem>
                )}
            </List>
        </Box>
    );
};

export default UserDetail;