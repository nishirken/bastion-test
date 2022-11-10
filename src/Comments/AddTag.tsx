import React from 'react';
import {CommentTag} from '../interfaces';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AutoComplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

type AddTagProps = {
    onSubmit(newTagId: number): void;
    tagSuggests: CommentTag[];
};

export const AddTag: React.FC<AddTagProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const handleChange = (suggest: CommentTag | null) => {
        setIsOpened(false);
        suggest && props.onSubmit(suggest.id);
    };

    return isOpened ? (
        <AutoComplete
            disablePortal
            options={props.tagSuggests}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="New tag" />}
            onChange={(_, value) => handleChange(value)}
            onClose={() => setIsOpened(false)}
        />
    ) : <Button onClick={() => setIsOpened(true)}>Add tag</Button>
};