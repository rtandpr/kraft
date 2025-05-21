import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-XYP3ES3TM3'; 

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageview = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
