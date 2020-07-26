import React from 'react'
import {ThemeProvider} from 'styled-components'

const theme = {
    colors:{
        sinine: "#0099ff",
        kollane: "#ffcc00",
        helekollane: "#e8eecb"
    },
    fontSizes:{
        medium: "2rem",
        big:"3rem"
    }
}

const Theme = ({children})=>(
<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme