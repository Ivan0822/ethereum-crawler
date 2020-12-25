import { background, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            body: {
                width: "100vw",
                background: "primary.900",
                color: "black",
                fontFamily: "Monserrat, sans-serif",
            }
        }
    },
    colors: {
        primary: {
            100: "#F5F5F5",
            200: "#203354",
            900: "#152238"
        }
    }
})

export default theme