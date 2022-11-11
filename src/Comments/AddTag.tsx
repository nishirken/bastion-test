import React from 'react';
import { CommentTag } from '../interfaces';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AutoComplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { testIds } from '../App.testIds';

type AddTagProps = {
    onSubmit(newTagId: number): void;
    tagSuggests: CommentTag[];
    commentId: number;
};

export const AddTag: React.FC<AddTagProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const handleChange = (suggestId: number | undefined) => {
        setIsOpened(false);
        suggestId && props.onSubmit(suggestId);
    };
    const options = props.tagSuggests.map(({name, id}) => ({
        value: id,
        label: name,
    }));

    return isOpened ? (
        <AutoComplete
            disablePortal
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="New tag" />}
            onChange={(_, option) => handleChange(option?.value)}
            onClose={() => setIsOpened(false)}
            data-test-id={testIds.addTagInput(props.commentId)}
        />
    ) : <Button onClick={() => setIsOpened(true)}>Add tag</Button>
};