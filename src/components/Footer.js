import React from 'react'
import Typography from '@material-ui/core/Typography'
import Copyright from './Copyright'
import useGlobalStyles from '../styles/globals'

const Footer = () => {
  const classes = useGlobalStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  )
}

export default Footer
