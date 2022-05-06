import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

export default function TextInputField() {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
                color: 'white',
            }}>
            <TextField label='Search for News' color='secondary' focused />
        </Box>
    );
}
