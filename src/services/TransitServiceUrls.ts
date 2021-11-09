const baseUrl = 'https://svc.metrotransit.org/nextripv2';

export const TransitServiceUrls = {
  getFetchRoutesUrl: () :string => `${baseUrl}/routes`,
  getFetchDirectionsUrl: (routeId: string | number | undefined) : string => `${baseUrl}/directions/${routeId}`,
  getFetchStopsUrl: (routeId: string | number | undefined, directionId: string | number | undefined) : string => `${baseUrl}/stops/${routeId}/${directionId}`,
  getFetchStopInfoUrl: (routeId: string | number | undefined, directionId: string | number | undefined, placeCode: string | number | undefined) :string => `${baseUrl}/${routeId}/${directionId}/${placeCode}`,
};
