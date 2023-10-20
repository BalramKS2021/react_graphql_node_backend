import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER_MUTATION, User } from './user-graphql';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState<User>({ name: "", age: 0 });
    const [createUser] = useMutation(ADD_USER_MUTATION, {
        variables: {
            input: {
                name: user?.name,
                age: user?.age,
            }
        },
        refetchQueries: ['GetUsers']
    });
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await createUser();
        setUser({ name: "", age: 0 });
        navigate("/")
    };

    return (
        <Box>
            <Typography variant="h3">Add a Post</Typography>
            <Stack
                component="form"
                sx={{
                    width: '25ch',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField id="name" name="name" label="Name" variant="outlined" value={user?.name} onChange={handleChange} />
                <TextField id="age" name="age" label="Age" variant="outlined" value={user?.age} onChange={handleChange} type="number" />
                <Button type="submit">Submit</Button>
            </Stack>
        </Box >
    );
};

export default AddUser;