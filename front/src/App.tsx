import React from "react";
import EditableTableData from "./queries/EditableTableData";
import {PageHeader, Layout} from "antd";

const {Header, Content, Footer} = Layout;

function App() {
    return <Layout className="layout">
        <Header>
            <PageHeader
                className="site-page-header"
                title="PHONEBOOK"
                subTitle="Manage your contacts easy"
            />
        </Header>
        <Content>
            <EditableTableData/>
        </Content>
        <Footer>Phone book ©2020</Footer>
    </Layout>;
}

export default App;
