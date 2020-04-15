import React from "react";

export type User = {
    id: number;
    firstName: string;
    secondName: string;
    phone: number;
    cabinet: number;
    post?: string;
    internalPhone: number;
};

export type ColumnType = {
    title: string;
    dataIndex: string | string[];
    width?: string;
    editable?: boolean;
    render?: (text: string, record: any) => any;
}

export type EditableRowProps = {
    index: number;
}

export type EditableCellProps = {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof User;
    record: User;
    handleSave: (record: User) => void;
}

export type EditableTableProps = {
    data: User[]
}

export type AddingUserModalProps = {
    isVisible: boolean,
    onOk: (user: Omit<User, "id">) => void,
    onCancel: () => void
}

export type ConfigValidData = {
    propName: keyof Omit<User, "id">,
    required: boolean,
    maxValue?: number,
    minValue?: number,
};