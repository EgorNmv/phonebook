import React, {useContext, useState, useEffect, useRef} from 'react';
import {Table, Input, Button, Popconfirm, Form, Modal} from 'antd';
import {ColumnType, EditableCellProps, EditableRowProps, EditableTableProps, User} from "../utils/types";
import AddUserMutation from "../mutations/AddUserMutation";
import DeleteUserMutation from "../mutations/DeleteUserMutation";
import UpdateUserMutation from "../mutations/UpdateUserMutation";
import {AddingUserModal} from "./AddingUserModal";
import {WARNINGS} from "../utils/constants";

const EditableContext = React.createContext<any>(null);

const EditableRow: React.FC<EditableRowProps> = ({index, ...props}) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell: React.FC<EditableCellProps> = (
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

export const EditableTable: React.FC<EditableTableProps> = ({data}) => {

    const dataColumns: ColumnType[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (text => <strong>{text}</strong>)
        },
        {
            title: 'FIRSTNAME',
            dataIndex: "firstName",
            width: '30%',
            editable: true
        },
        {
            title: 'SECONDNAME',
            dataIndex: "secondName",
            width: '30%',
            editable: true,
        },
        {
            title: 'PHONE',
            dataIndex: 'phone',
            editable: true
        },
        {
            title: 'CABINET',
            dataIndex: 'cabinet',
            editable: true
        },
        {
            title: 'POST',
            dataIndex: 'post',
            editable: true
        },
        {
            title: 'OPERATION',
            dataIndex: 'operation',
            render: (text: string, record: User) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                        <a href="/#">Delete</a>
                    </Popconfirm>
                ) : null,
        },
    ];
    const [dataSource, setDataSource] = useState<User[]>(data);
    const [count, setCount] = useState<number>(data.length);
    const [isVisibleWarningModal, setIsVisibleWarningModal] = useState<boolean>(false);
    const [isVisibleAddingUserModal, setIsVisibleAddingUserModal] = useState<boolean>(false);
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = dataColumns.map(col => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record: any) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: handleSave,
            }),
        };
    });

    const handleDelete = (id: number) => {
        DeleteUserMutation(id, () => {
            setDataSource(prevState => prevState.filter(item => item.id !== id));
        });
    };

    const handleAdd = (user: Partial<User>) => {
        setIsVisibleAddingUserModal(false);
        AddUserMutation(user, (userId: number) => {
            user.id = userId;
            setDataSource(prevState => [...prevState, user] as User[]);
            setCount(prevState => prevState + 1);
        });
    };

    const handleSave = (row: User) => {
        const {isValid, isIdentical} = isValidChanges(row);

        if (isValid && !isIdentical) {
            UpdateUserMutation(row, (user: User) => {
                const newData = [...dataSource];
                const index = newData.findIndex(item => user.id === item.id);
                const item = newData[index];
                newData.splice(index, 1, {...item, ...user});
                setDataSource(newData);
            });
        } else if (!isValid && !isIdentical) {
            setIsVisibleWarningModal(true);
        }
    };

    const isValidChanges = (user: User): { isIdentical: boolean, isValid: boolean } => {
        const detectedUser: User | undefined = data.find(userInList => userInList.id === user.id);
        let isIdentical = false;

        if (detectedUser) {
            try {
                isIdentical = JSON.stringify(user) === JSON.stringify(detectedUser);
            } catch (e) {
                console.error(e);
            }
        }
        return {
            isIdentical,
            isValid: !!(
                Number(user.phone) > 80000000000 &&
                Number(user.phone) < 89999999999 &&
                Number(user.cabinet) > 1 &&
                Number(user.cabinet) < 500 &&
                user.post &&
                user.post?.length > 5 &&
                user.post?.length < 30 &&
                Number(user.internalPhone) > 100 &&
                Number(user.internalPhone) < 1000
            )
        }
    };

    return (
        <div>
            <div className="table-total-contact-block">
                <span>Total contacts: {count}</span>
            </div>
            <Modal title="Warning!"
                   visible={isVisibleWarningModal}
                   onOk={() => setIsVisibleWarningModal(false)}
                   onCancel={() => setIsVisibleWarningModal(false)}

            >
                <p>{WARNINGS.phone}</p>
                <p>{WARNINGS.cabinet}</p>
                <p>{WARNINGS.post}</p>
                <p>{WARNINGS.internalPhone}</p>
            </Modal>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                rowKey={"id"}
                dataSource={dataSource}
                columns={columns}
            />
            <AddingUserModal
                isVisible={isVisibleAddingUserModal}
                onOk={handleAdd}
                onCancel={() => setIsVisibleAddingUserModal(false)}/>
            <Button
                onClick={() => setIsVisibleAddingUserModal(true)}
                type="primary"
                className="add-contact-button"
            >
                Add a contact
            </Button>
        </div>
    );
};