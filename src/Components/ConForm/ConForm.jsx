import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { z } from 'zod';
import axios from 'axios';
import { dismiss, error, loading as showLoading, success } from '../../utils/Toastify';

function ConForm() {
    const [subject, setSubject] = useState("");
    const [object, setObject] = useState("");
    const [isRobot, setIsRobot] = useState(false);

    const validateForm = z.object({
        subject: z.string().min(1, { message: "Enter the subject" }),
        object: z.string().min(1, { message: "Enter the object" })
    });

    const handleSubmit = () => {

        const loadingToast = showLoading("Sending email...");

        const data = {
            subject: subject,
            object: object
        };

        const result = validateForm.safeParse(data);
        if (result.success && isRobot) {
            axios.post('http://localhost:8080/api/auth/sendemail', data)
                .then(() => {
                    success("Send message successful!");
                    resetAll();
                    dismiss(loadingToast);
                })
                .catch(() => {
                    dismiss(loadingToast);
                    error("Server error")
                });

        } else {
            dismiss(loadingToast);
            const formattedError = result.error.format();
            if (formattedError.object?._errors) {
                error(String(formattedError.object?._errors));
            } else if (formattedError.subject?._errors) {
                error(String(formattedError.subject?._errors));
            } else{
                error("Make sure click on I'm not robot...");
            }
        }
    };

    const resetAll = () => {
        setSubject("");
        setObject("");
    }

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
                    value={object}
                    onChange={(e) => setObject(e.target.value)}
                />
                <br /><br /><br />
                <TextField
                    label="Subject"
                    type='text'
                    fullWidth
                    multiline
                    value={subject}
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
                /><br />
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
