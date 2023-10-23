import { ChangeEvent, SyntheticEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { GET_USER_QUERY, UPDATE_USER_MUTATION, User } from './user-graphql';
import UserForm from './user-form';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_USER_QUERY, {
        variables: {
            Id: id
        },
    });
    
    const [user, setUser] = useState<User>({ name: "", age: 0 });
    const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
        variables: {
            Id: id,
            input: {
                name: user?.name,
                age: user?.age,
            }
        },
        refetchQueries: ['GetAllUsers']
    });
    useMemo(() => {
        if (data?.user) {
            setUser(data?.user)
        }
    }, [data?.user]);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await updateUser();
        setUser({ name: "", age: 0 });
        navigate("/")
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Box>
            <UserForm heading="Edit a User" onSubmit={handleSubmit} user={user} handleChange={handleChange} />
        </Box >
    );
};

export default EditUser;