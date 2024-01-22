import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-john-rodriguez/";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Player"],
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "players",
      providesTags: ["Player"],
    }),
    addPlayers: builder.mutation({
      query: (body) => ({
        url: "players/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Player"],
    }),
    deletePlayers: builder.mutation({
      query: (id) => ({
        url: `players/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["Player"],
    }),
    singlePlayer: builder.query({
      query: (id) => ({
        url: `players/${id}`,
        method: "Get",
      }),
      invalidatesTags: ["Player"],
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useAddPlayersMutation,
  useDeletePlayersMutation,
  useSinglePlayerQuery,
} = puppyBowlApi;
