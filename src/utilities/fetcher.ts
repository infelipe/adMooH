export const fetcher = (url: string) => fetch(url).then((data) => data.json());
