import React, {useState} from "react";
import {Modal, Input, Card} from 'antd';
import {AddingUserModalProps, ConfigValidData, User} from "../utils/types";
import {WARNINGS} from "../utils/constants";

export const AddingUserModal: React.FC<AddingUserModalProps> = ({isVisible, onOk, onCancel}) => {
    const [firstName, setFirstName] = useState<string>("");
    const [secondName, setSecondName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [cabinet, setCabinet] = useState<string>("");
    const [post, setPost] = useState<string>("");
    const [internalPhone, setInternalPhone] = useState<string>("");
    const [warnings, setWarning] = useState<Partial<keyof Omit<User, "id">>[]>([]);

    const checkOnValidData = (value: string, config: ConfigValidData) => {
        let touchedValue = false;

        if (!value && config.required) {
            !warnings.includes(config.propName) && setWarning([...warnings, config.propName]);
            touchedValue = true;
        }

        if (config.maxValue && config.minValue) {
            if (Number(value) > config.maxValue || Number(value) < config.minValue) {
                !warnings.includes(config.propName) && setWarning([...warnings, config.propName]);
                touchedValue = true;
            }
        }

        if (warnings && !touchedValue) {
            setWarning(warnings.filter(item => (
                item !== config.propName
            )));
        }
    }

    return (
        <Modal
            title="Add new contact"
            visible={isVisible}
            onOk={() => onOk({
                firstName,
                secondName,
                phone: Number(phone),
                cabinet: Number(cabinet),
                post,
                internalPhone: Number(internalPhone)
            })}
            onCancel={onCancel}
        >
            {warnings.length > 0 && (
                <Card
                    title="Please enter valid user data"
                    size="small"
                    headStyle={{background: "#1890ff"}}
                >
                    {warnings.map((item) =>
                        (<p>{WARNINGS[item]}</p>))
                    }
                </Card>)}
            <p>First name</p>
            <Input
                placeholder="First Name"
                required={true}
                value={firstName}
                onChange={e => {
                    checkOnValidData(e.currentTarget.value, {
                            propName: "firstName",
                            required: true
                        }
                    );
                    setFirstName(e.currentTarget.value);
                }}
            />
            <p>Second name</p>
            <Input
                placeholder="Second Name"
                required={true}
                value={secondName}
                onChange={e => {
                    checkOnValidData(e.currentTarget.value, {
                            propName: "secondName",
                            required: true
                        }
                    );
                    setSecondName(e.currentTarget.value);
                }}
            />
            <p>Phone</p>
            <Input
                placeholder="Phone"
                required={true}
                value={phone}
                type={"number"}
                onChange={e => {
                    if (e.currentTarget.value.length <= 11) {
                        checkOnValidData(e.currentTarget.value, {
                                propName: "phone",
                                required: true,
                                maxValue: 89999999999,
                                minValue: 80000000000
                            }
                        );
                        setPhone(e.currentTarget.value);
                    }
                }}
            />
            <p>Cabinet</p>
            <Input
                placeholder="Cabinet"
                required={true}
                type={"number"}
                value={cabinet}
                onChange={e => {
                    if (e.currentTarget.value.length <= 3) {
                        checkOnValidData(e.currentTarget.value, {
                                propName: "cabinet",
                                required: true,
                                maxValue: 500,
                                minValue: 1
                            }
                        );
                        setCabinet(e.target.value);
                    }
                }}
            />
            <p>Post</p>
            <Input
                placeholder="Post"
                required={true}
                maxLength={30}
                minLength={5}
                value={post}
                onChange={e => setPost(e.target.value)}
            />
            <p>Internal phone</p>
            <Input
                placeholder="Internal phone"
                required={true}
                type={"number"}
                value={internalPhone}
                onChange={e => {
                    if (e.currentTarget.value.length <= 4) {
                        checkOnValidData(e.currentTarget.value, {
                                propName: "internalPhone",
                                required: true,
                                maxValue: 1000,
                                minValue: 100
                            }
                        );
                        setInternalPhone(e.currentTarget.value);
                    }
                }}
            />
        </Modal>
    );
};