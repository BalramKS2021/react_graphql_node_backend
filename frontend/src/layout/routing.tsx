import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import UserList from "../components/users"
import AddUser from "../components/users/user-add"
import UserDetail from "../components/users/user-profile"

const Routing = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<>...</>}>
                        <UserList />
                    </Suspense>
                }
            />
            <Route
                path="/add-post"
                element={
                    <Suspense fallback={<>...</>}>
                        <AddUser />
                    </Suspense>
                }
            />
            <Route
                path="/user-profile/:id"
                element={
                    <Suspense fallback={<>...</>}>
                        <UserDetail />
                    </Suspense>
                }
            />
        </Routes>
    )
}

export default Routing
