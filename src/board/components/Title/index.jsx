import { Titlewrapper } from "./styled"
import React from "react"

const Title = React.forwardRef(({ label, ...rest }) => {
    return(
        <Titlewrapper>{label}</Titlewrapper>
    )
});
export default Title;