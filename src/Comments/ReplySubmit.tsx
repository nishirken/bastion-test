import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

type SubmitProps = {
    onSubmit(input: string): void;
};

export const ReplySubmit: React.FC<SubmitProps> = ({onSubmit}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        onSubmit(value);
        setIsOpened(false);
    };

    return isOpened ? (
        <div className='ReplySubmit'>
            <Input value={value} onChange={(e) => setValue(e.target.value)} onBlur={() => setIsOpened(false)} />
            <Button onClick={handleSubmit}>Reply</Button>
        </div>
    ) : <Button onClick={() => setIsOpened(true)}>Reply</Button>
};