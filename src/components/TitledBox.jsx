import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    border: '1px solid black',
    margin: '.3rem',
    maxWidth: '5.8rem',
  },
  title: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 'smaller',
    textTransform: uppercase => (uppercase ? 'uppercase' : 'none'),
  },
});

export default function TitledBox(props) {
  const { title, info, uppercase } = props;
  const classes = useStyles(uppercase);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        {title}
      </Typography>
      <Typography>
        {info}
      </Typography>
    </div>
  );
}

TitledBox.propTypes = {
  title: propTypes.string.isRequired,
  info: propTypes.oneOfType([propTypes.string, propTypes.number]),
  uppercase: propTypes.bool,
};

TitledBox.defaultProps = {
  info: null,
  uppercase: false,
};
