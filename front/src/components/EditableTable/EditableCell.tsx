import React, {useContext, useEffect, useRef, useState} from "react";
import {EditableCellProps} from "../../utils/types";
import {Form, Input} from "antd";
import EditableContext from "../../context/EditableContext";

export const EditableCell: React.FC<EditableCellProps> = (
    {
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }
) => {
    const [editing, setEditing] = useState<boolean>(false);
    const inputRef = useRef<Input>(null);
    const form = useContext(EditableContext);
    let childNode = children;

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({...record, ...values});
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    useEffect(() => {
        if (editing) {
            if (inputRef && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [editing]);

    if (editable) {
        childNode = editing ? (
            <Form.Item
                className="editable-cell-form-item"
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save}/>
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};