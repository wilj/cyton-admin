import gql from 'graphql-tag';
import * as React from 'react';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
   __typename?: 'Query';
  /** Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form. */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Migration`. */
  migrations?: Maybe<MigrationsConnection>;
  /** Reads and enables pagination through a set of `ProxyRoute`. */
  proxyRoutes?: Maybe<ProxyRoutesConnection>;
  /** Reads and enables pagination through a set of `UserSession`. */
  userSessions?: Maybe<UserSessionsConnection>;
  proxyRoute?: Maybe<ProxyRoute>;
  proxyRouteByExternalHostName?: Maybe<ProxyRoute>;
  /** Reads a single `ProxyRoute` using its globally unique `ID`. */
  proxyRouteByNodeId?: Maybe<ProxyRoute>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMigrationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MigrationsOrderBy>>;
  condition?: Maybe<MigrationCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProxyRoutesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProxyRoutesOrderBy>>;
  condition?: Maybe<ProxyRouteCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserSessionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserSessionsOrderBy>>;
  condition?: Maybe<UserSessionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProxyRouteArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProxyRouteByExternalHostNameArgs = {
  externalHostName: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProxyRouteByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


/** Methods to use when ordering `Migration`. */
export enum MigrationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  CreatedTsAsc = 'CREATED_TS_ASC',
  CreatedTsDesc = 'CREATED_TS_DESC'
}

/** A condition to be used against `Migration` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MigrationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdTs` field. */
  createdTs?: Maybe<Scalars['Datetime']>;
};


/** A connection to a list of `Migration` values. */
export type MigrationsConnection = {
   __typename?: 'MigrationsConnection';
  /** A list of `Migration` objects. */
  nodes: Array<Maybe<Migration>>;
  /** A list of edges which contains the `Migration` and cursor to aid in pagination. */
  edges: Array<MigrationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Migration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Migration = {
   __typename?: 'Migration';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  createdTs?: Maybe<Scalars['Datetime']>;
};

/** A `Migration` edge in the connection. */
export type MigrationsEdge = {
   __typename?: 'MigrationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Migration` at the end of the edge. */
  node?: Maybe<Migration>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** Methods to use when ordering `ProxyRoute`. */
export enum ProxyRoutesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ExternalHostNameAsc = 'EXTERNAL_HOST_NAME_ASC',
  ExternalHostNameDesc = 'EXTERNAL_HOST_NAME_DESC',
  InternalHostNameAsc = 'INTERNAL_HOST_NAME_ASC',
  InternalHostNameDesc = 'INTERNAL_HOST_NAME_DESC',
  InternalPortAsc = 'INTERNAL_PORT_ASC',
  InternalPortDesc = 'INTERNAL_PORT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `ProxyRoute` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProxyRouteCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `externalHostName` field. */
  externalHostName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `internalHostName` field. */
  internalHostName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `internalPort` field. */
  internalPort?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `ProxyRoute` values. */
export type ProxyRoutesConnection = {
   __typename?: 'ProxyRoutesConnection';
  /** A list of `ProxyRoute` objects. */
  nodes: Array<Maybe<ProxyRoute>>;
  /** A list of edges which contains the `ProxyRoute` and cursor to aid in pagination. */
  edges: Array<ProxyRoutesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ProxyRoute` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type ProxyRoute = Node & {
   __typename?: 'ProxyRoute';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  externalHostName: Scalars['String'];
  internalHostName: Scalars['String'];
  internalPort: Scalars['Int'];
};

/** A `ProxyRoute` edge in the connection. */
export type ProxyRoutesEdge = {
   __typename?: 'ProxyRoutesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ProxyRoute` at the end of the edge. */
  node?: Maybe<ProxyRoute>;
};

/** Methods to use when ordering `UserSession`. */
export enum UserSessionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ExternalIdAsc = 'EXTERNAL_ID_ASC',
  ExternalIdDesc = 'EXTERNAL_ID_DESC',
  JwtAsc = 'JWT_ASC',
  JwtDesc = 'JWT_DESC',
  RolesAsc = 'ROLES_ASC',
  RolesDesc = 'ROLES_DESC',
  PreferredUsernameAsc = 'PREFERRED_USERNAME_ASC',
  PreferredUsernameDesc = 'PREFERRED_USERNAME_DESC',
  GivenNameAsc = 'GIVEN_NAME_ASC',
  GivenNameDesc = 'GIVEN_NAME_DESC',
  FamilyNameAsc = 'FAMILY_NAME_ASC',
  FamilyNameDesc = 'FAMILY_NAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC'
}

/** A condition to be used against `UserSession` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserSessionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `externalId` field. */
  externalId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `jwt` field. */
  jwt?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `roles` field. */
  roles?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `preferredUsername` field. */
  preferredUsername?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `givenName` field. */
  givenName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `familyName` field. */
  familyName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
};


