import React from "react";
import {EditableRowProps} from "../../utils/types";
import {Form} from "antd";
import EditableContext from "../../context/EditableContext";

export const EditableRow: React.FC<EditableRowProps> = ({index, ...props}) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};