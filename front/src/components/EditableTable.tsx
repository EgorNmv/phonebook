import React, {useContext, useState, useEffect, useRef} from 'react';
import {Table, Input, Button, Popconfirm, Form} from 'antd';
import {Column, User} from "../utils/types";

const EditableContext = React.createContext(null as any);

const EditableRow = ({index, ...props}: any) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = (
    {
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }: any
) => {
    const [editing, setEditing] = useState<boolean>(false);
    const inputRef = useRef<Input>(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            if (inputRef && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [editing]);

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

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
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
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

export const EditableTable: React.FC<{ data: User[] }> = ({data}) => {

    const dataColumns: Column[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (text => <strong>{text}</strong>)
        },
        {
            title: 'NAME',
            dataIndex: ["firstName", "secondName"],
            width: '30%',
            editable: true,
            render: ((text, record) => `${record.firstName} ${record.secondName}`)
        },
        {
            title: 'PHONE',
            dataIndex: 'phone',
        },
        {
            title: 'CABINET',
            dataIndex: 'cabinet',
        },
        {
            title: 'POST',
            dataIndex: 'post'
        },
        {
            title: 'OPERATION',
            dataIndex: 'operation',
            render: (text: string, record: any) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,
        },
    ];
    const [dataSource, setDataSource] = useState<User[]>(data);
    const [count, setCount] = useState<number>(data.length);

    const handleDelete = (id: number) => {
        setDataSource(prevState => prevState.filter(item => item.id !== id));
    };

    const handleAdd = () => {
        const newData = {
            id: dataSource.length,
            firstName: `Name ${dataSource.length}`,
            secondName: `Surname ${dataSource.length}`,
            phone: "88005553535",
            cabinet: "229",
            internalPhone: "00-00"
        };
        setDataSource(prevState => [...prevState, newData] as User[]);
        setCount(prevState => prevState + 1);
    };

    const handleSave = (row: any) => {
        const newData = [...dataSource];
        const index = newData.findIndex(item => row.key === item.id);
        const item = newData[index];
        newData.splice(index, 1, {...item, ...row});
        setDataSource(newData);
    };

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

    return (
        <div>
            <div>Total contacts: {count}</div>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
            />
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Add a row
            </Button>
        </div>
    );
};