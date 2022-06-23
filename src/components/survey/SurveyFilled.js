import * as React from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

export function SurveyFilled() {
    
    return(
        <div>
            <Container sx={{ my: 10 }}>
                <Typography variant="h4" gutterBottom>
                    Dziękujemy serdecznie za wypełnienie ankiety!
                </Typography>
            </Container>
        </div>
    )
}