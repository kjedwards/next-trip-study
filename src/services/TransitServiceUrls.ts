// Enable a CORS proxy server so I can get data for local development. TODO: Set up own proxy
// const CORS_PROXY = '';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export const TransitServiceUrls = {
  fetchRoutes: `${CORS_PROXY}http://svc.metrotransit.org/nextripv2/routes`,
};
