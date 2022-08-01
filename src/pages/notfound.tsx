import './home.css'
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const handleOnClickButton = () => {
        navigate('/')
    }
    return (
        <Box>
            <div className="Notfound">
                <Box sx={{ p:6, border: '1px dashed grey', borderRadius:2 }}>
                    <Typography>ESTA PAGINA NO EXISTE</Typography>
                    <Button onClick={handleOnClickButton} sx={{marginTop:4}} variant="outlined">Regresar</Button>
                </Box>
            </div>
        </Box>
    );
};

export default NotFound;