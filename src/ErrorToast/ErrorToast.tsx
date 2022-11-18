import React from "react";
import Alert from '@mui/material/Alert';

type Props = {
    id: number;
    msg?: string;
    onClose(id: number): void;
    className?: string;
};

export const ErrorToast: React.FC<Props> = ({id, msg, onClose, className}) => (
    <Alert variant="filled" severity="error" onClose={() => onClose(id)} className={className}>
        Something went wrong with {msg}
    </Alert>
);