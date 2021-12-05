import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../types/IPost";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['News'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: `/news`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['News']
        }),
        fetchOnePost: build.query<IPost, string|undefined>({
            query: (limit) => ({
                url: `/news/${limit}`
            }),
            providesTags: result => ['News']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/news`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['News']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/news/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['News']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/news/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['News']
        }),
    })
})
