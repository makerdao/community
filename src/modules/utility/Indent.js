/** @jsx jsx */
import { Box, jsx } from "theme-ui";

const Indent = ({pad, children, ...otherProps}) => (
	<Box sx={{pl: pad || '1rem'}}>
		{children}
	</Box>
);

export default Indent;
