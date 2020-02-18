import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, 0)',
    marginBottom: 1,
    minHeight: 40,
    '&$expanded': {
      minHeight: 40,
    },
  },
  content: {
    '&$expanded': {
      margin: '8px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Company</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            Customer Service
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            
              <li>Customer Service</li>
              <li>FAQs</li>
              <li>Order Status</li>
              <li>Payments</li>
              <li>Shipping Information</li>
              <li>Return Policy</li>
           
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Contact Us</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            
              <li><span className="mr-2"><i className="fa fa-map-marker"></i></span>Kubwa District Center, FCT Abuja.</li>
              <li><span className="mr-2"><i className="fa fa-phone"></i></span>08142195884</li>
              <li><span className="mr-2"><i className="fa fa-envelope"></i></span>etoilebeautynig@gmail.com</li>
            
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
