import React, { FocusEventHandler, useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { testIds } from '../App.testIds';

type SubmitProps = {
    onSubmit(input: string): void;
    commentId: number;
};

export const AddReply: React.FC<SubmitProps> = ({onSubmit, commentId}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const submitRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpened) {
            inputRef.current?.focus();
        }
    }, [isOpened]);

    const handleSubmit = () => {
        if (value) {
            onSubmit(value);
        }
        setIsOpened(false);
        setValue('');
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        if (e.relatedTarget !== submitRef.current) {
            setIsOpened(false);
        }
    };

    return isOpened ? (
        <div className='AddReply'>
            <Input value={value} inputRef={inputRef} onBlur={handleBlur} onChange={(e) => setValue(e.target.value)} data-test-id={testIds.commentReplyInput(commentId)} />
            <Button onClick={handleSubmit} ref={submitRef} data-test-id={testIds.commentReplySubmit(commentId)}>Reply</Button>
        </div>
    ) : <Button onClick={() => setIsOpened(true)} data-test-id={testIds.commentNewReply(commentId)}>Reply</Button>
};