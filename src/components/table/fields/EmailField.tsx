import React from 'react';
import StringField, {IStringFieldProps} from "./StringField";

export interface IEmailFieldProps extends IStringFieldProps {
    // Add email spicific props
}

function EmailField({data, ...rest}: IEmailFieldProps) {
    // Add email specific logic
    // e.g. validation

    return (
        <StringField data={data} {...rest}/>
    );
}

export default EmailField;