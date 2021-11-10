import { createTheme } from "@mui/material/styles";

export default function DarkTheme(darkState) {
    const palletType = darkState ? "dark" : "light";
    const backgroundColor = darkState ? "#0A1928" : "#fff";
    const textColor=!darkState? "#0A1928" : "#fff";
    return createTheme({
        palette: {
            mode: palletType,
            primary: {
                main: textColor,
                textColor: textColor
            },
            secondary: {
                main: '#f44336',
            },
            background: {
                default: backgroundColor,
                paper: backgroundColor
            },
            text:{
                primary: textColor,
            }
        }
    });
}