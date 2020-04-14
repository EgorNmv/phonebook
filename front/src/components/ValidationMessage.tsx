import React, {useEffect, useState} from "react";
import {Card} from 'antd';
import {User} from "../utils/types";

type ValidationMessageProps = {
    config: {
        propName: keyof User,
        required: boolean,
        maxValue?: number,
        minValue?: number,
    };
    value: string,
};

export const ValidationMessage: React.FC<ValidationMessageProps> = ({value, config}) => {
    const [warnings, setWarnings] = useState<Partial<Omit<User, "id">>>({});

    if (config.required && !value) {
        setWarnings(config.propName as any);
    }

    if (config.maxValue && config.minValue) {
        const numberValue = Number(value);

        if (numberValue > config.maxValue || numberValue < config.minValue) {
            setWarnings(config.propName as any);
        }
    }

    const isValid = Object.keys(warnings).length <= 0;

    useEffect(() => {
        console.info(warnings);
    }, []);

    return <>{
        !isValid ?
            (<Card
                title="Enter valid user data"
                size="small"
            >
                {warnings.firstName ? <p>{warnings.firstName}</p> : null}
                {warnings.secondName ? <p>{warnings.secondName}</p> : null}
                {warnings.post ? <p>{warnings.post}</p> : null}
                {warnings.phone ? <p>{warnings.phone}</p> : null}
                {warnings.cabinet ? <p>{warnings.cabinet}</p> : null}
                {warnings.internalPhone ? <p>{warnings.internalPhone}</p> : null}
            </Card>) :
            null}</>
};