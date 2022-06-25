
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Tweet {
    id: string;
    text: string;
    author?: Nullable<User>;
}

export interface IQuery {
    allTweets(): Tweet[] | Promise<Tweet[]>;
    tweet(id: string): Nullable<Tweet> | Promise<Nullable<Tweet>>;
    allUsers(): User[] | Promise<User[]>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    postTweet(text: string, userId: string): Tweet | Promise<Tweet>;
    deleteTweet(id: string): string | Promise<string>;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
}

type Nullable<T> = T | null;
