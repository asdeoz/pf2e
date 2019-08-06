import React from 'react';
import propTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    border: '1px solid black',
    margin: '.3rem',
    maxWidth: '5.8rem',
  },
  title: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 'smaller',
    textTransform: props => (props.uppercase === true ? 'uppercase' : 'initial'),
  },
};

function TitledBox(props) {
  const { title, info, classes } = props;

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

export default withStyles(styles)(TitledBox);

TitledBox.propTypes = {
  title: propTypes.string.isRequired,
  info: propTypes.oneOfType([propTypes.string, propTypes.number]),
  uppercase: propTypes.bool,
  classes: propTypes.object.isRequired,
};

TitledBox.defaultProps = {
  info: null,
  uppercase: false,
};
