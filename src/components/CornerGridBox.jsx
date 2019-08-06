import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minHeight: size => `${size * 2}rem`,
    border: '1px solid black',
  },
  title: {
    position: 'absolute',
    top: '0',
    left: '.2rem',
    fontSize: '.8rem',
  },
  info: {
    marginTop: '1.2rem',
    display: 'inline-block',
  },
});

export default function CornerGridBox(props) {
  const {
    title,
    info,
    size,
    xs,
  } = props;
  const classes = useStyles(size);

  return (
    <Grid item className={classes.root} xs={xs || 12}>
      <span className={classes.title}>{title}</span>
      <span className={classes.info}>{info}</span>
    </Grid>
  );
}

CornerGridBox.propTypes = {
  title: propTypes.string.isRequired,
  info: propTypes.oneOfType([propTypes.string, propTypes.number]),
  size: propTypes.number,
  xs: propTypes.number,
};

CornerGridBox.defaultProps = {
  info: '',
  size: 1,
  xs: 12,
};
