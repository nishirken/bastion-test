import React from "react";
import Stack from '@mui/material/Stack';
import SkeletonMUI from '@mui/material/Skeleton';

export const CommentsSkeleton: React.FC = () => {
    return (
        <Stack spacing={1} className="Comments__skeleton">
            <SkeletonMUI variant="rounded" sx={{ height: 300 }} />
            <SkeletonMUI variant="rounded" sx={{ height: 150 }} />
        </Stack>
    )
};