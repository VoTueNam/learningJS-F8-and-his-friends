import PropTypes from "prop-types";
// material
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
    sx: PropTypes.object,
};

export default function Logo({ sx }) {
    return (
        //<img src="/static/logo.svg"></img>
        <Box
            component="img"
            src="/static/logo.svg"
            sx={{ width: 200, height: 100, ...sx }}
        />
    );
}
