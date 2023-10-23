import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { CREATE_USER_MUTATION, User } from './user-graphql';
import UserForm from './user-form';

const AddUser = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState<User>({ name: "", age: 0 });
    const [createUser] = useMutation(CREATE_USER_MUTATION, {
        variables: {
            input: {
                name: user?.name,
                age: user?.age,
            }
        },
        refetchQueries: ['GetAllUsers']
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
            <UserForm heading="Create a User" onSubmit={handleSubmit} user={user} handleChange={handleChange} />
        </Box >
    );
};

export default AddUser;