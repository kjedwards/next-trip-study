// Enable a CORS proxy server so I can get data for local development. TODO: Set up own proxy or remove
const CORS_PROXY = '';
//const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export const TransitServiceUrls = {
  getFetchRoutesUrl: () => `${CORS_PROXY}http://svc.metrotransit.org/nextripv2/routes`,
  getFetchDirectionsUrl: (routeId: string) => `${CORS_PROXY}http://svc.metrotransit.org/nextripv2/directions/${routeId}`,
  getFetchStopsUrl: (routeId: string, directionId: string) => `${CORS_PROXY}http://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`
};
