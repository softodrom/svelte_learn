import { writable } from "svelte/store"

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'I am interested in knowing the date and time for the second interview. When will the second interview be conducted? I would appreciate if you could provide me with the details.',
    },
    {
        id: 2,
        rating: 9,
        text: 'I am interested in knowing the date and time for the second interview. When will the second interview be conducted? I would appreciate if you could provide me with the details.',
    },
    {
        id: 3,
        rating: 8,
        text: 'I am interested in knowing the date and time for the second interview. When will the second interview be conducted? I would appreciate if you could provide me with the details.',
    }
])