import { Typography,Box } from '@material-ui/core'
import React from 'react'

const PageNotFound = () => {
    return (
        <Box  style={{display:'flex',justifyContent:'center',alignItems: 'center',marginTop:'10%'}}>
        <Typography variant="h1" style={{display:'flex',justifyContent:'center',alignItems: 'center', color: 'white', verticalAlign:'middle'}}>
        404
        </Typography>
        </Box>
        )
}

export default PageNotFound