/** A connection to a list of `UserSession` values. */
export type UserSessionsConnection = {
   __typename?: 'UserSessionsConnection';
  /** A list of `UserSession` objects. */
  nodes: Array<Maybe<UserSession>>;
  /** A list of edges which contains the `UserSession` and cursor to aid in pagination. */
  edges: Array<UserSessionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserSession` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type UserSession = {
   __typename?: 'UserSession';
  id?: Maybe<Scalars['Int']>;
  externalId?: Maybe<Scalars['String']>;
  jwt?: Maybe<Scalars['JSON']>;
  roles?: Maybe<Scalars['JSON']>;
  preferredUsername?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

/** A `UserSession` edge in the connection. */
export type UserSessionsEdge = {
   __typename?: 'UserSessionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `UserSession` at the end of the edge. */
  node?: Maybe<UserSession>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
   __typename?: 'Mutation';
  /** Creates a single `Migration`. */
  createMigration?: Maybe<CreateMigrationPayload>;
  /** Creates a single `ProxyRoute`. */
  createProxyRoute?: Maybe<CreateProxyRoutePayload>;
  /** Updates a single `ProxyRoute` using its globally unique id and a patch. */
  updateProxyRouteByNodeId?: Maybe<UpdateProxyRoutePayload>;
  /** Updates a single `ProxyRoute` using a unique key and a patch. */
  updateProxyRoute?: Maybe<UpdateProxyRoutePayload>;
  /** Updates a single `ProxyRoute` using a unique key and a patch. */
  updateProxyRouteByExternalHostName?: Maybe<UpdateProxyRoutePayload>;
  /** Deletes a single `ProxyRoute` using its globally unique id. */
  deleteProxyRouteByNodeId?: Maybe<DeleteProxyRoutePayload>;
  /** Deletes a single `ProxyRoute` using a unique key. */
  deleteProxyRoute?: Maybe<DeleteProxyRoutePayload>;
  /** Deletes a single `ProxyRoute` using a unique key. */
  deleteProxyRouteByExternalHostName?: Maybe<DeleteProxyRoutePayload>;
  currentUserHasRole?: Maybe<CurrentUserHasRolePayload>;
  currentUserId?: Maybe<CurrentUserIdPayload>;
  isCurrentUser?: Maybe<IsCurrentUserPayload>;
  isLoggedIn?: Maybe<IsLoggedInPayload>;
  registerUser?: Maybe<RegisterUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMigrationArgs = {
  input: CreateMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProxyRouteArgs = {
  input: CreateProxyRouteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProxyRouteByNodeIdArgs = {
  input: UpdateProxyRouteByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProxyRouteArgs = {
  input: UpdateProxyRouteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProxyRouteByExternalHostNameArgs = {
  input: UpdateProxyRouteByExternalHostNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProxyRouteByNodeIdArgs = {
  input: DeleteProxyRouteByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProxyRouteArgs = {
  input: DeleteProxyRouteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProxyRouteByExternalHostNameArgs = {
  input: DeleteProxyRouteByExternalHostNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentUserHasRoleArgs = {
  input: CurrentUserHasRoleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentUserIdArgs = {
  input: CurrentUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationIsCurrentUserArgs = {
  input: IsCurrentUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationIsLoggedInArgs = {
  input: IsLoggedInInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};

/** All input for the create `Migration` mutation. */
export type CreateMigrationInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Migration` to be created by this mutation. */
  migration: MigrationInput;
};

/** An input for mutations affecting `Migration` */
export type MigrationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  createdTs?: Maybe<Scalars['Datetime']>;
};

/** The output of our create `Migration` mutation. */
export type CreateMigrationPayload = {
   __typename?: 'CreateMigrationPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Migration` that was created by this mutation. */
  migration?: Maybe<Migration>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>;
};


/** The output of our create `Migration` mutation. */
export type CreateMigrationPayloadMigrationEdgeArgs = {
  orderBy?: Maybe<Array<MigrationsOrderBy>>;
};

