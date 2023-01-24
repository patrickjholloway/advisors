import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Advisor {
  id: string;
  name: string;
  location: string;
  specialties: string[];
  certification: string;
  avatar_url: string;
}

// Define a service using a base URL and expected endpoints
export const advisorApi = createApi({
  reducerPath: 'advisorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://demo-apps.trytapioca.com/api/' }),
  endpoints: (builder) => ({
    getAdvisors: builder.query<Advisor[],void>({
      query: () => "/advisors",
    }),
  }),
});

export const { useGetAdvisorsQuery } = advisorApi;