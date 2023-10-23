import { ChangeEvent, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { User } from './user-graphql';
import { UserStyle } from './pageStyle';

interface UserProps {
    heading: string;
    onSubmit: (e: SyntheticEvent) => void;
    user: User;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const UserForm = ({ heading, onSubmit, user, handleChange }: UserProps) => {
    const navigate = useNavigate();
    const classes = UserStyle();

    return (
        <Box>
            <Box className={classes.HeaderBox}>
                <Typography variant="h3">{heading}</Typography>
                <Button onClick={() => navigate(-1)}>Back</Button>
            </Box>
            <Stack
                component="form"
                sx={{
                    width: '25ch',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
                onSubmit={onSubmit}
                method="POST"
            >
                <TextField id="name" name="name" label="Name" variant="outlined" value={user?.name} onChange={handleChange} />
                <TextField id="age" name="age" label="Age" variant="outlined" value={user?.age} onChange={handleChange} type="number" />
                <Button type="submit">Submit</Button>
            </Stack>
        </Box >
    );
};

export default UserForm;