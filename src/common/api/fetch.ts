import { fetcher } from '@common/api/wrapped-fetch';
import { MICROBLOCKS_ENABLED } from '@common/constants';

export const withApiServer = (apiServer: string) => (path?: string) =>
  path ? apiServer + path : apiServer;

export const appendUrlParam = (url: string, key: string, value: string) => {
  const [baseUrl, searchParams] = url.split('?');
  const urlSearchParams = new URLSearchParams(searchParams);
  urlSearchParams.append(key, value);
  return baseUrl + '?' + urlSearchParams.toString();
};

export const fetchFromSidecar =
  (apiServer: string) =>
  async (path: string, opts = {}) => {
    const newPath = MICROBLOCKS_ENABLED ? appendUrlParam(path, 'unanchored', 'true') : path;
    const url = withApiServer(apiServer)('/extended/v1' + newPath);
    const response = await fetcher(url, { ...opts });
    if (!response.ok) throw new Error(`Unable to fetch API data from ${url}`);
    return response.json();
  };
