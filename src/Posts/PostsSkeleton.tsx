import React from "react";
import Stack from '@mui/material/Stack';
import SkeletonMUI from '@mui/material/Skeleton';

export const PostsSkeleton: React.FC = () => {
    return (
        <Stack spacing={1} className="Posts__skeleton">
            <SkeletonMUI variant="rounded" sx={{ height: 120 }} />
            <SkeletonMUI variant="rounded" sx={{ height: 120 }} />
            <SkeletonMUI variant="rounded" sx={{ height: 120 }} />
        </Stack>
    )
};