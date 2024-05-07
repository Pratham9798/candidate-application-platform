import React from 'react';
import { Grid } from '@material-ui/core';

const JobListings = ({ jobListings }) => {
    return (
        <Grid container spacing={2}>
            {jobListings.map((job) => (
                <Grid key={job.id} item xs={12} sm={6} md={4}>
                    {/* Render Job Card component */}
                </Grid>
            ))}
        </Grid>
    );
};

export default JobListings;
