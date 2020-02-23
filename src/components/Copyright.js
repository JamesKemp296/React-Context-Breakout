import React from 'react'

// MUI STUFF
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://jameskemp.dev/">
        James Kemp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
export default Copyright
