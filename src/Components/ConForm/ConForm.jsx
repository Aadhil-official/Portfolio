import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { z } from 'zod';
import axios from 'axios';
import { error, success } from '../../utils/Toastify';


function ConForm() {
    const [subject, setSubject] = useState("");
    const [object, setObject] = useState("");
    const [isRobot, setIsRobot] = useState(false);

    const validateForm = z.object({
        subject: z.string().min(1, { message: "Enter the subject" }),
        object: z.string().min(1, { message: "Enter the subject" })
    });

    const handleSubmit = () => {

        const data = {
            subject: subject,
            object: object
        };

        const result = validateForm.safeParse(data);
        if (result.success && isRobot) {
            axios.post('http://localhost:8080/api/auth/sendemail', data)
                .then(() => {
                    success('Login successful!')
                })
                .catch(() => error("Server error"));

        } else {
            const formattedError = result.error.format();
            if (formattedError.subject?._errors) {
                error(String(formattedError.subject?._errors));
            } else if (formattedError.object?._errors) {
                error(String(formattedError.object?._errors));
            }
        }
    };

    return (
        <>
            <Box
                component='form'
                sx={{
                    '& .MuiInputBase-root': { borderRadius: '30px' }
                }}
                noValidate
                autoComplete='off'
            >
                <br /><br />
                <TextField
                    label="Object"
                    type='text'
                    fullWidth
                    onChange={(e) => setObject(e.target.value)}
                />
                <br /><br /><br />
                <TextField
                    label="Subject"
                    type='text'
                    fullWidth
                    multiline
                    rows={7}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <br /><br /><br />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isRobot}
                            onChange={(e) => setIsRobot(e.target.checked)}
                            color="primary"
                            size='large'
                        />
                    }
                    label={<Typography variant='h5'>I'm not a robot</Typography>}
                /><br/>
                <Button variant='contained' onClick={handleSubmit} size='large' sx={{
                    width: '30%',
                    backgroundColor: 'rgb(71, 136, 158)',
                    '&:hover': {
                        backgroundColor: 'rgba(71, 136, 158, 0.8)', // Adjust the hover color as needed
                    }
                }}>
                    <Typography variant='h6'>Send</Typography>
                </Button><br /><br />
            </Box>
        </>
    );
}

export default ConForm;
