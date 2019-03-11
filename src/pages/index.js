import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../withRoot';
import groups from './groups';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Group</TableCell>
              <TableCell align="right">Wheelchair Accessible</TableCell>
              <TableCell align="right">Day</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Format</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((group, i) => group.meetings.map(
              meeting => (
                <TableRow key={String(i)}>
                  <TableCell>{group.name}</TableCell>
                  <TableCell align="right">{group.isWheelchairAccessible ? '✅' : ''}</TableCell>
                  <TableCell align="right">{meeting.day}</TableCell>
                  <TableCell align="right">{moment(meeting.start).format('hh:mm a')}</TableCell>
                  <TableCell align="right">{meeting.format.join(', ')}</TableCell>
                </TableRow>
              )
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
