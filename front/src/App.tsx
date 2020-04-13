import React from "react";
import EditableTableData from "./queries/EditableTableData";
import {PageHeader, Layout} from "antd";

const {Header, Content, Footer} = Layout;

// import UserListPage from "./components/UserListPage";
// import {EditableTable} from "./components/EditableTable";
// import TestComponent from "./components/TestComponent";

function App() {
    return <Layout className="layout">
        <Header style={{background: "white"}}>
            <PageHeader
                className="site-page-header"
                title="PHONEBOOK"
                subTitle="Manage your contacts easy"
            />
        </Header>
        <Content style={{padding: '0 50px'}}>
            {/*<UserListPage/>*/}
            <EditableTableData/>
            {/*<TestComponent/>*/}
        </Content>
        <Footer style={{textAlign: 'center'}}>Phone book ©2020</Footer>
    </Layout>;
}

export default App;
