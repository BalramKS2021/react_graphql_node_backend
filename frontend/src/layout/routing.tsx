import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import UserList from "../components/users"
import AddUser from "../components/users/user-add"

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
        </Routes>
    )
}

export default Routing
