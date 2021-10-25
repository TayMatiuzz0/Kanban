import { Wrap} from "./styled"
import React from "react"
import { LightenDarkenColor } from "../../../utils" 

const Box = React.forwardRef(({backgroundColor, borderColor, children, ...rest }) => {
    return(

            <Wrap backgroundColor={backgroundColor} borderColor={LightenDarkenColor(backgroundColor, -20)}>
                {children}
            </Wrap>
    )
});
export default Box;