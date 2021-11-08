export const TransitServiceUrls = {
  getFetchRoutesUrl: () => 'https://svc.metrotransit.org/nextripv2/routes',
  getFetchDirectionsUrl: (routeId: string | number | undefined) => `https://svc.metrotransit.org/nextripv2/directions/${routeId}`,
  getFetchStopsUrl: (routeId: string | number | undefined, directionId: string | number | undefined) => `https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`
};
const baseUrl = 'https://svc.metrotransit.org/nextripv2';
