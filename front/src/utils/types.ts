export type User = {
    id: number;
    firstName: string;
    secondName: string;
    phone: number;
    cabinet: number;
    post?: string;
    internalPhone: number;
};

export type Column = {
    title: string,
    dataIndex: string|string[],
    width?: string,
    editable?: boolean,
    render?: (text: string, record: any) => any
}