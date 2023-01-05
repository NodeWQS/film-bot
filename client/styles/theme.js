import { createTheme } from "@mui/material";
import { JetBrains_Mono, Roboto_Mono } from '@next/font/google';

const font = Roboto_Mono({ subsets: ['latin', 'cyrillic'] });
export const theme = createTheme({
    palette: {
        background: {
            default: '#E5E5E5'
        }
    },
    typography: {
        fontFamily: `${font.style.fontFamily}`,
        fontSize: 14,
        color: '#FFFFFF',
        fontWeightBold: 700
    }
});