/** All input for the create `ProxyRoute` mutation. */
export type CreateProxyRouteInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ProxyRoute` to be created by this mutation. */
  proxyRoute: ProxyRouteInput;
};

/** An input for mutations affecting `ProxyRoute` */
export type ProxyRouteInput = {
  id?: Maybe<Scalars['Int']>;
  externalHostName: Scalars['String'];
  internalHostName: Scalars['String'];
  internalPort: Scalars['Int'];
};

/** The output of our create `ProxyRoute` mutation. */
export type CreateProxyRoutePayload = {
   __typename?: 'CreateProxyRoutePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ProxyRoute` that was created by this mutation. */
  proxyRoute?: Maybe<ProxyRoute>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ProxyRoute`. May be used by Relay 1. */
  proxyRouteEdge?: Maybe<ProxyRoutesEdge>;
};


/** The output of our create `ProxyRoute` mutation. */
export type CreateProxyRoutePayloadProxyRouteEdgeArgs = {
  orderBy?: Maybe<Array<ProxyRoutesOrderBy>>;
};

/** All input for the `updateProxyRouteByNodeId` mutation. */
export type UpdateProxyRouteByNodeIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ProxyRoute` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ProxyRoute` being updated. */
  patch: ProxyRoutePatch;
};

/** Represents an update to a `ProxyRoute`. Fields that are set will be updated. */
export type ProxyRoutePatch = {
  id?: Maybe<Scalars['Int']>;
  externalHostName?: Maybe<Scalars['String']>;
  internalHostName?: Maybe<Scalars['String']>;
  internalPort?: Maybe<Scalars['Int']>;
};

/** The output of our update `ProxyRoute` mutation. */
export type UpdateProxyRoutePayload = {
   __typename?: 'UpdateProxyRoutePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ProxyRoute` that was updated by this mutation. */
  proxyRoute?: Maybe<ProxyRoute>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ProxyRoute`. May be used by Relay 1. */
  proxyRouteEdge?: Maybe<ProxyRoutesEdge>;
};


/** The output of our update `ProxyRoute` mutation. */
export type UpdateProxyRoutePayloadProxyRouteEdgeArgs = {
  orderBy?: Maybe<Array<ProxyRoutesOrderBy>>;
};

/** All input for the `updateProxyRoute` mutation. */
export type UpdateProxyRouteInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ProxyRoute` being updated. */
  patch: ProxyRoutePatch;
  id: Scalars['Int'];
};

/** All input for the `updateProxyRouteByExternalHostName` mutation. */
export type UpdateProxyRouteByExternalHostNameInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ProxyRoute` being updated. */
  patch: ProxyRoutePatch;
  externalHostName: Scalars['String'];
};

/** All input for the `deleteProxyRouteByNodeId` mutation. */
export type DeleteProxyRouteByNodeIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ProxyRoute` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ProxyRoute` mutation. */
export type DeleteProxyRoutePayload = {
   __typename?: 'DeleteProxyRoutePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ProxyRoute` that was deleted by this mutation. */
  proxyRoute?: Maybe<ProxyRoute>;
  deletedProxyRouteNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ProxyRoute`. May be used by Relay 1. */
  proxyRouteEdge?: Maybe<ProxyRoutesEdge>;
};


/** The output of our delete `ProxyRoute` mutation. */
export type DeleteProxyRoutePayloadProxyRouteEdgeArgs = {
  orderBy?: Maybe<Array<ProxyRoutesOrderBy>>;
};

/** All input for the `deleteProxyRoute` mutation. */
export type DeleteProxyRouteInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteProxyRouteByExternalHostName` mutation. */
export type DeleteProxyRouteByExternalHostNameInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  externalHostName: Scalars['String'];
};

