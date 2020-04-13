import React, {useState} from "react";
import {Modal, Input} from 'antd';

type AddingUserModalProps = {
    isVisible: boolean,
    onOk: () => void,
    onCancel: () => void
}


export const AddingUserModal: React.FC<AddingUserModalProps> = ({isVisible, onOk, onCancel}) => {
    const [firstName, setFirstName] = useState<string>("");
    const [secondName, setSecondName] = useState<string>("");
    const [phone, setPhone] = useState<number>(80000000000);
    const [cabinet, setCabinet] = useState<number>(100);
    const [post, setPost] = useState<string>("");

    return (<Modal
        title="Add new contact"
        visible={isVisible}
        onOk={onOk}
        onCancel={onCancel}
    >
        <p>First name</p>
        <Input placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
        <p>Second name</p>
        <Input placeholder="Second Name" value={secondName} onChange={e => setSecondName(e.target.value)}/>
        <p>Phone</p>
        <Input placeholder="Phone" value={phone} onChange={e => setPhone(Number(e.target.value))}/>
        <p>Cabinet</p>
        <Input placeholder="Cabinet" value={cabinet} onChange={e => setCabinet(Number(e.target.value))}/>
        <p>Post</p>
        <Input placeholder="Post" value={post} onChange={e => setPost(e.target.value)}/>
    </Modal>);
};