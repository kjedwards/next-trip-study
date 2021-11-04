import {
  useQuery,
} from 'react-query';

export default class TransitService {
  async fetchRoutes() {
    console.info('fetching routes');

    return useQuery('routes', async () => {
      const { body } = await fetch(
        'http://svc.metrotransit.org/NexTrip/Routes'
      );
      return body;
    });
  }
}