/** All input for the `currentUserHasRole` mutation. */
export type CurrentUserHasRoleInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** The output of our `currentUserHasRole` mutation. */
export type CurrentUserHasRolePayload = {
   __typename?: 'CurrentUserHasRolePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  boolean?: Maybe<Scalars['Boolean']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `currentUserId` mutation. */
export type CurrentUserIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** The output of our `currentUserId` mutation. */
export type CurrentUserIdPayload = {
   __typename?: 'CurrentUserIdPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  integer?: Maybe<Scalars['Int']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `isCurrentUser` mutation. */
export type IsCurrentUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** The output of our `isCurrentUser` mutation. */
export type IsCurrentUserPayload = {
   __typename?: 'IsCurrentUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  boolean?: Maybe<Scalars['Boolean']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `isLoggedIn` mutation. */
export type IsLoggedInInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** The output of our `isLoggedIn` mutation. */
export type IsLoggedInPayload = {
   __typename?: 'IsLoggedInPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  boolean?: Maybe<Scalars['Boolean']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `registerUser` mutation. */
export type RegisterUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** The output of our `registerUser` mutation. */
export type RegisterUserPayload = {
   __typename?: 'RegisterUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  userSessions?: Maybe<Array<Maybe<UserSession>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their description, they are added for each field in the `Query` type. When you subscribe to a live query field, the selection set will be evaluated and sent to the client, and then most things\* that would cause the output of the selection set to change will trigger the selection set to be re-evaluated and the results to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified server-side event occurs. This makes them a lot more efficient than Live Queries, but it is still recommended that you keep payloads fairly small.
 */
export type Subscription = {
   __typename?: 'Subscription';
  /** Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form. (live) */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. (live) */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. (live) */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Migration`. (live) */
  migrations?: Maybe<MigrationsConnection>;
  /** Reads and enables pagination through a set of `ProxyRoute`. (live) */
  proxyRoutes?: Maybe<ProxyRoutesConnection>;
  /** Reads and enables pagination through a set of `UserSession`. (live) */
  userSessions?: Maybe<UserSessionsConnection>;
  /**  (live) */
  proxyRoute?: Maybe<ProxyRoute>;
  /**  (live) */
  proxyRouteByExternalHostName?: Maybe<ProxyRoute>;
  /** Reads a single `ProxyRoute` using its globally unique `ID`. (live) */
  proxyRouteByNodeId?: Maybe<ProxyRoute>;
  listen: ListenPayload;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their description, they are added for each field in the `Query` type. When you subscribe to a live query field, the selection set will be evaluated and sent to the client, and then most things\* that would cause the output of the selection set to change will trigger the selection set to be re-evaluated and the results to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified server-side event occurs. This makes them a lot more efficient than Live Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionNodeArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their description, they are added for each field in the `Query` type. When you subscribe to a live query field, the selection set will be evaluated and sent to the client, and then most things\* that would cause the output of the selection set to change will trigger the selection set to be re-evaluated and the results to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified server-side event occurs. This makes them a lot more efficient than Live Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionMigrationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MigrationsOrderBy>>;
  condition?: Maybe<MigrationCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their description, they are added for each field in the `Query` type. When you subscribe to a live query field, the selection set will be evaluated and sent to the client, and then most things\* that would cause the output of the selection set to change will trigger the selection set to be re-evaluated and the results to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified server-side event occurs. This makes them a lot more efficient than Live Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionProxyRoutesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProxyRoutesOrderBy>>;
  condition?: Maybe<ProxyRouteCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their description, they are added for each field in the `Query` type. When you subscribe to a live query field, the selection set will be evaluated and sent to the client, and then most things\* that would cause the output of the selection set to change will trigger the selection set to be re-evaluated and the results to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified server-side event occurs. This makes them a lot more efficient than Live Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserSessionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserSessionsOrderBy>>;
  condition?: Maybe<UserSessionCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their description, they are added for each field in the `Query` type. When you subscribe to a live query field, the selection set will be evaluated and sent to the client, and then most things\* that would cause the output of the selection set to change will trigger the selection set to be re-evaluated and the results to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified server-side event occurs. This makes them a lot more efficient than Live Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionProxyRouteArgs = {
  id: Scalars['Int'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their description, they are added for each field in the `Query` type. When you subscribe to a live query field, the selection set will be evaluated and sent to the client, and then most things\* that would cause the output of the selection set to change will trigger the selection set to be re-evaluated and the results to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified server-side event occurs. This makes them a lot more efficient than Live Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionProxyRouteByExternalHostNameArgs = {
  externalHostName: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their description, they are added for each field in the `Query` type. When you subscribe to a live query field, the selection set will be evaluated and sent to the client, and then most things\* that would cause the output of the selection set to change will trigger the selection set to be re-evaluated and the results to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified server-side event occurs. This makes them a lot more efficient than Live Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionProxyRouteByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their description, they are added for each field in the `Query` type. When you subscribe to a live query field, the selection set will be evaluated and sent to the client, and then most things\* that would cause the output of the selection set to change will trigger the selection set to be re-evaluated and the results to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified server-side event occurs. This makes them a lot more efficient than Live Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionListenArgs = {
  topic: Scalars['String'];
};

export type ListenPayload = {
   __typename?: 'ListenPayload';
  /** Our root query field type. Allows us to run any query from our subscription payload. */
  query?: Maybe<Query>;
  relatedNode?: Maybe<Node>;
  relatedNodeId?: Maybe<Scalars['ID']>;
};

export type AddProxyRouteMutationVariables = {
  input: CreateProxyRouteInput;
};


export type AddProxyRouteMutation = (
  { __typename?: 'Mutation' }
  & { createProxyRoute?: Maybe<(
    { __typename?: 'CreateProxyRoutePayload' }
    & { proxyRoute?: Maybe<(
      { __typename?: 'ProxyRoute' }
      & Pick<ProxyRoute, 'id'>
    )> }
  )> }
);

export type DashboardQueryVariables = {};


export type DashboardQuery = (
  { __typename?: 'Query' }
  & { migrations?: Maybe<(
    { __typename?: 'MigrationsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Migration' }
      & Pick<Migration, 'name' | 'createdTs'>
    )>> }
  )> }
);

export type DeleteProxyRouteMutationVariables = {
  input: DeleteProxyRouteInput;
};


export type DeleteProxyRouteMutation = (
  { __typename?: 'Mutation' }
  & { deleteProxyRoute?: Maybe<(
    { __typename?: 'DeleteProxyRoutePayload' }
    & { proxyRoute?: Maybe<(
      { __typename?: 'ProxyRoute' }
      & Pick<ProxyRoute, 'id'>
    )> }
  )> }
);

export type ProxySettingsQueryVariables = {};


export type ProxySettingsQuery = (
  { __typename?: 'Query' }
  & { proxyRoutes?: Maybe<(
    { __typename?: 'ProxyRoutesConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'ProxyRoute' }
      & Pick<ProxyRoute, 'id' | 'externalHostName' | 'internalHostName' | 'internalPort'>
    )>> }
  )> }
);


export const AddProxyRouteDocument = gql`
    mutation AddProxyRoute($input: CreateProxyRouteInput!) {
  createProxyRoute(input: $input) {
    proxyRoute {
      id
    }
  }
}
    `;

export const AddProxyRouteComponent = (props: Omit<Urql.MutationProps<AddProxyRouteMutation, AddProxyRouteMutationVariables>, 'query'> & { variables?: AddProxyRouteMutationVariables }) => (
  <Urql.Mutation {...props} query={AddProxyRouteDocument} />
);


export function useAddProxyRouteMutation() {
  return Urql.useMutation<AddProxyRouteMutation, AddProxyRouteMutationVariables>(AddProxyRouteDocument);
};
export const DashboardDocument = gql`
    query Dashboard {
  migrations(orderBy: CREATED_TS_ASC) {
    nodes {
      name
      createdTs
    }
  }
}
    `;

export const DashboardComponent = (props: Omit<Urql.QueryProps<DashboardQuery, DashboardQueryVariables>, 'query'> & { variables?: DashboardQueryVariables }) => (
  <Urql.Query {...props} query={DashboardDocument} />
);


export function useDashboardQuery(options: Omit<Urql.UseQueryArgs<DashboardQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DashboardQuery>({ query: DashboardDocument, ...options });
};
export const DeleteProxyRouteDocument = gql`
    mutation DeleteProxyRoute($input: DeleteProxyRouteInput!) {
  deleteProxyRoute(input: $input) {
    proxyRoute {
      id
    }
  }
}
    `;

export const DeleteProxyRouteComponent = (props: Omit<Urql.MutationProps<DeleteProxyRouteMutation, DeleteProxyRouteMutationVariables>, 'query'> & { variables?: DeleteProxyRouteMutationVariables }) => (
  <Urql.Mutation {...props} query={DeleteProxyRouteDocument} />
);


export function useDeleteProxyRouteMutation() {
  return Urql.useMutation<DeleteProxyRouteMutation, DeleteProxyRouteMutationVariables>(DeleteProxyRouteDocument);
};
export const ProxySettingsDocument = gql`
    query ProxySettings {
  proxyRoutes {
    nodes {
      id
      externalHostName
      internalHostName
      internalPort
    }
  }
}
    `;

export const ProxySettingsComponent = (props: Omit<Urql.QueryProps<ProxySettingsQuery, ProxySettingsQueryVariables>, 'query'> & { variables?: ProxySettingsQueryVariables }) => (
  <Urql.Query {...props} query={ProxySettingsDocument} />
);


export function useProxySettingsQuery(options: Omit<Urql.UseQueryArgs<ProxySettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProxySettingsQuery>({ query: ProxySettingsDocument, ...options });
};