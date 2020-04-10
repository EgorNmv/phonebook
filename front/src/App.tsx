import React from "react";
import {EditableTable} from "./components/EditableTable";
import {TestComponent} from "./components/TestComponent";
import UserList from "./components/UserList";
import UserListPage from "./components/UserListPage";

function App() {
    return <div>
        <UserListPage/>
        <TestComponent/>
        <UserList/>
        <EditableTable/>
    </div>;
}

export default App;
