import React from "react";
import {QueryRenderer, graphql} from "react-relay";
import environment from "../Enviroment";
import {EditableTable} from "../components/EditableTable";

const EditableTableDataQuery = graphql`
    query EditableTableDataQuery {
        users{
            id,
            firstName,
            secondName,
            phone,
            cabinet,
            post,
            internalPhone
        }
    }
`;

const EditableTableData: React.FC = () => (
    <QueryRenderer
        environment={environment}
        query={EditableTableDataQuery}
        render={({error, props}: any) => {
            if (error) {
                return <div>Error: {error?.message}</div>
            } else if (props) {
                return <EditableTable data={props.users}/>
            }
            return <div>Loading</div>
        }}
        variables={{}}
    />
);

export default EditableTableData;