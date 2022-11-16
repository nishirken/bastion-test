import React, { useEffect, useRef } from 'react';
import { CommentTag } from '../interfaces';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AutoComplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import { testIds } from '../App.testIds';

type AddTagProps = {
    onSubmit(newTagId: number): void;
    tagSuggests: CommentTag[];
    commentId: number;
};

export const AddTag: React.FC<AddTagProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (suggestId: number | undefined) => {
        setIsOpened(false);
        suggestId && props.onSubmit(suggestId);
    };
    const options = props.tagSuggests.map(({name, id}) => ({
        value: id,
        label: name,
    }));

    useEffect(() => {
        if (isOpened) {
            inputRef.current?.focus();
        }
    }, [isOpened]);

    return isOpened ? (
        <AutoComplete
            disablePortal
            options={options}
            sx={{ width: 300 }}
            open={isOpened}
            onBlur={() => setIsOpened(false)}
            renderOption={(props, option) => <ListItem {...props} data-test-id={testIds.addTagSuggest(option.value)} >{option.label}</ListItem>}
            renderInput={(params) => <TextField inputRef={inputRef} data-test-id={testIds.addTagInput(props.commentId)} {...params} label="New tag" />}
            onChange={(_, option) => handleChange(option?.value)}
            onClose={() => setIsOpened(false)}
        />
    ) : <Button data-test-id={testIds.addTag(props.commentId)} onClick={() => setIsOpened(true)}>Add tag</Button>
};