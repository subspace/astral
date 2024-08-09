export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  _eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  _gt?: InputMaybe<Array<Scalars['Int']['input']>>;
  _gte?: InputMaybe<Array<Scalars['Int']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['Int']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['Int']['input']>>;
  _lte?: InputMaybe<Array<Scalars['Int']['input']>>;
  _neq?: InputMaybe<Array<Scalars['Int']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['Int']['input']>>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  /** An array relationship */
  bundles: Array<Bundle_Author>;
  created_at?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  deposits: Array<Deposit>;
  /** An aggregate relationship */
  deposits_aggregate: Deposit_Aggregate;
  id: Scalars['String']['output'];
  /** An array relationship */
  nominators: Array<Nominator>;
  /** An aggregate relationship */
  nominators_aggregate: Nominator_Aggregate;
  /** An array relationship */
  operators: Array<Operator>;
  /** An aggregate relationship */
  operators_aggregate: Operator_Aggregate;
  total_deposits: Scalars['numeric']['output'];
  total_tax_collected: Scalars['numeric']['output'];
  updated_at?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  withdrawals: Array<Withdrawal>;
  /** An aggregate relationship */
  withdrawals_aggregate: Withdrawal_Aggregate;
};


/** columns and relationships of "account" */
export type AccountBundlesArgs = {
  distinct_on?: InputMaybe<Array<Bundle_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bundle_Author_Order_By>>;
  where?: InputMaybe<Bundle_Author_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountNominatorsArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountNominators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountOperatorsArgs = {
  distinct_on?: InputMaybe<Array<Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Order_By>>;
  where?: InputMaybe<Operator_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountOperators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Order_By>>;
  where?: InputMaybe<Operator_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountWithdrawalsArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountWithdrawals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  avg?: Maybe<Account_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
  stddev?: Maybe<Account_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Sum_Fields>;
  var_pop?: Maybe<Account_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Var_Samp_Fields>;
  variance?: Maybe<Account_Variance_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Account_Avg_Fields = {
  __typename?: 'account_avg_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  bundles?: InputMaybe<Bundle_Author_Bool_Exp>;
  created_at?: InputMaybe<Int_Comparison_Exp>;
  deposits?: InputMaybe<Deposit_Bool_Exp>;
  deposits_aggregate?: InputMaybe<Deposit_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nominators?: InputMaybe<Nominator_Bool_Exp>;
  nominators_aggregate?: InputMaybe<Nominator_Aggregate_Bool_Exp>;
  operators?: InputMaybe<Operator_Bool_Exp>;
  operators_aggregate?: InputMaybe<Operator_Aggregate_Bool_Exp>;
  total_deposits?: InputMaybe<Numeric_Comparison_Exp>;
  total_tax_collected?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Int_Comparison_Exp>;
  withdrawals?: InputMaybe<Withdrawal_Bool_Exp>;
  withdrawals_aggregate?: InputMaybe<Withdrawal_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  created_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_tax_collected?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  created_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_tax_collected?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  bundles_aggregate?: InputMaybe<Bundle_Author_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deposits_aggregate?: InputMaybe<Deposit_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  nominators_aggregate?: InputMaybe<Nominator_Aggregate_Order_By>;
  operators_aggregate?: InputMaybe<Operator_Aggregate_Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  withdrawals_aggregate?: InputMaybe<Withdrawal_Aggregate_Order_By>;
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TotalDeposits = 'total_deposits',
  /** column name */
  TotalTaxCollected = 'total_tax_collected',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Account_Stddev_Fields = {
  __typename?: 'account_stddev_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Account_Stddev_Pop_Fields = {
  __typename?: 'account_stddev_pop_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Account_Stddev_Samp_Fields = {
  __typename?: 'account_stddev_samp_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  total_deposits?: InputMaybe<Scalars['numeric']['input']>;
  total_tax_collected?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Account_Sum_Fields = {
  __typename?: 'account_sum_fields';
  created_at?: Maybe<Scalars['Int']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_tax_collected?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Account_Var_Pop_Fields = {
  __typename?: 'account_var_pop_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Account_Var_Samp_Fields = {
  __typename?: 'account_var_samp_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Account_Variance_Fields = {
  __typename?: 'account_variance_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "bundle" */
export type Bundle = {
  __typename?: 'bundle';
  /** An array relationship */
  authors: Array<Bundle_Author>;
  burned_balance: Scalars['numeric']['output'];
  consensus_block_hash: Scalars['String']['output'];
  consensus_block_number: Scalars['Int']['output'];
  consensus_storage_fee: Scalars['numeric']['output'];
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_block_extrinsic_root: Scalars['String']['output'];
  domain_block_hash: Scalars['String']['output'];
  domain_block_number: Scalars['Int']['output'];
  domain_execution_fee: Scalars['numeric']['output'];
  domain_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  rejected_transfers_claimed_count: Scalars['Int']['output'];
  total_rejected_transfers_claimed: Scalars['numeric']['output'];
  total_transfers_in: Scalars['numeric']['output'];
  total_transfers_out: Scalars['numeric']['output'];
  total_transfers_rejected: Scalars['numeric']['output'];
  total_volume: Scalars['numeric']['output'];
  transfers_in_count: Scalars['Int']['output'];
  transfers_out_count: Scalars['Int']['output'];
  transfers_rejected_count: Scalars['Int']['output'];
};


/** columns and relationships of "bundle" */
export type BundleAuthorsArgs = {
  distinct_on?: InputMaybe<Array<Bundle_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bundle_Author_Order_By>>;
  where?: InputMaybe<Bundle_Author_Bool_Exp>;
};

/** order by aggregate values of table "bundle" */
export type Bundle_Aggregate_Order_By = {
  avg?: InputMaybe<Bundle_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bundle_Max_Order_By>;
  min?: InputMaybe<Bundle_Min_Order_By>;
  stddev?: InputMaybe<Bundle_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bundle_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bundle_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bundle_Sum_Order_By>;
  var_pop?: InputMaybe<Bundle_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bundle_Var_Samp_Order_By>;
  variance?: InputMaybe<Bundle_Variance_Order_By>;
};

/** columns and relationships of "bundle_author" */
export type Bundle_Author = {
  __typename?: 'bundle_author';
  /** An object relationship */
  account?: Maybe<Account>;
  account_id: Scalars['String']['output'];
  /** An object relationship */
  bundle?: Maybe<Bundle>;
  bundle_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** An object relationship */
  operator?: Maybe<Operator>;
  operator_id: Scalars['String']['output'];
};

/** order by aggregate values of table "bundle_author" */
export type Bundle_Author_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bundle_Author_Max_Order_By>;
  min?: InputMaybe<Bundle_Author_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "bundle_author". All fields are combined with a logical 'AND'. */
export type Bundle_Author_Bool_Exp = {
  _and?: InputMaybe<Array<Bundle_Author_Bool_Exp>>;
  _not?: InputMaybe<Bundle_Author_Bool_Exp>;
  _or?: InputMaybe<Array<Bundle_Author_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  bundle?: InputMaybe<Bundle_Bool_Exp>;
  bundle_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  operator?: InputMaybe<Operator_Bool_Exp>;
  operator_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "bundle_author" */
export type Bundle_Author_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  bundle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "bundle_author" */
export type Bundle_Author_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  bundle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "bundle_author". */
export type Bundle_Author_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  bundle?: InputMaybe<Bundle_Order_By>;
  bundle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operator?: InputMaybe<Operator_Order_By>;
  operator_id?: InputMaybe<Order_By>;
};

/** select columns of table "bundle_author" */
export enum Bundle_Author_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  BundleId = 'bundle_id',
  /** column name */
  Id = 'id',
  /** column name */
  OperatorId = 'operator_id'
}

/** Streaming cursor of the table "bundle_author" */
export type Bundle_Author_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bundle_Author_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bundle_Author_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  bundle_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  operator_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by avg() on columns of table "bundle" */
export type Bundle_Avg_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bundle". All fields are combined with a logical 'AND'. */
export type Bundle_Bool_Exp = {
  _and?: InputMaybe<Array<Bundle_Bool_Exp>>;
  _not?: InputMaybe<Bundle_Bool_Exp>;
  _or?: InputMaybe<Array<Bundle_Bool_Exp>>;
  authors?: InputMaybe<Bundle_Author_Bool_Exp>;
  burned_balance?: InputMaybe<Numeric_Comparison_Exp>;
  consensus_block_hash?: InputMaybe<String_Comparison_Exp>;
  consensus_block_number?: InputMaybe<Int_Comparison_Exp>;
  consensus_storage_fee?: InputMaybe<Numeric_Comparison_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_block_extrinsic_root?: InputMaybe<String_Comparison_Exp>;
  domain_block_hash?: InputMaybe<String_Comparison_Exp>;
  domain_block_number?: InputMaybe<Int_Comparison_Exp>;
  domain_execution_fee?: InputMaybe<Numeric_Comparison_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  rejected_transfers_claimed_count?: InputMaybe<Int_Comparison_Exp>;
  total_rejected_transfers_claimed?: InputMaybe<Numeric_Comparison_Exp>;
  total_transfers_in?: InputMaybe<Numeric_Comparison_Exp>;
  total_transfers_out?: InputMaybe<Numeric_Comparison_Exp>;
  total_transfers_rejected?: InputMaybe<Numeric_Comparison_Exp>;
  total_volume?: InputMaybe<Numeric_Comparison_Exp>;
  transfers_in_count?: InputMaybe<Int_Comparison_Exp>;
  transfers_out_count?: InputMaybe<Int_Comparison_Exp>;
  transfers_rejected_count?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "bundle" */
export type Bundle_Max_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_hash?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_extrinsic_root?: InputMaybe<Order_By>;
  domain_block_hash?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "bundle" */
export type Bundle_Min_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_hash?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_extrinsic_root?: InputMaybe<Order_By>;
  domain_block_hash?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "bundle". */
export type Bundle_Order_By = {
  authors_aggregate?: InputMaybe<Bundle_Author_Aggregate_Order_By>;
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_hash?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_block_extrinsic_root?: InputMaybe<Order_By>;
  domain_block_hash?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** select columns of table "bundle" */
export enum Bundle_Select_Column {
  /** column name */
  BurnedBalance = 'burned_balance',
  /** column name */
  ConsensusBlockHash = 'consensus_block_hash',
  /** column name */
  ConsensusBlockNumber = 'consensus_block_number',
  /** column name */
  ConsensusStorageFee = 'consensus_storage_fee',
  /** column name */
  DomainBlockExtrinsicRoot = 'domain_block_extrinsic_root',
  /** column name */
  DomainBlockHash = 'domain_block_hash',
  /** column name */
  DomainBlockNumber = 'domain_block_number',
  /** column name */
  DomainExecutionFee = 'domain_execution_fee',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  Id = 'id',
  /** column name */
  RejectedTransfersClaimedCount = 'rejected_transfers_claimed_count',
  /** column name */
  TotalRejectedTransfersClaimed = 'total_rejected_transfers_claimed',
  /** column name */
  TotalTransfersIn = 'total_transfers_in',
  /** column name */
  TotalTransfersOut = 'total_transfers_out',
  /** column name */
  TotalTransfersRejected = 'total_transfers_rejected',
  /** column name */
  TotalVolume = 'total_volume',
  /** column name */
  TransfersInCount = 'transfers_in_count',
  /** column name */
  TransfersOutCount = 'transfers_out_count',
  /** column name */
  TransfersRejectedCount = 'transfers_rejected_count'
}

/** order by stddev() on columns of table "bundle" */
export type Bundle_Stddev_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "bundle" */
export type Bundle_Stddev_Pop_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "bundle" */
export type Bundle_Stddev_Samp_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "bundle" */
export type Bundle_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bundle_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bundle_Stream_Cursor_Value_Input = {
  burned_balance?: InputMaybe<Scalars['numeric']['input']>;
  consensus_block_hash?: InputMaybe<Scalars['String']['input']>;
  consensus_block_number?: InputMaybe<Scalars['Int']['input']>;
  consensus_storage_fee?: InputMaybe<Scalars['numeric']['input']>;
  domain_block_extrinsic_root?: InputMaybe<Scalars['String']['input']>;
  domain_block_hash?: InputMaybe<Scalars['String']['input']>;
  domain_block_number?: InputMaybe<Scalars['Int']['input']>;
  domain_execution_fee?: InputMaybe<Scalars['numeric']['input']>;
  domain_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rejected_transfers_claimed_count?: InputMaybe<Scalars['Int']['input']>;
  total_rejected_transfers_claimed?: InputMaybe<Scalars['numeric']['input']>;
  total_transfers_in?: InputMaybe<Scalars['numeric']['input']>;
  total_transfers_out?: InputMaybe<Scalars['numeric']['input']>;
  total_transfers_rejected?: InputMaybe<Scalars['numeric']['input']>;
  total_volume?: InputMaybe<Scalars['numeric']['input']>;
  transfers_in_count?: InputMaybe<Scalars['Int']['input']>;
  transfers_out_count?: InputMaybe<Scalars['Int']['input']>;
  transfers_rejected_count?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "bundle" */
export type Bundle_Sum_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "bundle" */
export type Bundle_Var_Pop_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "bundle" */
export type Bundle_Var_Samp_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "bundle" */
export type Bundle_Variance_Order_By = {
  burned_balance?: InputMaybe<Order_By>;
  consensus_block_number?: InputMaybe<Order_By>;
  consensus_storage_fee?: InputMaybe<Order_By>;
  domain_block_number?: InputMaybe<Order_By>;
  domain_execution_fee?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "deposit" */
export type Deposit = {
  __typename?: 'deposit';
  /** An object relationship */
  account?: Maybe<Account>;
  account_id: Scalars['String']['output'];
  amount: Scalars['numeric']['output'];
  block_number: Scalars['Int']['output'];
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id: Scalars['String']['output'];
  extrinsic_hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** An object relationship */
  nominator?: Maybe<Nominator>;
  nominator_id: Scalars['String']['output'];
  /** An object relationship */
  operator?: Maybe<Operator>;
  operator_id: Scalars['String']['output'];
  status: Scalars['String']['output'];
  storage_fee_deposit: Scalars['numeric']['output'];
  timestamp: Scalars['timestamptz']['output'];
};

/** aggregated selection of "deposit" */
export type Deposit_Aggregate = {
  __typename?: 'deposit_aggregate';
  aggregate?: Maybe<Deposit_Aggregate_Fields>;
  nodes: Array<Deposit>;
};

export type Deposit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Deposit_Aggregate_Bool_Exp_Count>;
};

export type Deposit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Deposit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Deposit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "deposit" */
export type Deposit_Aggregate_Fields = {
  __typename?: 'deposit_aggregate_fields';
  avg?: Maybe<Deposit_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Deposit_Max_Fields>;
  min?: Maybe<Deposit_Min_Fields>;
  stddev?: Maybe<Deposit_Stddev_Fields>;
  stddev_pop?: Maybe<Deposit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Deposit_Stddev_Samp_Fields>;
  sum?: Maybe<Deposit_Sum_Fields>;
  var_pop?: Maybe<Deposit_Var_Pop_Fields>;
  var_samp?: Maybe<Deposit_Var_Samp_Fields>;
  variance?: Maybe<Deposit_Variance_Fields>;
};


/** aggregate fields of "deposit" */
export type Deposit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deposit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "deposit" */
export type Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Deposit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Deposit_Max_Order_By>;
  min?: InputMaybe<Deposit_Min_Order_By>;
  stddev?: InputMaybe<Deposit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Deposit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Deposit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Deposit_Sum_Order_By>;
  var_pop?: InputMaybe<Deposit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Deposit_Var_Samp_Order_By>;
  variance?: InputMaybe<Deposit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Deposit_Avg_Fields = {
  __typename?: 'deposit_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "deposit" */
export type Deposit_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "deposit". All fields are combined with a logical 'AND'. */
export type Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Deposit_Bool_Exp>>;
  _not?: InputMaybe<Deposit_Bool_Exp>;
  _or?: InputMaybe<Array<Deposit_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  extrinsic_hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nominator?: InputMaybe<Nominator_Bool_Exp>;
  nominator_id?: InputMaybe<String_Comparison_Exp>;
  operator?: InputMaybe<Operator_Bool_Exp>;
  operator_id?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  storage_fee_deposit?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Deposit_Max_Fields = {
  __typename?: 'deposit_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  extrinsic_hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominator_id?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "deposit" */
export type Deposit_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominator_id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Deposit_Min_Fields = {
  __typename?: 'deposit_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  extrinsic_hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominator_id?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "deposit" */
export type Deposit_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominator_id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "deposit". */
export type Deposit_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominator?: InputMaybe<Nominator_Order_By>;
  nominator_id?: InputMaybe<Order_By>;
  operator?: InputMaybe<Operator_Order_By>;
  operator_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "deposit" */
export enum Deposit_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  ExtrinsicHash = 'extrinsic_hash',
  /** column name */
  Id = 'id',
  /** column name */
  NominatorId = 'nominator_id',
  /** column name */
  OperatorId = 'operator_id',
  /** column name */
  Status = 'status',
  /** column name */
  StorageFeeDeposit = 'storage_fee_deposit',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Deposit_Stddev_Fields = {
  __typename?: 'deposit_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "deposit" */
export type Deposit_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Deposit_Stddev_Pop_Fields = {
  __typename?: 'deposit_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "deposit" */
export type Deposit_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Deposit_Stddev_Samp_Fields = {
  __typename?: 'deposit_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "deposit" */
export type Deposit_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "deposit" */
export type Deposit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Deposit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Deposit_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['Int']['input']>;
  domain_id?: InputMaybe<Scalars['String']['input']>;
  extrinsic_hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nominator_id?: InputMaybe<Scalars['String']['input']>;
  operator_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  storage_fee_deposit?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Deposit_Sum_Fields = {
  __typename?: 'deposit_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "deposit" */
export type Deposit_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Deposit_Var_Pop_Fields = {
  __typename?: 'deposit_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "deposit" */
export type Deposit_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Deposit_Var_Samp_Fields = {
  __typename?: 'deposit_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "deposit" */
export type Deposit_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Deposit_Variance_Fields = {
  __typename?: 'deposit_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "deposit" */
export type Deposit_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  storage_fee_deposit?: InputMaybe<Order_By>;
};

/** columns and relationships of "domain" */
export type Domain = {
  __typename?: 'domain';
  /** An object relationship */
  account?: Maybe<Account>;
  account_id: Scalars['String']['output'];
  bundle_count: Scalars['Int']['output'];
  /** An array relationship */
  bundles: Array<Bundle>;
  completed_epoch: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['Int']['output']>;
  current_storage_fee_deposit: Scalars['numeric']['output'];
  current_total_stake: Scalars['numeric']['output'];
  /** An array relationship */
  deposits: Array<Deposit>;
  /** An aggregate relationship */
  deposits_aggregate: Deposit_Aggregate;
  id: Scalars['String']['output'];
  last_bundle_at: Scalars['Int']['output'];
  last_domain_block_number: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  nominators: Array<Nominator>;
  /** An aggregate relationship */
  nominators_aggregate: Nominator_Aggregate;
  /** An array relationship */
  operators: Array<Operator>;
  /** An aggregate relationship */
  operators_aggregate: Operator_Aggregate;
  rejected_transfers_claimed_count: Scalars['Int']['output'];
  /** An array relationship */
  rewards: Array<Reward_Event>;
  /** An aggregate relationship */
  rewards_aggregate: Reward_Event_Aggregate;
  runtime: Scalars['String']['output'];
  runtime_id: Scalars['Int']['output'];
  runtime_info?: Maybe<Scalars['String']['output']>;
  sort_id: Scalars['Int']['output'];
  total_burned_balance: Scalars['numeric']['output'];
  total_consensus_storage_fee: Scalars['numeric']['output'];
  total_deposits: Scalars['numeric']['output'];
  total_domain_execution_fee: Scalars['numeric']['output'];
  total_rejected_transfers_claimed: Scalars['numeric']['output'];
  total_rewards_collected: Scalars['numeric']['output'];
  total_tax_collected: Scalars['numeric']['output'];
  total_transfers_in: Scalars['numeric']['output'];
  total_transfers_out: Scalars['numeric']['output'];
  total_transfers_rejected: Scalars['numeric']['output'];
  total_volume: Scalars['numeric']['output'];
  transfers_in_count: Scalars['Int']['output'];
  transfers_out_count: Scalars['Int']['output'];
  transfers_rejected_count: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  withdrawals: Array<Withdrawal>;
  /** An aggregate relationship */
  withdrawals_aggregate: Withdrawal_Aggregate;
};


/** columns and relationships of "domain" */
export type DomainBundlesArgs = {
  distinct_on?: InputMaybe<Array<Bundle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bundle_Order_By>>;
  where?: InputMaybe<Bundle_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainNominatorsArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainNominators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainOperatorsArgs = {
  distinct_on?: InputMaybe<Array<Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Order_By>>;
  where?: InputMaybe<Operator_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainOperators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Order_By>>;
  where?: InputMaybe<Operator_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainRewardsArgs = {
  distinct_on?: InputMaybe<Array<Reward_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reward_Event_Order_By>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reward_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reward_Event_Order_By>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainWithdrawalsArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};


/** columns and relationships of "domain" */
export type DomainWithdrawals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};

/** aggregated selection of "domain" */
export type Domain_Aggregate = {
  __typename?: 'domain_aggregate';
  aggregate?: Maybe<Domain_Aggregate_Fields>;
  nodes: Array<Domain>;
};

/** aggregate fields of "domain" */
export type Domain_Aggregate_Fields = {
  __typename?: 'domain_aggregate_fields';
  avg?: Maybe<Domain_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Domain_Max_Fields>;
  min?: Maybe<Domain_Min_Fields>;
  stddev?: Maybe<Domain_Stddev_Fields>;
  stddev_pop?: Maybe<Domain_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Domain_Stddev_Samp_Fields>;
  sum?: Maybe<Domain_Sum_Fields>;
  var_pop?: Maybe<Domain_Var_Pop_Fields>;
  var_samp?: Maybe<Domain_Var_Samp_Fields>;
  variance?: Maybe<Domain_Variance_Fields>;
};


/** aggregate fields of "domain" */
export type Domain_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Domain_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Domain_Avg_Fields = {
  __typename?: 'domain_avg_fields';
  bundle_count?: Maybe<Scalars['Float']['output']>;
  completed_epoch?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  last_domain_block_number?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  runtime_id?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "domain". All fields are combined with a logical 'AND'. */
export type Domain_Bool_Exp = {
  _and?: InputMaybe<Array<Domain_Bool_Exp>>;
  _not?: InputMaybe<Domain_Bool_Exp>;
  _or?: InputMaybe<Array<Domain_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  bundle_count?: InputMaybe<Int_Comparison_Exp>;
  bundles?: InputMaybe<Bundle_Bool_Exp>;
  completed_epoch?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Int_Comparison_Exp>;
  current_storage_fee_deposit?: InputMaybe<Numeric_Comparison_Exp>;
  current_total_stake?: InputMaybe<Numeric_Comparison_Exp>;
  deposits?: InputMaybe<Deposit_Bool_Exp>;
  deposits_aggregate?: InputMaybe<Deposit_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_bundle_at?: InputMaybe<Int_Comparison_Exp>;
  last_domain_block_number?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nominators?: InputMaybe<Nominator_Bool_Exp>;
  nominators_aggregate?: InputMaybe<Nominator_Aggregate_Bool_Exp>;
  operators?: InputMaybe<Operator_Bool_Exp>;
  operators_aggregate?: InputMaybe<Operator_Aggregate_Bool_Exp>;
  rejected_transfers_claimed_count?: InputMaybe<Int_Comparison_Exp>;
  rewards?: InputMaybe<Reward_Event_Bool_Exp>;
  rewards_aggregate?: InputMaybe<Reward_Event_Aggregate_Bool_Exp>;
  runtime?: InputMaybe<String_Comparison_Exp>;
  runtime_id?: InputMaybe<Int_Comparison_Exp>;
  runtime_info?: InputMaybe<String_Comparison_Exp>;
  sort_id?: InputMaybe<Int_Comparison_Exp>;
  total_burned_balance?: InputMaybe<Numeric_Comparison_Exp>;
  total_consensus_storage_fee?: InputMaybe<Numeric_Comparison_Exp>;
  total_deposits?: InputMaybe<Numeric_Comparison_Exp>;
  total_domain_execution_fee?: InputMaybe<Numeric_Comparison_Exp>;
  total_rejected_transfers_claimed?: InputMaybe<Numeric_Comparison_Exp>;
  total_rewards_collected?: InputMaybe<Numeric_Comparison_Exp>;
  total_tax_collected?: InputMaybe<Numeric_Comparison_Exp>;
  total_transfers_in?: InputMaybe<Numeric_Comparison_Exp>;
  total_transfers_out?: InputMaybe<Numeric_Comparison_Exp>;
  total_transfers_rejected?: InputMaybe<Numeric_Comparison_Exp>;
  total_volume?: InputMaybe<Numeric_Comparison_Exp>;
  transfers_in_count?: InputMaybe<Int_Comparison_Exp>;
  transfers_out_count?: InputMaybe<Int_Comparison_Exp>;
  transfers_rejected_count?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Int_Comparison_Exp>;
  withdrawals?: InputMaybe<Withdrawal_Bool_Exp>;
  withdrawals_aggregate?: InputMaybe<Withdrawal_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Domain_Max_Fields = {
  __typename?: 'domain_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  bundle_count?: Maybe<Scalars['Int']['output']>;
  completed_epoch?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  current_total_stake?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_bundle_at?: Maybe<Scalars['Int']['output']>;
  last_domain_block_number?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Int']['output']>;
  runtime?: Maybe<Scalars['String']['output']>;
  runtime_id?: Maybe<Scalars['Int']['output']>;
  runtime_info?: Maybe<Scalars['String']['output']>;
  sort_id?: Maybe<Scalars['Int']['output']>;
  total_burned_balance?: Maybe<Scalars['numeric']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['numeric']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['numeric']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['numeric']['output']>;
  total_rewards_collected?: Maybe<Scalars['numeric']['output']>;
  total_tax_collected?: Maybe<Scalars['numeric']['output']>;
  total_transfers_in?: Maybe<Scalars['numeric']['output']>;
  total_transfers_out?: Maybe<Scalars['numeric']['output']>;
  total_transfers_rejected?: Maybe<Scalars['numeric']['output']>;
  total_volume?: Maybe<Scalars['numeric']['output']>;
  transfers_in_count?: Maybe<Scalars['Int']['output']>;
  transfers_out_count?: Maybe<Scalars['Int']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Domain_Min_Fields = {
  __typename?: 'domain_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  bundle_count?: Maybe<Scalars['Int']['output']>;
  completed_epoch?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  current_total_stake?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_bundle_at?: Maybe<Scalars['Int']['output']>;
  last_domain_block_number?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Int']['output']>;
  runtime?: Maybe<Scalars['String']['output']>;
  runtime_id?: Maybe<Scalars['Int']['output']>;
  runtime_info?: Maybe<Scalars['String']['output']>;
  sort_id?: Maybe<Scalars['Int']['output']>;
  total_burned_balance?: Maybe<Scalars['numeric']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['numeric']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['numeric']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['numeric']['output']>;
  total_rewards_collected?: Maybe<Scalars['numeric']['output']>;
  total_tax_collected?: Maybe<Scalars['numeric']['output']>;
  total_transfers_in?: Maybe<Scalars['numeric']['output']>;
  total_transfers_out?: Maybe<Scalars['numeric']['output']>;
  total_transfers_rejected?: Maybe<Scalars['numeric']['output']>;
  total_volume?: Maybe<Scalars['numeric']['output']>;
  transfers_in_count?: Maybe<Scalars['Int']['output']>;
  transfers_out_count?: Maybe<Scalars['Int']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "domain". */
export type Domain_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  bundles_aggregate?: InputMaybe<Bundle_Aggregate_Order_By>;
  completed_epoch?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  deposits_aggregate?: InputMaybe<Deposit_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  last_domain_block_number?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nominators_aggregate?: InputMaybe<Nominator_Aggregate_Order_By>;
  operators_aggregate?: InputMaybe<Operator_Aggregate_Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  rewards_aggregate?: InputMaybe<Reward_Event_Aggregate_Order_By>;
  runtime?: InputMaybe<Order_By>;
  runtime_id?: InputMaybe<Order_By>;
  runtime_info?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  withdrawals_aggregate?: InputMaybe<Withdrawal_Aggregate_Order_By>;
};

/** select columns of table "domain" */
export enum Domain_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  BundleCount = 'bundle_count',
  /** column name */
  CompletedEpoch = 'completed_epoch',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentStorageFeeDeposit = 'current_storage_fee_deposit',
  /** column name */
  CurrentTotalStake = 'current_total_stake',
  /** column name */
  Id = 'id',
  /** column name */
  LastBundleAt = 'last_bundle_at',
  /** column name */
  LastDomainBlockNumber = 'last_domain_block_number',
  /** column name */
  Name = 'name',
  /** column name */
  RejectedTransfersClaimedCount = 'rejected_transfers_claimed_count',
  /** column name */
  Runtime = 'runtime',
  /** column name */
  RuntimeId = 'runtime_id',
  /** column name */
  RuntimeInfo = 'runtime_info',
  /** column name */
  SortId = 'sort_id',
  /** column name */
  TotalBurnedBalance = 'total_burned_balance',
  /** column name */
  TotalConsensusStorageFee = 'total_consensus_storage_fee',
  /** column name */
  TotalDeposits = 'total_deposits',
  /** column name */
  TotalDomainExecutionFee = 'total_domain_execution_fee',
  /** column name */
  TotalRejectedTransfersClaimed = 'total_rejected_transfers_claimed',
  /** column name */
  TotalRewardsCollected = 'total_rewards_collected',
  /** column name */
  TotalTaxCollected = 'total_tax_collected',
  /** column name */
  TotalTransfersIn = 'total_transfers_in',
  /** column name */
  TotalTransfersOut = 'total_transfers_out',
  /** column name */
  TotalTransfersRejected = 'total_transfers_rejected',
  /** column name */
  TotalVolume = 'total_volume',
  /** column name */
  TransfersInCount = 'transfers_in_count',
  /** column name */
  TransfersOutCount = 'transfers_out_count',
  /** column name */
  TransfersRejectedCount = 'transfers_rejected_count',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Domain_Stddev_Fields = {
  __typename?: 'domain_stddev_fields';
  bundle_count?: Maybe<Scalars['Float']['output']>;
  completed_epoch?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  last_domain_block_number?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  runtime_id?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Domain_Stddev_Pop_Fields = {
  __typename?: 'domain_stddev_pop_fields';
  bundle_count?: Maybe<Scalars['Float']['output']>;
  completed_epoch?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  last_domain_block_number?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  runtime_id?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Domain_Stddev_Samp_Fields = {
  __typename?: 'domain_stddev_samp_fields';
  bundle_count?: Maybe<Scalars['Float']['output']>;
  completed_epoch?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  last_domain_block_number?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  runtime_id?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "domain" */
export type Domain_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Domain_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Domain_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  bundle_count?: InputMaybe<Scalars['Int']['input']>;
  completed_epoch?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['Int']['input']>;
  current_storage_fee_deposit?: InputMaybe<Scalars['numeric']['input']>;
  current_total_stake?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_bundle_at?: InputMaybe<Scalars['Int']['input']>;
  last_domain_block_number?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rejected_transfers_claimed_count?: InputMaybe<Scalars['Int']['input']>;
  runtime?: InputMaybe<Scalars['String']['input']>;
  runtime_id?: InputMaybe<Scalars['Int']['input']>;
  runtime_info?: InputMaybe<Scalars['String']['input']>;
  sort_id?: InputMaybe<Scalars['Int']['input']>;
  total_burned_balance?: InputMaybe<Scalars['numeric']['input']>;
  total_consensus_storage_fee?: InputMaybe<Scalars['numeric']['input']>;
  total_deposits?: InputMaybe<Scalars['numeric']['input']>;
  total_domain_execution_fee?: InputMaybe<Scalars['numeric']['input']>;
  total_rejected_transfers_claimed?: InputMaybe<Scalars['numeric']['input']>;
  total_rewards_collected?: InputMaybe<Scalars['numeric']['input']>;
  total_tax_collected?: InputMaybe<Scalars['numeric']['input']>;
  total_transfers_in?: InputMaybe<Scalars['numeric']['input']>;
  total_transfers_out?: InputMaybe<Scalars['numeric']['input']>;
  total_transfers_rejected?: InputMaybe<Scalars['numeric']['input']>;
  total_volume?: InputMaybe<Scalars['numeric']['input']>;
  transfers_in_count?: InputMaybe<Scalars['Int']['input']>;
  transfers_out_count?: InputMaybe<Scalars['Int']['input']>;
  transfers_rejected_count?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Domain_Sum_Fields = {
  __typename?: 'domain_sum_fields';
  bundle_count?: Maybe<Scalars['Int']['output']>;
  completed_epoch?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  current_total_stake?: Maybe<Scalars['numeric']['output']>;
  last_bundle_at?: Maybe<Scalars['Int']['output']>;
  last_domain_block_number?: Maybe<Scalars['Int']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Int']['output']>;
  runtime_id?: Maybe<Scalars['Int']['output']>;
  sort_id?: Maybe<Scalars['Int']['output']>;
  total_burned_balance?: Maybe<Scalars['numeric']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['numeric']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['numeric']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['numeric']['output']>;
  total_rewards_collected?: Maybe<Scalars['numeric']['output']>;
  total_tax_collected?: Maybe<Scalars['numeric']['output']>;
  total_transfers_in?: Maybe<Scalars['numeric']['output']>;
  total_transfers_out?: Maybe<Scalars['numeric']['output']>;
  total_transfers_rejected?: Maybe<Scalars['numeric']['output']>;
  total_volume?: Maybe<Scalars['numeric']['output']>;
  transfers_in_count?: Maybe<Scalars['Int']['output']>;
  transfers_out_count?: Maybe<Scalars['Int']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Domain_Var_Pop_Fields = {
  __typename?: 'domain_var_pop_fields';
  bundle_count?: Maybe<Scalars['Float']['output']>;
  completed_epoch?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  last_domain_block_number?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  runtime_id?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Domain_Var_Samp_Fields = {
  __typename?: 'domain_var_samp_fields';
  bundle_count?: Maybe<Scalars['Float']['output']>;
  completed_epoch?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  last_domain_block_number?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  runtime_id?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Domain_Variance_Fields = {
  __typename?: 'domain_variance_fields';
  bundle_count?: Maybe<Scalars['Float']['output']>;
  completed_epoch?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  last_domain_block_number?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  runtime_id?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nominator" */
export type Nominator = {
  __typename?: 'nominator';
  /** An object relationship */
  account?: Maybe<Account>;
  account_id: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  deposits: Array<Deposit>;
  /** An aggregate relationship */
  deposits_aggregate: Deposit_Aggregate;
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  known_shares: Scalars['numeric']['output'];
  known_storage_fee_deposit: Scalars['numeric']['output'];
  /** An object relationship */
  operator?: Maybe<Operator>;
  operator_id: Scalars['String']['output'];
  pending_amount: Scalars['numeric']['output'];
  pending_effective_domain_epoch: Scalars['Int']['output'];
  pending_shares: Scalars['numeric']['output'];
  pending_storage_fee_deposit: Scalars['numeric']['output'];
  pending_storage_fee_refund: Scalars['numeric']['output'];
  status: Scalars['String']['output'];
  total_deposits: Scalars['numeric']['output'];
  total_storage_fee_refund: Scalars['numeric']['output'];
  total_withdrawal_amounts: Scalars['numeric']['output'];
  unlock_at_confirmed_domain_block_number: Array<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  withdrawals: Array<Withdrawal>;
  /** An aggregate relationship */
  withdrawals_aggregate: Withdrawal_Aggregate;
};


/** columns and relationships of "nominator" */
export type NominatorDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


/** columns and relationships of "nominator" */
export type NominatorDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


/** columns and relationships of "nominator" */
export type NominatorWithdrawalsArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};


/** columns and relationships of "nominator" */
export type NominatorWithdrawals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};

/** aggregated selection of "nominator" */
export type Nominator_Aggregate = {
  __typename?: 'nominator_aggregate';
  aggregate?: Maybe<Nominator_Aggregate_Fields>;
  nodes: Array<Nominator>;
};

export type Nominator_Aggregate_Bool_Exp = {
  count?: InputMaybe<Nominator_Aggregate_Bool_Exp_Count>;
};

export type Nominator_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nominator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nominator_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nominator" */
export type Nominator_Aggregate_Fields = {
  __typename?: 'nominator_aggregate_fields';
  avg?: Maybe<Nominator_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nominator_Max_Fields>;
  min?: Maybe<Nominator_Min_Fields>;
  stddev?: Maybe<Nominator_Stddev_Fields>;
  stddev_pop?: Maybe<Nominator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nominator_Stddev_Samp_Fields>;
  sum?: Maybe<Nominator_Sum_Fields>;
  var_pop?: Maybe<Nominator_Var_Pop_Fields>;
  var_samp?: Maybe<Nominator_Var_Samp_Fields>;
  variance?: Maybe<Nominator_Variance_Fields>;
};


/** aggregate fields of "nominator" */
export type Nominator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nominator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nominator" */
export type Nominator_Aggregate_Order_By = {
  avg?: InputMaybe<Nominator_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nominator_Max_Order_By>;
  min?: InputMaybe<Nominator_Min_Order_By>;
  stddev?: InputMaybe<Nominator_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nominator_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nominator_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nominator_Sum_Order_By>;
  var_pop?: InputMaybe<Nominator_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nominator_Var_Samp_Order_By>;
  variance?: InputMaybe<Nominator_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nominator_Avg_Fields = {
  __typename?: 'nominator_avg_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  known_shares?: Maybe<Scalars['Float']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_amount?: Maybe<Scalars['Float']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Float']['output']>;
  pending_shares?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nominator" */
export type Nominator_Avg_Order_By = {
  created_at?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nominator". All fields are combined with a logical 'AND'. */
export type Nominator_Bool_Exp = {
  _and?: InputMaybe<Array<Nominator_Bool_Exp>>;
  _not?: InputMaybe<Nominator_Bool_Exp>;
  _or?: InputMaybe<Array<Nominator_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Int_Comparison_Exp>;
  deposits?: InputMaybe<Deposit_Bool_Exp>;
  deposits_aggregate?: InputMaybe<Deposit_Aggregate_Bool_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  known_shares?: InputMaybe<Numeric_Comparison_Exp>;
  known_storage_fee_deposit?: InputMaybe<Numeric_Comparison_Exp>;
  operator?: InputMaybe<Operator_Bool_Exp>;
  operator_id?: InputMaybe<String_Comparison_Exp>;
  pending_amount?: InputMaybe<Numeric_Comparison_Exp>;
  pending_effective_domain_epoch?: InputMaybe<Int_Comparison_Exp>;
  pending_shares?: InputMaybe<Numeric_Comparison_Exp>;
  pending_storage_fee_deposit?: InputMaybe<Numeric_Comparison_Exp>;
  pending_storage_fee_refund?: InputMaybe<Numeric_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  total_deposits?: InputMaybe<Numeric_Comparison_Exp>;
  total_storage_fee_refund?: InputMaybe<Numeric_Comparison_Exp>;
  total_withdrawal_amounts?: InputMaybe<Numeric_Comparison_Exp>;
  unlock_at_confirmed_domain_block_number?: InputMaybe<Int_Array_Comparison_Exp>;
  updated_at?: InputMaybe<Int_Comparison_Exp>;
  withdrawals?: InputMaybe<Withdrawal_Bool_Exp>;
  withdrawals_aggregate?: InputMaybe<Withdrawal_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Nominator_Max_Fields = {
  __typename?: 'nominator_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  known_shares?: Maybe<Scalars['numeric']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  pending_amount?: Maybe<Scalars['numeric']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Int']['output']>;
  pending_shares?: Maybe<Scalars['numeric']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['numeric']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['numeric']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['numeric']['output']>;
  unlock_at_confirmed_domain_block_number?: Maybe<Array<Scalars['Int']['output']>>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "nominator" */
export type Nominator_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  unlock_at_confirmed_domain_block_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nominator_Min_Fields = {
  __typename?: 'nominator_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  known_shares?: Maybe<Scalars['numeric']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  pending_amount?: Maybe<Scalars['numeric']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Int']['output']>;
  pending_shares?: Maybe<Scalars['numeric']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['numeric']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['numeric']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['numeric']['output']>;
  unlock_at_confirmed_domain_block_number?: Maybe<Array<Scalars['Int']['output']>>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "nominator" */
export type Nominator_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  unlock_at_confirmed_domain_block_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nominator". */
export type Nominator_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deposits_aggregate?: InputMaybe<Deposit_Aggregate_Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  operator?: InputMaybe<Operator_Order_By>;
  operator_id?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  unlock_at_confirmed_domain_block_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  withdrawals_aggregate?: InputMaybe<Withdrawal_Aggregate_Order_By>;
};

/** select columns of table "nominator" */
export enum Nominator_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  Id = 'id',
  /** column name */
  KnownShares = 'known_shares',
  /** column name */
  KnownStorageFeeDeposit = 'known_storage_fee_deposit',
  /** column name */
  OperatorId = 'operator_id',
  /** column name */
  PendingAmount = 'pending_amount',
  /** column name */
  PendingEffectiveDomainEpoch = 'pending_effective_domain_epoch',
  /** column name */
  PendingShares = 'pending_shares',
  /** column name */
  PendingStorageFeeDeposit = 'pending_storage_fee_deposit',
  /** column name */
  PendingStorageFeeRefund = 'pending_storage_fee_refund',
  /** column name */
  Status = 'status',
  /** column name */
  TotalDeposits = 'total_deposits',
  /** column name */
  TotalStorageFeeRefund = 'total_storage_fee_refund',
  /** column name */
  TotalWithdrawalAmounts = 'total_withdrawal_amounts',
  /** column name */
  UnlockAtConfirmedDomainBlockNumber = 'unlock_at_confirmed_domain_block_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Nominator_Stddev_Fields = {
  __typename?: 'nominator_stddev_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  known_shares?: Maybe<Scalars['Float']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_amount?: Maybe<Scalars['Float']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Float']['output']>;
  pending_shares?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nominator" */
export type Nominator_Stddev_Order_By = {
  created_at?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nominator_Stddev_Pop_Fields = {
  __typename?: 'nominator_stddev_pop_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  known_shares?: Maybe<Scalars['Float']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_amount?: Maybe<Scalars['Float']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Float']['output']>;
  pending_shares?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nominator" */
export type Nominator_Stddev_Pop_Order_By = {
  created_at?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nominator_Stddev_Samp_Fields = {
  __typename?: 'nominator_stddev_samp_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  known_shares?: Maybe<Scalars['Float']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_amount?: Maybe<Scalars['Float']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Float']['output']>;
  pending_shares?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nominator" */
export type Nominator_Stddev_Samp_Order_By = {
  created_at?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nominator" */
export type Nominator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nominator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nominator_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Int']['input']>;
  domain_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  known_shares?: InputMaybe<Scalars['numeric']['input']>;
  known_storage_fee_deposit?: InputMaybe<Scalars['numeric']['input']>;
  operator_id?: InputMaybe<Scalars['String']['input']>;
  pending_amount?: InputMaybe<Scalars['numeric']['input']>;
  pending_effective_domain_epoch?: InputMaybe<Scalars['Int']['input']>;
  pending_shares?: InputMaybe<Scalars['numeric']['input']>;
  pending_storage_fee_deposit?: InputMaybe<Scalars['numeric']['input']>;
  pending_storage_fee_refund?: InputMaybe<Scalars['numeric']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_deposits?: InputMaybe<Scalars['numeric']['input']>;
  total_storage_fee_refund?: InputMaybe<Scalars['numeric']['input']>;
  total_withdrawal_amounts?: InputMaybe<Scalars['numeric']['input']>;
  unlock_at_confirmed_domain_block_number?: InputMaybe<Array<Scalars['Int']['input']>>;
  updated_at?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Nominator_Sum_Fields = {
  __typename?: 'nominator_sum_fields';
  created_at?: Maybe<Scalars['Int']['output']>;
  known_shares?: Maybe<Scalars['numeric']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  pending_amount?: Maybe<Scalars['numeric']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Int']['output']>;
  pending_shares?: Maybe<Scalars['numeric']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['numeric']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['numeric']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "nominator" */
export type Nominator_Sum_Order_By = {
  created_at?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nominator_Var_Pop_Fields = {
  __typename?: 'nominator_var_pop_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  known_shares?: Maybe<Scalars['Float']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_amount?: Maybe<Scalars['Float']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Float']['output']>;
  pending_shares?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nominator" */
export type Nominator_Var_Pop_Order_By = {
  created_at?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nominator_Var_Samp_Fields = {
  __typename?: 'nominator_var_samp_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  known_shares?: Maybe<Scalars['Float']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_amount?: Maybe<Scalars['Float']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Float']['output']>;
  pending_shares?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nominator" */
export type Nominator_Var_Samp_Order_By = {
  created_at?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nominator_Variance_Fields = {
  __typename?: 'nominator_variance_fields';
  created_at?: Maybe<Scalars['Float']['output']>;
  known_shares?: Maybe<Scalars['Float']['output']>;
  known_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_amount?: Maybe<Scalars['Float']['output']>;
  pending_effective_domain_epoch?: Maybe<Scalars['Float']['output']>;
  pending_shares?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  pending_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_storage_fee_refund?: Maybe<Scalars['Float']['output']>;
  total_withdrawal_amounts?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nominator" */
export type Nominator_Variance_Order_By = {
  created_at?: InputMaybe<Order_By>;
  known_shares?: InputMaybe<Order_By>;
  known_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_amount?: InputMaybe<Order_By>;
  pending_effective_domain_epoch?: InputMaybe<Order_By>;
  pending_shares?: InputMaybe<Order_By>;
  pending_storage_fee_deposit?: InputMaybe<Order_By>;
  pending_storage_fee_refund?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_storage_fee_refund?: InputMaybe<Order_By>;
  total_withdrawal_amounts?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** columns and relationships of "operator" */
export type Operator = {
  __typename?: 'operator';
  /** An object relationship */
  account?: Maybe<Account>;
  account_id: Scalars['String']['output'];
  active_epoch_count: Scalars['Int']['output'];
  banner?: Maybe<Scalars['String']['output']>;
  bundle_count: Scalars['Int']['output'];
  /** An array relationship */
  bundles: Array<Bundle_Author>;
  created_at?: Maybe<Scalars['Int']['output']>;
  current_epoch_rewards: Scalars['numeric']['output'];
  current_storage_fee_deposit: Scalars['numeric']['output'];
  current_total_shares: Scalars['numeric']['output'];
  current_total_stake: Scalars['numeric']['output'];
  /** An array relationship */
  deposits: Array<Deposit>;
  /** An aggregate relationship */
  deposits_aggregate: Deposit_Aggregate;
  description?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  email_verified: Scalars['Boolean']['output'];
  github?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  last_bundle_at: Scalars['Int']['output'];
  minimum_nominator_stake: Scalars['numeric']['output'];
  name: Scalars['String']['output'];
  nomination_tax: Scalars['Int']['output'];
  /** An array relationship */
  nominators: Array<Nominator>;
  /** An aggregate relationship */
  nominators_aggregate: Nominator_Aggregate;
  raw_status?: Maybe<Scalars['String']['output']>;
  rejected_transfers_claimed_count: Scalars['Int']['output'];
  signing_key: Scalars['String']['output'];
  sort_id: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  total_burned_balance: Scalars['numeric']['output'];
  total_consensus_storage_fee: Scalars['numeric']['output'];
  total_deposits: Scalars['numeric']['output'];
  total_domain_execution_fee: Scalars['numeric']['output'];
  total_rejected_transfers_claimed: Scalars['numeric']['output'];
  total_rewards_collected: Scalars['numeric']['output'];
  total_tax_collected: Scalars['numeric']['output'];
  total_transfers_in: Scalars['numeric']['output'];
  total_transfers_out: Scalars['numeric']['output'];
  total_transfers_rejected: Scalars['numeric']['output'];
  total_volume: Scalars['numeric']['output'];
  transfers_in_count: Scalars['Int']['output'];
  transfers_out_count: Scalars['Int']['output'];
  transfers_rejected_count: Scalars['Int']['output'];
  twitter?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  website_verified: Scalars['Boolean']['output'];
  /** An array relationship */
  withdrawals: Array<Withdrawal>;
  /** An aggregate relationship */
  withdrawals_aggregate: Withdrawal_Aggregate;
};


/** columns and relationships of "operator" */
export type OperatorBundlesArgs = {
  distinct_on?: InputMaybe<Array<Bundle_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bundle_Author_Order_By>>;
  where?: InputMaybe<Bundle_Author_Bool_Exp>;
};


/** columns and relationships of "operator" */
export type OperatorDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


/** columns and relationships of "operator" */
export type OperatorDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


/** columns and relationships of "operator" */
export type OperatorNominatorsArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


/** columns and relationships of "operator" */
export type OperatorNominators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


/** columns and relationships of "operator" */
export type OperatorWithdrawalsArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};


/** columns and relationships of "operator" */
export type OperatorWithdrawals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};

/** aggregated selection of "operator" */
export type Operator_Aggregate = {
  __typename?: 'operator_aggregate';
  aggregate?: Maybe<Operator_Aggregate_Fields>;
  nodes: Array<Operator>;
};

export type Operator_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Operator_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Operator_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Operator_Aggregate_Bool_Exp_Count>;
};

export type Operator_Aggregate_Bool_Exp_Bool_And = {
  arguments: Operator_Select_Column_Operator_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Operator_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Operator_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Operator_Select_Column_Operator_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Operator_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Operator_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Operator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Operator_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "operator" */
export type Operator_Aggregate_Fields = {
  __typename?: 'operator_aggregate_fields';
  avg?: Maybe<Operator_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Operator_Max_Fields>;
  min?: Maybe<Operator_Min_Fields>;
  stddev?: Maybe<Operator_Stddev_Fields>;
  stddev_pop?: Maybe<Operator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Operator_Stddev_Samp_Fields>;
  sum?: Maybe<Operator_Sum_Fields>;
  var_pop?: Maybe<Operator_Var_Pop_Fields>;
  var_samp?: Maybe<Operator_Var_Samp_Fields>;
  variance?: Maybe<Operator_Variance_Fields>;
};


/** aggregate fields of "operator" */
export type Operator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "operator" */
export type Operator_Aggregate_Order_By = {
  avg?: InputMaybe<Operator_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Operator_Max_Order_By>;
  min?: InputMaybe<Operator_Min_Order_By>;
  stddev?: InputMaybe<Operator_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Operator_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Operator_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Operator_Sum_Order_By>;
  var_pop?: InputMaybe<Operator_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Operator_Var_Samp_Order_By>;
  variance?: InputMaybe<Operator_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Operator_Avg_Fields = {
  __typename?: 'operator_avg_fields';
  active_epoch_count?: Maybe<Scalars['Float']['output']>;
  bundle_count?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_epoch_rewards?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_shares?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['Float']['output']>;
  nomination_tax?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "operator" */
export type Operator_Avg_Order_By = {
  active_epoch_count?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "operator". All fields are combined with a logical 'AND'. */
export type Operator_Bool_Exp = {
  _and?: InputMaybe<Array<Operator_Bool_Exp>>;
  _not?: InputMaybe<Operator_Bool_Exp>;
  _or?: InputMaybe<Array<Operator_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  active_epoch_count?: InputMaybe<Int_Comparison_Exp>;
  banner?: InputMaybe<String_Comparison_Exp>;
  bundle_count?: InputMaybe<Int_Comparison_Exp>;
  bundles?: InputMaybe<Bundle_Author_Bool_Exp>;
  created_at?: InputMaybe<Int_Comparison_Exp>;
  current_epoch_rewards?: InputMaybe<Numeric_Comparison_Exp>;
  current_storage_fee_deposit?: InputMaybe<Numeric_Comparison_Exp>;
  current_total_shares?: InputMaybe<Numeric_Comparison_Exp>;
  current_total_stake?: InputMaybe<Numeric_Comparison_Exp>;
  deposits?: InputMaybe<Deposit_Bool_Exp>;
  deposits_aggregate?: InputMaybe<Deposit_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  discord?: InputMaybe<String_Comparison_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  github?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_bundle_at?: InputMaybe<Int_Comparison_Exp>;
  minimum_nominator_stake?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nomination_tax?: InputMaybe<Int_Comparison_Exp>;
  nominators?: InputMaybe<Nominator_Bool_Exp>;
  nominators_aggregate?: InputMaybe<Nominator_Aggregate_Bool_Exp>;
  raw_status?: InputMaybe<String_Comparison_Exp>;
  rejected_transfers_claimed_count?: InputMaybe<Int_Comparison_Exp>;
  signing_key?: InputMaybe<String_Comparison_Exp>;
  sort_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  total_burned_balance?: InputMaybe<Numeric_Comparison_Exp>;
  total_consensus_storage_fee?: InputMaybe<Numeric_Comparison_Exp>;
  total_deposits?: InputMaybe<Numeric_Comparison_Exp>;
  total_domain_execution_fee?: InputMaybe<Numeric_Comparison_Exp>;
  total_rejected_transfers_claimed?: InputMaybe<Numeric_Comparison_Exp>;
  total_rewards_collected?: InputMaybe<Numeric_Comparison_Exp>;
  total_tax_collected?: InputMaybe<Numeric_Comparison_Exp>;
  total_transfers_in?: InputMaybe<Numeric_Comparison_Exp>;
  total_transfers_out?: InputMaybe<Numeric_Comparison_Exp>;
  total_transfers_rejected?: InputMaybe<Numeric_Comparison_Exp>;
  total_volume?: InputMaybe<Numeric_Comparison_Exp>;
  transfers_in_count?: InputMaybe<Int_Comparison_Exp>;
  transfers_out_count?: InputMaybe<Int_Comparison_Exp>;
  transfers_rejected_count?: InputMaybe<Int_Comparison_Exp>;
  twitter?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Int_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
  website_verified?: InputMaybe<Boolean_Comparison_Exp>;
  withdrawals?: InputMaybe<Withdrawal_Bool_Exp>;
  withdrawals_aggregate?: InputMaybe<Withdrawal_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Operator_Max_Fields = {
  __typename?: 'operator_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  active_epoch_count?: Maybe<Scalars['Int']['output']>;
  banner?: Maybe<Scalars['String']['output']>;
  bundle_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  current_epoch_rewards?: Maybe<Scalars['numeric']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  current_total_shares?: Maybe<Scalars['numeric']['output']>;
  current_total_stake?: Maybe<Scalars['numeric']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_bundle_at?: Maybe<Scalars['Int']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['numeric']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nomination_tax?: Maybe<Scalars['Int']['output']>;
  raw_status?: Maybe<Scalars['String']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Int']['output']>;
  signing_key?: Maybe<Scalars['String']['output']>;
  sort_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_burned_balance?: Maybe<Scalars['numeric']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['numeric']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['numeric']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['numeric']['output']>;
  total_rewards_collected?: Maybe<Scalars['numeric']['output']>;
  total_tax_collected?: Maybe<Scalars['numeric']['output']>;
  total_transfers_in?: Maybe<Scalars['numeric']['output']>;
  total_transfers_out?: Maybe<Scalars['numeric']['output']>;
  total_transfers_rejected?: Maybe<Scalars['numeric']['output']>;
  total_volume?: Maybe<Scalars['numeric']['output']>;
  transfers_in_count?: Maybe<Scalars['Int']['output']>;
  transfers_out_count?: Maybe<Scalars['Int']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Int']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "operator" */
export type Operator_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  active_epoch_count?: InputMaybe<Order_By>;
  banner?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discord?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  github?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  raw_status?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  signing_key?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Operator_Min_Fields = {
  __typename?: 'operator_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  active_epoch_count?: Maybe<Scalars['Int']['output']>;
  banner?: Maybe<Scalars['String']['output']>;
  bundle_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  current_epoch_rewards?: Maybe<Scalars['numeric']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  current_total_shares?: Maybe<Scalars['numeric']['output']>;
  current_total_stake?: Maybe<Scalars['numeric']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_bundle_at?: Maybe<Scalars['Int']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['numeric']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nomination_tax?: Maybe<Scalars['Int']['output']>;
  raw_status?: Maybe<Scalars['String']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Int']['output']>;
  signing_key?: Maybe<Scalars['String']['output']>;
  sort_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_burned_balance?: Maybe<Scalars['numeric']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['numeric']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['numeric']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['numeric']['output']>;
  total_rewards_collected?: Maybe<Scalars['numeric']['output']>;
  total_tax_collected?: Maybe<Scalars['numeric']['output']>;
  total_transfers_in?: Maybe<Scalars['numeric']['output']>;
  total_transfers_out?: Maybe<Scalars['numeric']['output']>;
  total_transfers_rejected?: Maybe<Scalars['numeric']['output']>;
  total_volume?: Maybe<Scalars['numeric']['output']>;
  transfers_in_count?: Maybe<Scalars['Int']['output']>;
  transfers_out_count?: Maybe<Scalars['Int']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Int']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "operator" */
export type Operator_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  active_epoch_count?: InputMaybe<Order_By>;
  banner?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discord?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  github?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  raw_status?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  signing_key?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "operator". */
export type Operator_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  active_epoch_count?: InputMaybe<Order_By>;
  banner?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  bundles_aggregate?: InputMaybe<Bundle_Author_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  deposits_aggregate?: InputMaybe<Deposit_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  discord?: InputMaybe<Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  github?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  nominators_aggregate?: InputMaybe<Nominator_Aggregate_Order_By>;
  raw_status?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  signing_key?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
  website_verified?: InputMaybe<Order_By>;
  withdrawals_aggregate?: InputMaybe<Withdrawal_Aggregate_Order_By>;
};

/** select columns of table "operator" */
export enum Operator_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  ActiveEpochCount = 'active_epoch_count',
  /** column name */
  Banner = 'banner',
  /** column name */
  BundleCount = 'bundle_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentEpochRewards = 'current_epoch_rewards',
  /** column name */
  CurrentStorageFeeDeposit = 'current_storage_fee_deposit',
  /** column name */
  CurrentTotalShares = 'current_total_shares',
  /** column name */
  CurrentTotalStake = 'current_total_stake',
  /** column name */
  Description = 'description',
  /** column name */
  Discord = 'discord',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Github = 'github',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  LastBundleAt = 'last_bundle_at',
  /** column name */
  MinimumNominatorStake = 'minimum_nominator_stake',
  /** column name */
  Name = 'name',
  /** column name */
  NominationTax = 'nomination_tax',
  /** column name */
  RawStatus = 'raw_status',
  /** column name */
  RejectedTransfersClaimedCount = 'rejected_transfers_claimed_count',
  /** column name */
  SigningKey = 'signing_key',
  /** column name */
  SortId = 'sort_id',
  /** column name */
  Status = 'status',
  /** column name */
  TotalBurnedBalance = 'total_burned_balance',
  /** column name */
  TotalConsensusStorageFee = 'total_consensus_storage_fee',
  /** column name */
  TotalDeposits = 'total_deposits',
  /** column name */
  TotalDomainExecutionFee = 'total_domain_execution_fee',
  /** column name */
  TotalRejectedTransfersClaimed = 'total_rejected_transfers_claimed',
  /** column name */
  TotalRewardsCollected = 'total_rewards_collected',
  /** column name */
  TotalTaxCollected = 'total_tax_collected',
  /** column name */
  TotalTransfersIn = 'total_transfers_in',
  /** column name */
  TotalTransfersOut = 'total_transfers_out',
  /** column name */
  TotalTransfersRejected = 'total_transfers_rejected',
  /** column name */
  TotalVolume = 'total_volume',
  /** column name */
  TransfersInCount = 'transfers_in_count',
  /** column name */
  TransfersOutCount = 'transfers_out_count',
  /** column name */
  TransfersRejectedCount = 'transfers_rejected_count',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website',
  /** column name */
  WebsiteVerified = 'website_verified'
}

/** select "operator_aggregate_bool_exp_bool_and_arguments_columns" columns of table "operator" */
export enum Operator_Select_Column_Operator_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  WebsiteVerified = 'website_verified'
}

/** select "operator_aggregate_bool_exp_bool_or_arguments_columns" columns of table "operator" */
export enum Operator_Select_Column_Operator_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  WebsiteVerified = 'website_verified'
}

/** aggregate stddev on columns */
export type Operator_Stddev_Fields = {
  __typename?: 'operator_stddev_fields';
  active_epoch_count?: Maybe<Scalars['Float']['output']>;
  bundle_count?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_epoch_rewards?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_shares?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['Float']['output']>;
  nomination_tax?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "operator" */
export type Operator_Stddev_Order_By = {
  active_epoch_count?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Operator_Stddev_Pop_Fields = {
  __typename?: 'operator_stddev_pop_fields';
  active_epoch_count?: Maybe<Scalars['Float']['output']>;
  bundle_count?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_epoch_rewards?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_shares?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['Float']['output']>;
  nomination_tax?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "operator" */
export type Operator_Stddev_Pop_Order_By = {
  active_epoch_count?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Operator_Stddev_Samp_Fields = {
  __typename?: 'operator_stddev_samp_fields';
  active_epoch_count?: Maybe<Scalars['Float']['output']>;
  bundle_count?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_epoch_rewards?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_shares?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['Float']['output']>;
  nomination_tax?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "operator" */
export type Operator_Stddev_Samp_Order_By = {
  active_epoch_count?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "operator" */
export type Operator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Operator_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  active_epoch_count?: InputMaybe<Scalars['Int']['input']>;
  banner?: InputMaybe<Scalars['String']['input']>;
  bundle_count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['Int']['input']>;
  current_epoch_rewards?: InputMaybe<Scalars['numeric']['input']>;
  current_storage_fee_deposit?: InputMaybe<Scalars['numeric']['input']>;
  current_total_shares?: InputMaybe<Scalars['numeric']['input']>;
  current_total_stake?: InputMaybe<Scalars['numeric']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discord?: InputMaybe<Scalars['String']['input']>;
  domain_id?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_bundle_at?: InputMaybe<Scalars['Int']['input']>;
  minimum_nominator_stake?: InputMaybe<Scalars['numeric']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nomination_tax?: InputMaybe<Scalars['Int']['input']>;
  raw_status?: InputMaybe<Scalars['String']['input']>;
  rejected_transfers_claimed_count?: InputMaybe<Scalars['Int']['input']>;
  signing_key?: InputMaybe<Scalars['String']['input']>;
  sort_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_burned_balance?: InputMaybe<Scalars['numeric']['input']>;
  total_consensus_storage_fee?: InputMaybe<Scalars['numeric']['input']>;
  total_deposits?: InputMaybe<Scalars['numeric']['input']>;
  total_domain_execution_fee?: InputMaybe<Scalars['numeric']['input']>;
  total_rejected_transfers_claimed?: InputMaybe<Scalars['numeric']['input']>;
  total_rewards_collected?: InputMaybe<Scalars['numeric']['input']>;
  total_tax_collected?: InputMaybe<Scalars['numeric']['input']>;
  total_transfers_in?: InputMaybe<Scalars['numeric']['input']>;
  total_transfers_out?: InputMaybe<Scalars['numeric']['input']>;
  total_transfers_rejected?: InputMaybe<Scalars['numeric']['input']>;
  total_volume?: InputMaybe<Scalars['numeric']['input']>;
  transfers_in_count?: InputMaybe<Scalars['Int']['input']>;
  transfers_out_count?: InputMaybe<Scalars['Int']['input']>;
  transfers_rejected_count?: InputMaybe<Scalars['Int']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Int']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Operator_Sum_Fields = {
  __typename?: 'operator_sum_fields';
  active_epoch_count?: Maybe<Scalars['Int']['output']>;
  bundle_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  current_epoch_rewards?: Maybe<Scalars['numeric']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['numeric']['output']>;
  current_total_shares?: Maybe<Scalars['numeric']['output']>;
  current_total_stake?: Maybe<Scalars['numeric']['output']>;
  last_bundle_at?: Maybe<Scalars['Int']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['numeric']['output']>;
  nomination_tax?: Maybe<Scalars['Int']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Int']['output']>;
  sort_id?: Maybe<Scalars['Int']['output']>;
  total_burned_balance?: Maybe<Scalars['numeric']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['numeric']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['numeric']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['numeric']['output']>;
  total_rewards_collected?: Maybe<Scalars['numeric']['output']>;
  total_tax_collected?: Maybe<Scalars['numeric']['output']>;
  total_transfers_in?: Maybe<Scalars['numeric']['output']>;
  total_transfers_out?: Maybe<Scalars['numeric']['output']>;
  total_transfers_rejected?: Maybe<Scalars['numeric']['output']>;
  total_volume?: Maybe<Scalars['numeric']['output']>;
  transfers_in_count?: Maybe<Scalars['Int']['output']>;
  transfers_out_count?: Maybe<Scalars['Int']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "operator" */
export type Operator_Sum_Order_By = {
  active_epoch_count?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "operator_unlocked_funds" */
export type Operator_Unlocked_Funds = {
  __typename?: 'operator_unlocked_funds';
  amount: Scalars['numeric']['output'];
  block_number: Scalars['Int']['output'];
  extrinsic_hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  nominator_account: Scalars['String']['output'];
  nominator_id?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['timestamptz']['output'];
};

/** aggregated selection of "operator_unlocked_funds" */
export type Operator_Unlocked_Funds_Aggregate = {
  __typename?: 'operator_unlocked_funds_aggregate';
  aggregate?: Maybe<Operator_Unlocked_Funds_Aggregate_Fields>;
  nodes: Array<Operator_Unlocked_Funds>;
};

/** aggregate fields of "operator_unlocked_funds" */
export type Operator_Unlocked_Funds_Aggregate_Fields = {
  __typename?: 'operator_unlocked_funds_aggregate_fields';
  avg?: Maybe<Operator_Unlocked_Funds_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Operator_Unlocked_Funds_Max_Fields>;
  min?: Maybe<Operator_Unlocked_Funds_Min_Fields>;
  stddev?: Maybe<Operator_Unlocked_Funds_Stddev_Fields>;
  stddev_pop?: Maybe<Operator_Unlocked_Funds_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Operator_Unlocked_Funds_Stddev_Samp_Fields>;
  sum?: Maybe<Operator_Unlocked_Funds_Sum_Fields>;
  var_pop?: Maybe<Operator_Unlocked_Funds_Var_Pop_Fields>;
  var_samp?: Maybe<Operator_Unlocked_Funds_Var_Samp_Fields>;
  variance?: Maybe<Operator_Unlocked_Funds_Variance_Fields>;
};


/** aggregate fields of "operator_unlocked_funds" */
export type Operator_Unlocked_Funds_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operator_Unlocked_Funds_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Operator_Unlocked_Funds_Avg_Fields = {
  __typename?: 'operator_unlocked_funds_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "operator_unlocked_funds". All fields are combined with a logical 'AND'. */
export type Operator_Unlocked_Funds_Bool_Exp = {
  _and?: InputMaybe<Array<Operator_Unlocked_Funds_Bool_Exp>>;
  _not?: InputMaybe<Operator_Unlocked_Funds_Bool_Exp>;
  _or?: InputMaybe<Array<Operator_Unlocked_Funds_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  extrinsic_hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nominator_account?: InputMaybe<String_Comparison_Exp>;
  nominator_id?: InputMaybe<String_Comparison_Exp>;
  operator_id?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Operator_Unlocked_Funds_Max_Fields = {
  __typename?: 'operator_unlocked_funds_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  extrinsic_hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominator_account?: Maybe<Scalars['String']['output']>;
  nominator_id?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Operator_Unlocked_Funds_Min_Fields = {
  __typename?: 'operator_unlocked_funds_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  extrinsic_hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominator_account?: Maybe<Scalars['String']['output']>;
  nominator_id?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "operator_unlocked_funds". */
export type Operator_Unlocked_Funds_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominator_account?: InputMaybe<Order_By>;
  nominator_id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "operator_unlocked_funds" */
export enum Operator_Unlocked_Funds_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  ExtrinsicHash = 'extrinsic_hash',
  /** column name */
  Id = 'id',
  /** column name */
  NominatorAccount = 'nominator_account',
  /** column name */
  NominatorId = 'nominator_id',
  /** column name */
  OperatorId = 'operator_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Operator_Unlocked_Funds_Stddev_Fields = {
  __typename?: 'operator_unlocked_funds_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Operator_Unlocked_Funds_Stddev_Pop_Fields = {
  __typename?: 'operator_unlocked_funds_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Operator_Unlocked_Funds_Stddev_Samp_Fields = {
  __typename?: 'operator_unlocked_funds_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "operator_unlocked_funds" */
export type Operator_Unlocked_Funds_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operator_Unlocked_Funds_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Operator_Unlocked_Funds_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['Int']['input']>;
  extrinsic_hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nominator_account?: InputMaybe<Scalars['String']['input']>;
  nominator_id?: InputMaybe<Scalars['String']['input']>;
  operator_id?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Operator_Unlocked_Funds_Sum_Fields = {
  __typename?: 'operator_unlocked_funds_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Operator_Unlocked_Funds_Var_Pop_Fields = {
  __typename?: 'operator_unlocked_funds_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Operator_Unlocked_Funds_Var_Samp_Fields = {
  __typename?: 'operator_unlocked_funds_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Operator_Unlocked_Funds_Variance_Fields = {
  __typename?: 'operator_unlocked_funds_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_pop on columns */
export type Operator_Var_Pop_Fields = {
  __typename?: 'operator_var_pop_fields';
  active_epoch_count?: Maybe<Scalars['Float']['output']>;
  bundle_count?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_epoch_rewards?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_shares?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['Float']['output']>;
  nomination_tax?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "operator" */
export type Operator_Var_Pop_Order_By = {
  active_epoch_count?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Operator_Var_Samp_Fields = {
  __typename?: 'operator_var_samp_fields';
  active_epoch_count?: Maybe<Scalars['Float']['output']>;
  bundle_count?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_epoch_rewards?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_shares?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['Float']['output']>;
  nomination_tax?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "operator" */
export type Operator_Var_Samp_Order_By = {
  active_epoch_count?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Operator_Variance_Fields = {
  __typename?: 'operator_variance_fields';
  active_epoch_count?: Maybe<Scalars['Float']['output']>;
  bundle_count?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['Float']['output']>;
  current_epoch_rewards?: Maybe<Scalars['Float']['output']>;
  current_storage_fee_deposit?: Maybe<Scalars['Float']['output']>;
  current_total_shares?: Maybe<Scalars['Float']['output']>;
  current_total_stake?: Maybe<Scalars['Float']['output']>;
  last_bundle_at?: Maybe<Scalars['Float']['output']>;
  minimum_nominator_stake?: Maybe<Scalars['Float']['output']>;
  nomination_tax?: Maybe<Scalars['Float']['output']>;
  rejected_transfers_claimed_count?: Maybe<Scalars['Float']['output']>;
  sort_id?: Maybe<Scalars['Float']['output']>;
  total_burned_balance?: Maybe<Scalars['Float']['output']>;
  total_consensus_storage_fee?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_domain_execution_fee?: Maybe<Scalars['Float']['output']>;
  total_rejected_transfers_claimed?: Maybe<Scalars['Float']['output']>;
  total_rewards_collected?: Maybe<Scalars['Float']['output']>;
  total_tax_collected?: Maybe<Scalars['Float']['output']>;
  total_transfers_in?: Maybe<Scalars['Float']['output']>;
  total_transfers_out?: Maybe<Scalars['Float']['output']>;
  total_transfers_rejected?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
  transfers_in_count?: Maybe<Scalars['Float']['output']>;
  transfers_out_count?: Maybe<Scalars['Float']['output']>;
  transfers_rejected_count?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "operator" */
export type Operator_Variance_Order_By = {
  active_epoch_count?: InputMaybe<Order_By>;
  bundle_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_epoch_rewards?: InputMaybe<Order_By>;
  current_storage_fee_deposit?: InputMaybe<Order_By>;
  current_total_shares?: InputMaybe<Order_By>;
  current_total_stake?: InputMaybe<Order_By>;
  last_bundle_at?: InputMaybe<Order_By>;
  minimum_nominator_stake?: InputMaybe<Order_By>;
  nomination_tax?: InputMaybe<Order_By>;
  rejected_transfers_claimed_count?: InputMaybe<Order_By>;
  sort_id?: InputMaybe<Order_By>;
  total_burned_balance?: InputMaybe<Order_By>;
  total_consensus_storage_fee?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_domain_execution_fee?: InputMaybe<Order_By>;
  total_rejected_transfers_claimed?: InputMaybe<Order_By>;
  total_rewards_collected?: InputMaybe<Order_By>;
  total_tax_collected?: InputMaybe<Order_By>;
  total_transfers_in?: InputMaybe<Order_By>;
  total_transfers_out?: InputMaybe<Order_By>;
  total_transfers_rejected?: InputMaybe<Order_By>;
  total_volume?: InputMaybe<Order_By>;
  transfers_in_count?: InputMaybe<Order_By>;
  transfers_out_count?: InputMaybe<Order_By>;
  transfers_rejected_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "bundle" */
  bundle: Array<Bundle>;
  /** fetch data from the table: "bundle_author" */
  bundle_author: Array<Bundle_Author>;
  /** fetch data from the table: "bundle_author" using primary key columns */
  bundle_author_by_pk?: Maybe<Bundle_Author>;
  /** fetch data from the table: "bundle" using primary key columns */
  bundle_by_pk?: Maybe<Bundle>;
  /** fetch data from the table: "deposit" */
  deposit: Array<Deposit>;
  /** fetch aggregated fields from the table: "deposit" */
  deposit_aggregate: Deposit_Aggregate;
  /** fetch data from the table: "deposit" using primary key columns */
  deposit_by_pk?: Maybe<Deposit>;
  /** fetch data from the table: "domain" */
  domain: Array<Domain>;
  /** fetch aggregated fields from the table: "domain" */
  domain_aggregate: Domain_Aggregate;
  /** fetch data from the table: "domain" using primary key columns */
  domain_by_pk?: Maybe<Domain>;
  /** fetch data from the table: "nominator" */
  nominator: Array<Nominator>;
  /** fetch aggregated fields from the table: "nominator" */
  nominator_aggregate: Nominator_Aggregate;
  /** fetch data from the table: "nominator" using primary key columns */
  nominator_by_pk?: Maybe<Nominator>;
  /** fetch data from the table: "operator" */
  operator: Array<Operator>;
  /** fetch aggregated fields from the table: "operator" */
  operator_aggregate: Operator_Aggregate;
  /** fetch data from the table: "operator" using primary key columns */
  operator_by_pk?: Maybe<Operator>;
  /** fetch data from the table: "operator_unlocked_funds" */
  operator_unlocked_funds: Array<Operator_Unlocked_Funds>;
  /** fetch aggregated fields from the table: "operator_unlocked_funds" */
  operator_unlocked_funds_aggregate: Operator_Unlocked_Funds_Aggregate;
  /** fetch data from the table: "operator_unlocked_funds" using primary key columns */
  operator_unlocked_funds_by_pk?: Maybe<Operator_Unlocked_Funds>;
  /** fetch data from the table: "reward_event" */
  reward_event: Array<Reward_Event>;
  /** fetch aggregated fields from the table: "reward_event" */
  reward_event_aggregate: Reward_Event_Aggregate;
  /** fetch data from the table: "reward_event" using primary key columns */
  reward_event_by_pk?: Maybe<Reward_Event>;
  /** fetch data from the table: "stats" */
  stats: Array<Stats>;
  /** fetch aggregated fields from the table: "stats" */
  stats_aggregate: Stats_Aggregate;
  /** fetch data from the table: "stats" using primary key columns */
  stats_by_pk?: Maybe<Stats>;
  /** fetch data from the table: "stats_per_domain" */
  stats_per_domain: Array<Stats_Per_Domain>;
  /** fetch aggregated fields from the table: "stats_per_domain" */
  stats_per_domain_aggregate: Stats_Per_Domain_Aggregate;
  /** fetch data from the table: "stats_per_domain" using primary key columns */
  stats_per_domain_by_pk?: Maybe<Stats_Per_Domain>;
  /** fetch data from the table: "stats_per_operator" */
  stats_per_operator: Array<Stats_Per_Operator>;
  /** fetch aggregated fields from the table: "stats_per_operator" */
  stats_per_operator_aggregate: Stats_Per_Operator_Aggregate;
  /** fetch data from the table: "stats_per_operator" using primary key columns */
  stats_per_operator_by_pk?: Maybe<Stats_Per_Operator>;
  /** fetch data from the table: "withdrawal" */
  withdrawal: Array<Withdrawal>;
  /** fetch aggregated fields from the table: "withdrawal" */
  withdrawal_aggregate: Withdrawal_Aggregate;
  /** fetch data from the table: "withdrawal" using primary key columns */
  withdrawal_by_pk?: Maybe<Withdrawal>;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBundleArgs = {
  distinct_on?: InputMaybe<Array<Bundle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bundle_Order_By>>;
  where?: InputMaybe<Bundle_Bool_Exp>;
};


export type Query_RootBundle_AuthorArgs = {
  distinct_on?: InputMaybe<Array<Bundle_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bundle_Author_Order_By>>;
  where?: InputMaybe<Bundle_Author_Bool_Exp>;
};


export type Query_RootBundle_Author_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBundle_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDepositArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


export type Query_RootDeposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


export type Query_RootDeposit_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDomainArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


export type Query_RootDomain_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


export type Query_RootDomain_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootNominatorArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


export type Query_RootNominator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


export type Query_RootNominator_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOperatorArgs = {
  distinct_on?: InputMaybe<Array<Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Order_By>>;
  where?: InputMaybe<Operator_Bool_Exp>;
};


export type Query_RootOperator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Order_By>>;
  where?: InputMaybe<Operator_Bool_Exp>;
};


export type Query_RootOperator_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOperator_Unlocked_FundsArgs = {
  distinct_on?: InputMaybe<Array<Operator_Unlocked_Funds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Unlocked_Funds_Order_By>>;
  where?: InputMaybe<Operator_Unlocked_Funds_Bool_Exp>;
};


export type Query_RootOperator_Unlocked_Funds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operator_Unlocked_Funds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Unlocked_Funds_Order_By>>;
  where?: InputMaybe<Operator_Unlocked_Funds_Bool_Exp>;
};


export type Query_RootOperator_Unlocked_Funds_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootReward_EventArgs = {
  distinct_on?: InputMaybe<Array<Reward_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reward_Event_Order_By>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


export type Query_RootReward_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reward_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reward_Event_Order_By>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


export type Query_RootReward_Event_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootStatsArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Order_By>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};


export type Query_RootStats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Order_By>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};


export type Query_RootStats_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootStats_Per_DomainArgs = {
  distinct_on?: InputMaybe<Array<Stats_Per_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Per_Domain_Order_By>>;
  where?: InputMaybe<Stats_Per_Domain_Bool_Exp>;
};


export type Query_RootStats_Per_Domain_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Per_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Per_Domain_Order_By>>;
  where?: InputMaybe<Stats_Per_Domain_Bool_Exp>;
};


export type Query_RootStats_Per_Domain_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootStats_Per_OperatorArgs = {
  distinct_on?: InputMaybe<Array<Stats_Per_Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Per_Operator_Order_By>>;
  where?: InputMaybe<Stats_Per_Operator_Bool_Exp>;
};


export type Query_RootStats_Per_Operator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Per_Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Per_Operator_Order_By>>;
  where?: InputMaybe<Stats_Per_Operator_Bool_Exp>;
};


export type Query_RootStats_Per_Operator_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootWithdrawalArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};


export type Query_RootWithdrawal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};


export type Query_RootWithdrawal_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "reward_event" */
export type Reward_Event = {
  __typename?: 'reward_event';
  amount: Scalars['numeric']['output'];
  block_number: Scalars['Int']['output'];
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id: Scalars['String']['output'];
  extrinsic_hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  operator_id: Scalars['String']['output'];
  timestamp: Scalars['timestamptz']['output'];
};

/** aggregated selection of "reward_event" */
export type Reward_Event_Aggregate = {
  __typename?: 'reward_event_aggregate';
  aggregate?: Maybe<Reward_Event_Aggregate_Fields>;
  nodes: Array<Reward_Event>;
};

export type Reward_Event_Aggregate_Bool_Exp = {
  count?: InputMaybe<Reward_Event_Aggregate_Bool_Exp_Count>;
};

export type Reward_Event_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Reward_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Reward_Event_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "reward_event" */
export type Reward_Event_Aggregate_Fields = {
  __typename?: 'reward_event_aggregate_fields';
  avg?: Maybe<Reward_Event_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Reward_Event_Max_Fields>;
  min?: Maybe<Reward_Event_Min_Fields>;
  stddev?: Maybe<Reward_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Reward_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reward_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Reward_Event_Sum_Fields>;
  var_pop?: Maybe<Reward_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Reward_Event_Var_Samp_Fields>;
  variance?: Maybe<Reward_Event_Variance_Fields>;
};


/** aggregate fields of "reward_event" */
export type Reward_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reward_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "reward_event" */
export type Reward_Event_Aggregate_Order_By = {
  avg?: InputMaybe<Reward_Event_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reward_Event_Max_Order_By>;
  min?: InputMaybe<Reward_Event_Min_Order_By>;
  stddev?: InputMaybe<Reward_Event_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Reward_Event_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Reward_Event_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Reward_Event_Sum_Order_By>;
  var_pop?: InputMaybe<Reward_Event_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Reward_Event_Var_Samp_Order_By>;
  variance?: InputMaybe<Reward_Event_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Reward_Event_Avg_Fields = {
  __typename?: 'reward_event_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "reward_event" */
export type Reward_Event_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reward_event". All fields are combined with a logical 'AND'. */
export type Reward_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Reward_Event_Bool_Exp>>;
  _not?: InputMaybe<Reward_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Reward_Event_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  extrinsic_hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  operator_id?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Reward_Event_Max_Fields = {
  __typename?: 'reward_event_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  extrinsic_hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "reward_event" */
export type Reward_Event_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reward_Event_Min_Fields = {
  __typename?: 'reward_event_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  extrinsic_hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "reward_event" */
export type Reward_Event_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "reward_event". */
export type Reward_Event_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "reward_event" */
export enum Reward_Event_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  ExtrinsicHash = 'extrinsic_hash',
  /** column name */
  Id = 'id',
  /** column name */
  OperatorId = 'operator_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Reward_Event_Stddev_Fields = {
  __typename?: 'reward_event_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "reward_event" */
export type Reward_Event_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reward_Event_Stddev_Pop_Fields = {
  __typename?: 'reward_event_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "reward_event" */
export type Reward_Event_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reward_Event_Stddev_Samp_Fields = {
  __typename?: 'reward_event_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "reward_event" */
export type Reward_Event_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "reward_event" */
export type Reward_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reward_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reward_Event_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['Int']['input']>;
  domain_id?: InputMaybe<Scalars['String']['input']>;
  extrinsic_hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  operator_id?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Reward_Event_Sum_Fields = {
  __typename?: 'reward_event_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "reward_event" */
export type Reward_Event_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Reward_Event_Var_Pop_Fields = {
  __typename?: 'reward_event_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "reward_event" */
export type Reward_Event_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reward_Event_Var_Samp_Fields = {
  __typename?: 'reward_event_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "reward_event" */
export type Reward_Event_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Reward_Event_Variance_Fields = {
  __typename?: 'reward_event_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "reward_event" */
export type Reward_Event_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** columns and relationships of "stats" */
export type Stats = {
  __typename?: 'stats';
  active_operators_count: Scalars['Int']['output'];
  all_time_high_staked: Scalars['numeric']['output'];
  block_number: Scalars['Int']['output'];
  deposits_count: Scalars['Int']['output'];
  domains_count: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  nominators_count: Scalars['Int']['output'];
  operators_count: Scalars['Int']['output'];
  slashed_operators_count: Scalars['Int']['output'];
  timestamp: Scalars['timestamptz']['output'];
  total_deposits: Scalars['numeric']['output'];
  total_fees: Scalars['numeric']['output'];
  total_staked: Scalars['numeric']['output'];
  total_withdrawals: Scalars['numeric']['output'];
  withdrawals_count: Scalars['Int']['output'];
};

/** aggregated selection of "stats" */
export type Stats_Aggregate = {
  __typename?: 'stats_aggregate';
  aggregate?: Maybe<Stats_Aggregate_Fields>;
  nodes: Array<Stats>;
};

/** aggregate fields of "stats" */
export type Stats_Aggregate_Fields = {
  __typename?: 'stats_aggregate_fields';
  avg?: Maybe<Stats_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Stats_Max_Fields>;
  min?: Maybe<Stats_Min_Fields>;
  stddev?: Maybe<Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Stats_Sum_Fields>;
  var_pop?: Maybe<Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Stats_Var_Samp_Fields>;
  variance?: Maybe<Stats_Variance_Fields>;
};


/** aggregate fields of "stats" */
export type Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Stats_Avg_Fields = {
  __typename?: 'stats_avg_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  domains_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "stats". All fields are combined with a logical 'AND'. */
export type Stats_Bool_Exp = {
  _and?: InputMaybe<Array<Stats_Bool_Exp>>;
  _not?: InputMaybe<Stats_Bool_Exp>;
  _or?: InputMaybe<Array<Stats_Bool_Exp>>;
  active_operators_count?: InputMaybe<Int_Comparison_Exp>;
  all_time_high_staked?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  deposits_count?: InputMaybe<Int_Comparison_Exp>;
  domains_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nominators_count?: InputMaybe<Int_Comparison_Exp>;
  operators_count?: InputMaybe<Int_Comparison_Exp>;
  slashed_operators_count?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_deposits?: InputMaybe<Numeric_Comparison_Exp>;
  total_fees?: InputMaybe<Numeric_Comparison_Exp>;
  total_staked?: InputMaybe<Numeric_Comparison_Exp>;
  total_withdrawals?: InputMaybe<Numeric_Comparison_Exp>;
  withdrawals_count?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stats_Max_Fields = {
  __typename?: 'stats_max_fields';
  active_operators_count?: Maybe<Scalars['Int']['output']>;
  all_time_high_staked?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  deposits_count?: Maybe<Scalars['Int']['output']>;
  domains_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominators_count?: Maybe<Scalars['Int']['output']>;
  operators_count?: Maybe<Scalars['Int']['output']>;
  slashed_operators_count?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_staked?: Maybe<Scalars['numeric']['output']>;
  total_withdrawals?: Maybe<Scalars['numeric']['output']>;
  withdrawals_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Stats_Min_Fields = {
  __typename?: 'stats_min_fields';
  active_operators_count?: Maybe<Scalars['Int']['output']>;
  all_time_high_staked?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  deposits_count?: Maybe<Scalars['Int']['output']>;
  domains_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominators_count?: Maybe<Scalars['Int']['output']>;
  operators_count?: Maybe<Scalars['Int']['output']>;
  slashed_operators_count?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_staked?: Maybe<Scalars['numeric']['output']>;
  total_withdrawals?: Maybe<Scalars['numeric']['output']>;
  withdrawals_count?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "stats". */
export type Stats_Order_By = {
  active_operators_count?: InputMaybe<Order_By>;
  all_time_high_staked?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  deposits_count?: InputMaybe<Order_By>;
  domains_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominators_count?: InputMaybe<Order_By>;
  operators_count?: InputMaybe<Order_By>;
  slashed_operators_count?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_fees?: InputMaybe<Order_By>;
  total_staked?: InputMaybe<Order_By>;
  total_withdrawals?: InputMaybe<Order_By>;
  withdrawals_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "stats_per_domain" */
export type Stats_Per_Domain = {
  __typename?: 'stats_per_domain';
  active_operators_count: Scalars['Int']['output'];
  all_time_high_staked: Scalars['numeric']['output'];
  block_number: Scalars['Int']['output'];
  deposits_count: Scalars['Int']['output'];
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  nominators_count: Scalars['Int']['output'];
  operators_count: Scalars['Int']['output'];
  slashed_operators_count: Scalars['Int']['output'];
  timestamp: Scalars['timestamptz']['output'];
  total_deposits: Scalars['numeric']['output'];
  total_fees: Scalars['numeric']['output'];
  total_staked: Scalars['numeric']['output'];
  total_withdrawals: Scalars['numeric']['output'];
  withdrawals_count: Scalars['Int']['output'];
};

/** aggregated selection of "stats_per_domain" */
export type Stats_Per_Domain_Aggregate = {
  __typename?: 'stats_per_domain_aggregate';
  aggregate?: Maybe<Stats_Per_Domain_Aggregate_Fields>;
  nodes: Array<Stats_Per_Domain>;
};

/** aggregate fields of "stats_per_domain" */
export type Stats_Per_Domain_Aggregate_Fields = {
  __typename?: 'stats_per_domain_aggregate_fields';
  avg?: Maybe<Stats_Per_Domain_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Stats_Per_Domain_Max_Fields>;
  min?: Maybe<Stats_Per_Domain_Min_Fields>;
  stddev?: Maybe<Stats_Per_Domain_Stddev_Fields>;
  stddev_pop?: Maybe<Stats_Per_Domain_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stats_Per_Domain_Stddev_Samp_Fields>;
  sum?: Maybe<Stats_Per_Domain_Sum_Fields>;
  var_pop?: Maybe<Stats_Per_Domain_Var_Pop_Fields>;
  var_samp?: Maybe<Stats_Per_Domain_Var_Samp_Fields>;
  variance?: Maybe<Stats_Per_Domain_Variance_Fields>;
};


/** aggregate fields of "stats_per_domain" */
export type Stats_Per_Domain_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stats_Per_Domain_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Stats_Per_Domain_Avg_Fields = {
  __typename?: 'stats_per_domain_avg_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "stats_per_domain". All fields are combined with a logical 'AND'. */
export type Stats_Per_Domain_Bool_Exp = {
  _and?: InputMaybe<Array<Stats_Per_Domain_Bool_Exp>>;
  _not?: InputMaybe<Stats_Per_Domain_Bool_Exp>;
  _or?: InputMaybe<Array<Stats_Per_Domain_Bool_Exp>>;
  active_operators_count?: InputMaybe<Int_Comparison_Exp>;
  all_time_high_staked?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  deposits_count?: InputMaybe<Int_Comparison_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nominators_count?: InputMaybe<Int_Comparison_Exp>;
  operators_count?: InputMaybe<Int_Comparison_Exp>;
  slashed_operators_count?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_deposits?: InputMaybe<Numeric_Comparison_Exp>;
  total_fees?: InputMaybe<Numeric_Comparison_Exp>;
  total_staked?: InputMaybe<Numeric_Comparison_Exp>;
  total_withdrawals?: InputMaybe<Numeric_Comparison_Exp>;
  withdrawals_count?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stats_Per_Domain_Max_Fields = {
  __typename?: 'stats_per_domain_max_fields';
  active_operators_count?: Maybe<Scalars['Int']['output']>;
  all_time_high_staked?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  deposits_count?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominators_count?: Maybe<Scalars['Int']['output']>;
  operators_count?: Maybe<Scalars['Int']['output']>;
  slashed_operators_count?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_staked?: Maybe<Scalars['numeric']['output']>;
  total_withdrawals?: Maybe<Scalars['numeric']['output']>;
  withdrawals_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Stats_Per_Domain_Min_Fields = {
  __typename?: 'stats_per_domain_min_fields';
  active_operators_count?: Maybe<Scalars['Int']['output']>;
  all_time_high_staked?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  deposits_count?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominators_count?: Maybe<Scalars['Int']['output']>;
  operators_count?: Maybe<Scalars['Int']['output']>;
  slashed_operators_count?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_staked?: Maybe<Scalars['numeric']['output']>;
  total_withdrawals?: Maybe<Scalars['numeric']['output']>;
  withdrawals_count?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "stats_per_domain". */
export type Stats_Per_Domain_Order_By = {
  active_operators_count?: InputMaybe<Order_By>;
  all_time_high_staked?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  deposits_count?: InputMaybe<Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominators_count?: InputMaybe<Order_By>;
  operators_count?: InputMaybe<Order_By>;
  slashed_operators_count?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_fees?: InputMaybe<Order_By>;
  total_staked?: InputMaybe<Order_By>;
  total_withdrawals?: InputMaybe<Order_By>;
  withdrawals_count?: InputMaybe<Order_By>;
};

/** select columns of table "stats_per_domain" */
export enum Stats_Per_Domain_Select_Column {
  /** column name */
  ActiveOperatorsCount = 'active_operators_count',
  /** column name */
  AllTimeHighStaked = 'all_time_high_staked',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  DepositsCount = 'deposits_count',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  Id = 'id',
  /** column name */
  NominatorsCount = 'nominators_count',
  /** column name */
  OperatorsCount = 'operators_count',
  /** column name */
  SlashedOperatorsCount = 'slashed_operators_count',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalDeposits = 'total_deposits',
  /** column name */
  TotalFees = 'total_fees',
  /** column name */
  TotalStaked = 'total_staked',
  /** column name */
  TotalWithdrawals = 'total_withdrawals',
  /** column name */
  WithdrawalsCount = 'withdrawals_count'
}

/** aggregate stddev on columns */
export type Stats_Per_Domain_Stddev_Fields = {
  __typename?: 'stats_per_domain_stddev_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Stats_Per_Domain_Stddev_Pop_Fields = {
  __typename?: 'stats_per_domain_stddev_pop_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Stats_Per_Domain_Stddev_Samp_Fields = {
  __typename?: 'stats_per_domain_stddev_samp_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "stats_per_domain" */
export type Stats_Per_Domain_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stats_Per_Domain_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stats_Per_Domain_Stream_Cursor_Value_Input = {
  active_operators_count?: InputMaybe<Scalars['Int']['input']>;
  all_time_high_staked?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['Int']['input']>;
  deposits_count?: InputMaybe<Scalars['Int']['input']>;
  domain_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nominators_count?: InputMaybe<Scalars['Int']['input']>;
  operators_count?: InputMaybe<Scalars['Int']['input']>;
  slashed_operators_count?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  total_deposits?: InputMaybe<Scalars['numeric']['input']>;
  total_fees?: InputMaybe<Scalars['numeric']['input']>;
  total_staked?: InputMaybe<Scalars['numeric']['input']>;
  total_withdrawals?: InputMaybe<Scalars['numeric']['input']>;
  withdrawals_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Stats_Per_Domain_Sum_Fields = {
  __typename?: 'stats_per_domain_sum_fields';
  active_operators_count?: Maybe<Scalars['Int']['output']>;
  all_time_high_staked?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  deposits_count?: Maybe<Scalars['Int']['output']>;
  nominators_count?: Maybe<Scalars['Int']['output']>;
  operators_count?: Maybe<Scalars['Int']['output']>;
  slashed_operators_count?: Maybe<Scalars['Int']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_staked?: Maybe<Scalars['numeric']['output']>;
  total_withdrawals?: Maybe<Scalars['numeric']['output']>;
  withdrawals_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Stats_Per_Domain_Var_Pop_Fields = {
  __typename?: 'stats_per_domain_var_pop_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Stats_Per_Domain_Var_Samp_Fields = {
  __typename?: 'stats_per_domain_var_samp_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Stats_Per_Domain_Variance_Fields = {
  __typename?: 'stats_per_domain_variance_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "stats_per_operator" */
export type Stats_Per_Operator = {
  __typename?: 'stats_per_operator';
  all_time_high_staked: Scalars['numeric']['output'];
  block_number: Scalars['Int']['output'];
  deposits_count: Scalars['Int']['output'];
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  nominators_count: Scalars['Int']['output'];
  /** An object relationship */
  operator?: Maybe<Operator>;
  operator_id: Scalars['String']['output'];
  timestamp: Scalars['timestamptz']['output'];
  total_deposits: Scalars['numeric']['output'];
  total_fees: Scalars['numeric']['output'];
  total_staked: Scalars['numeric']['output'];
  total_withdrawals: Scalars['numeric']['output'];
  withdrawals_count: Scalars['Int']['output'];
};

/** aggregated selection of "stats_per_operator" */
export type Stats_Per_Operator_Aggregate = {
  __typename?: 'stats_per_operator_aggregate';
  aggregate?: Maybe<Stats_Per_Operator_Aggregate_Fields>;
  nodes: Array<Stats_Per_Operator>;
};

/** aggregate fields of "stats_per_operator" */
export type Stats_Per_Operator_Aggregate_Fields = {
  __typename?: 'stats_per_operator_aggregate_fields';
  avg?: Maybe<Stats_Per_Operator_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Stats_Per_Operator_Max_Fields>;
  min?: Maybe<Stats_Per_Operator_Min_Fields>;
  stddev?: Maybe<Stats_Per_Operator_Stddev_Fields>;
  stddev_pop?: Maybe<Stats_Per_Operator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stats_Per_Operator_Stddev_Samp_Fields>;
  sum?: Maybe<Stats_Per_Operator_Sum_Fields>;
  var_pop?: Maybe<Stats_Per_Operator_Var_Pop_Fields>;
  var_samp?: Maybe<Stats_Per_Operator_Var_Samp_Fields>;
  variance?: Maybe<Stats_Per_Operator_Variance_Fields>;
};


/** aggregate fields of "stats_per_operator" */
export type Stats_Per_Operator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stats_Per_Operator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Stats_Per_Operator_Avg_Fields = {
  __typename?: 'stats_per_operator_avg_fields';
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "stats_per_operator". All fields are combined with a logical 'AND'. */
export type Stats_Per_Operator_Bool_Exp = {
  _and?: InputMaybe<Array<Stats_Per_Operator_Bool_Exp>>;
  _not?: InputMaybe<Stats_Per_Operator_Bool_Exp>;
  _or?: InputMaybe<Array<Stats_Per_Operator_Bool_Exp>>;
  all_time_high_staked?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  deposits_count?: InputMaybe<Int_Comparison_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nominators_count?: InputMaybe<Int_Comparison_Exp>;
  operator?: InputMaybe<Operator_Bool_Exp>;
  operator_id?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_deposits?: InputMaybe<Numeric_Comparison_Exp>;
  total_fees?: InputMaybe<Numeric_Comparison_Exp>;
  total_staked?: InputMaybe<Numeric_Comparison_Exp>;
  total_withdrawals?: InputMaybe<Numeric_Comparison_Exp>;
  withdrawals_count?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stats_Per_Operator_Max_Fields = {
  __typename?: 'stats_per_operator_max_fields';
  all_time_high_staked?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  deposits_count?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominators_count?: Maybe<Scalars['Int']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_staked?: Maybe<Scalars['numeric']['output']>;
  total_withdrawals?: Maybe<Scalars['numeric']['output']>;
  withdrawals_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Stats_Per_Operator_Min_Fields = {
  __typename?: 'stats_per_operator_min_fields';
  all_time_high_staked?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  deposits_count?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominators_count?: Maybe<Scalars['Int']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_staked?: Maybe<Scalars['numeric']['output']>;
  total_withdrawals?: Maybe<Scalars['numeric']['output']>;
  withdrawals_count?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "stats_per_operator". */
export type Stats_Per_Operator_Order_By = {
  all_time_high_staked?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  deposits_count?: InputMaybe<Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominators_count?: InputMaybe<Order_By>;
  operator?: InputMaybe<Operator_Order_By>;
  operator_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_deposits?: InputMaybe<Order_By>;
  total_fees?: InputMaybe<Order_By>;
  total_staked?: InputMaybe<Order_By>;
  total_withdrawals?: InputMaybe<Order_By>;
  withdrawals_count?: InputMaybe<Order_By>;
};

/** select columns of table "stats_per_operator" */
export enum Stats_Per_Operator_Select_Column {
  /** column name */
  AllTimeHighStaked = 'all_time_high_staked',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  DepositsCount = 'deposits_count',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  Id = 'id',
  /** column name */
  NominatorsCount = 'nominators_count',
  /** column name */
  OperatorId = 'operator_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalDeposits = 'total_deposits',
  /** column name */
  TotalFees = 'total_fees',
  /** column name */
  TotalStaked = 'total_staked',
  /** column name */
  TotalWithdrawals = 'total_withdrawals',
  /** column name */
  WithdrawalsCount = 'withdrawals_count'
}

/** aggregate stddev on columns */
export type Stats_Per_Operator_Stddev_Fields = {
  __typename?: 'stats_per_operator_stddev_fields';
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Stats_Per_Operator_Stddev_Pop_Fields = {
  __typename?: 'stats_per_operator_stddev_pop_fields';
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Stats_Per_Operator_Stddev_Samp_Fields = {
  __typename?: 'stats_per_operator_stddev_samp_fields';
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "stats_per_operator" */
export type Stats_Per_Operator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stats_Per_Operator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stats_Per_Operator_Stream_Cursor_Value_Input = {
  all_time_high_staked?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['Int']['input']>;
  deposits_count?: InputMaybe<Scalars['Int']['input']>;
  domain_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nominators_count?: InputMaybe<Scalars['Int']['input']>;
  operator_id?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  total_deposits?: InputMaybe<Scalars['numeric']['input']>;
  total_fees?: InputMaybe<Scalars['numeric']['input']>;
  total_staked?: InputMaybe<Scalars['numeric']['input']>;
  total_withdrawals?: InputMaybe<Scalars['numeric']['input']>;
  withdrawals_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Stats_Per_Operator_Sum_Fields = {
  __typename?: 'stats_per_operator_sum_fields';
  all_time_high_staked?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  deposits_count?: Maybe<Scalars['Int']['output']>;
  nominators_count?: Maybe<Scalars['Int']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_staked?: Maybe<Scalars['numeric']['output']>;
  total_withdrawals?: Maybe<Scalars['numeric']['output']>;
  withdrawals_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Stats_Per_Operator_Var_Pop_Fields = {
  __typename?: 'stats_per_operator_var_pop_fields';
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Stats_Per_Operator_Var_Samp_Fields = {
  __typename?: 'stats_per_operator_var_samp_fields';
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Stats_Per_Operator_Variance_Fields = {
  __typename?: 'stats_per_operator_variance_fields';
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** select columns of table "stats" */
export enum Stats_Select_Column {
  /** column name */
  ActiveOperatorsCount = 'active_operators_count',
  /** column name */
  AllTimeHighStaked = 'all_time_high_staked',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  DepositsCount = 'deposits_count',
  /** column name */
  DomainsCount = 'domains_count',
  /** column name */
  Id = 'id',
  /** column name */
  NominatorsCount = 'nominators_count',
  /** column name */
  OperatorsCount = 'operators_count',
  /** column name */
  SlashedOperatorsCount = 'slashed_operators_count',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalDeposits = 'total_deposits',
  /** column name */
  TotalFees = 'total_fees',
  /** column name */
  TotalStaked = 'total_staked',
  /** column name */
  TotalWithdrawals = 'total_withdrawals',
  /** column name */
  WithdrawalsCount = 'withdrawals_count'
}

/** aggregate stddev on columns */
export type Stats_Stddev_Fields = {
  __typename?: 'stats_stddev_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  domains_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Stats_Stddev_Pop_Fields = {
  __typename?: 'stats_stddev_pop_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  domains_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Stats_Stddev_Samp_Fields = {
  __typename?: 'stats_stddev_samp_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  domains_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "stats" */
export type Stats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stats_Stream_Cursor_Value_Input = {
  active_operators_count?: InputMaybe<Scalars['Int']['input']>;
  all_time_high_staked?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['Int']['input']>;
  deposits_count?: InputMaybe<Scalars['Int']['input']>;
  domains_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nominators_count?: InputMaybe<Scalars['Int']['input']>;
  operators_count?: InputMaybe<Scalars['Int']['input']>;
  slashed_operators_count?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  total_deposits?: InputMaybe<Scalars['numeric']['input']>;
  total_fees?: InputMaybe<Scalars['numeric']['input']>;
  total_staked?: InputMaybe<Scalars['numeric']['input']>;
  total_withdrawals?: InputMaybe<Scalars['numeric']['input']>;
  withdrawals_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Stats_Sum_Fields = {
  __typename?: 'stats_sum_fields';
  active_operators_count?: Maybe<Scalars['Int']['output']>;
  all_time_high_staked?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  deposits_count?: Maybe<Scalars['Int']['output']>;
  domains_count?: Maybe<Scalars['Int']['output']>;
  nominators_count?: Maybe<Scalars['Int']['output']>;
  operators_count?: Maybe<Scalars['Int']['output']>;
  slashed_operators_count?: Maybe<Scalars['Int']['output']>;
  total_deposits?: Maybe<Scalars['numeric']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_staked?: Maybe<Scalars['numeric']['output']>;
  total_withdrawals?: Maybe<Scalars['numeric']['output']>;
  withdrawals_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Stats_Var_Pop_Fields = {
  __typename?: 'stats_var_pop_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  domains_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Stats_Var_Samp_Fields = {
  __typename?: 'stats_var_samp_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  domains_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Stats_Variance_Fields = {
  __typename?: 'stats_variance_fields';
  active_operators_count?: Maybe<Scalars['Float']['output']>;
  all_time_high_staked?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  deposits_count?: Maybe<Scalars['Float']['output']>;
  domains_count?: Maybe<Scalars['Float']['output']>;
  nominators_count?: Maybe<Scalars['Float']['output']>;
  operators_count?: Maybe<Scalars['Float']['output']>;
  slashed_operators_count?: Maybe<Scalars['Float']['output']>;
  total_deposits?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_staked?: Maybe<Scalars['Float']['output']>;
  total_withdrawals?: Maybe<Scalars['Float']['output']>;
  withdrawals_count?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>;
  /** fetch data from the table: "bundle" */
  bundle: Array<Bundle>;
  /** fetch data from the table: "bundle_author" */
  bundle_author: Array<Bundle_Author>;
  /** fetch data from the table: "bundle_author" using primary key columns */
  bundle_author_by_pk?: Maybe<Bundle_Author>;
  /** fetch data from the table in a streaming manner: "bundle_author" */
  bundle_author_stream: Array<Bundle_Author>;
  /** fetch data from the table: "bundle" using primary key columns */
  bundle_by_pk?: Maybe<Bundle>;
  /** fetch data from the table in a streaming manner: "bundle" */
  bundle_stream: Array<Bundle>;
  /** fetch data from the table: "deposit" */
  deposit: Array<Deposit>;
  /** fetch aggregated fields from the table: "deposit" */
  deposit_aggregate: Deposit_Aggregate;
  /** fetch data from the table: "deposit" using primary key columns */
  deposit_by_pk?: Maybe<Deposit>;
  /** fetch data from the table in a streaming manner: "deposit" */
  deposit_stream: Array<Deposit>;
  /** fetch data from the table: "domain" */
  domain: Array<Domain>;
  /** fetch aggregated fields from the table: "domain" */
  domain_aggregate: Domain_Aggregate;
  /** fetch data from the table: "domain" using primary key columns */
  domain_by_pk?: Maybe<Domain>;
  /** fetch data from the table in a streaming manner: "domain" */
  domain_stream: Array<Domain>;
  /** fetch data from the table: "nominator" */
  nominator: Array<Nominator>;
  /** fetch aggregated fields from the table: "nominator" */
  nominator_aggregate: Nominator_Aggregate;
  /** fetch data from the table: "nominator" using primary key columns */
  nominator_by_pk?: Maybe<Nominator>;
  /** fetch data from the table in a streaming manner: "nominator" */
  nominator_stream: Array<Nominator>;
  /** fetch data from the table: "operator" */
  operator: Array<Operator>;
  /** fetch aggregated fields from the table: "operator" */
  operator_aggregate: Operator_Aggregate;
  /** fetch data from the table: "operator" using primary key columns */
  operator_by_pk?: Maybe<Operator>;
  /** fetch data from the table in a streaming manner: "operator" */
  operator_stream: Array<Operator>;
  /** fetch data from the table: "operator_unlocked_funds" */
  operator_unlocked_funds: Array<Operator_Unlocked_Funds>;
  /** fetch aggregated fields from the table: "operator_unlocked_funds" */
  operator_unlocked_funds_aggregate: Operator_Unlocked_Funds_Aggregate;
  /** fetch data from the table: "operator_unlocked_funds" using primary key columns */
  operator_unlocked_funds_by_pk?: Maybe<Operator_Unlocked_Funds>;
  /** fetch data from the table in a streaming manner: "operator_unlocked_funds" */
  operator_unlocked_funds_stream: Array<Operator_Unlocked_Funds>;
  /** fetch data from the table: "reward_event" */
  reward_event: Array<Reward_Event>;
  /** fetch aggregated fields from the table: "reward_event" */
  reward_event_aggregate: Reward_Event_Aggregate;
  /** fetch data from the table: "reward_event" using primary key columns */
  reward_event_by_pk?: Maybe<Reward_Event>;
  /** fetch data from the table in a streaming manner: "reward_event" */
  reward_event_stream: Array<Reward_Event>;
  /** fetch data from the table: "stats" */
  stats: Array<Stats>;
  /** fetch aggregated fields from the table: "stats" */
  stats_aggregate: Stats_Aggregate;
  /** fetch data from the table: "stats" using primary key columns */
  stats_by_pk?: Maybe<Stats>;
  /** fetch data from the table: "stats_per_domain" */
  stats_per_domain: Array<Stats_Per_Domain>;
  /** fetch aggregated fields from the table: "stats_per_domain" */
  stats_per_domain_aggregate: Stats_Per_Domain_Aggregate;
  /** fetch data from the table: "stats_per_domain" using primary key columns */
  stats_per_domain_by_pk?: Maybe<Stats_Per_Domain>;
  /** fetch data from the table in a streaming manner: "stats_per_domain" */
  stats_per_domain_stream: Array<Stats_Per_Domain>;
  /** fetch data from the table: "stats_per_operator" */
  stats_per_operator: Array<Stats_Per_Operator>;
  /** fetch aggregated fields from the table: "stats_per_operator" */
  stats_per_operator_aggregate: Stats_Per_Operator_Aggregate;
  /** fetch data from the table: "stats_per_operator" using primary key columns */
  stats_per_operator_by_pk?: Maybe<Stats_Per_Operator>;
  /** fetch data from the table in a streaming manner: "stats_per_operator" */
  stats_per_operator_stream: Array<Stats_Per_Operator>;
  /** fetch data from the table in a streaming manner: "stats" */
  stats_stream: Array<Stats>;
  /** fetch data from the table: "withdrawal" */
  withdrawal: Array<Withdrawal>;
  /** fetch aggregated fields from the table: "withdrawal" */
  withdrawal_aggregate: Withdrawal_Aggregate;
  /** fetch data from the table: "withdrawal" using primary key columns */
  withdrawal_by_pk?: Maybe<Withdrawal>;
  /** fetch data from the table in a streaming manner: "withdrawal" */
  withdrawal_stream: Array<Withdrawal>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootBundleArgs = {
  distinct_on?: InputMaybe<Array<Bundle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bundle_Order_By>>;
  where?: InputMaybe<Bundle_Bool_Exp>;
};


export type Subscription_RootBundle_AuthorArgs = {
  distinct_on?: InputMaybe<Array<Bundle_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bundle_Author_Order_By>>;
  where?: InputMaybe<Bundle_Author_Bool_Exp>;
};


export type Subscription_RootBundle_Author_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBundle_Author_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bundle_Author_Stream_Cursor_Input>>;
  where?: InputMaybe<Bundle_Author_Bool_Exp>;
};


export type Subscription_RootBundle_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBundle_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bundle_Stream_Cursor_Input>>;
  where?: InputMaybe<Bundle_Bool_Exp>;
};


export type Subscription_RootDepositArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


export type Subscription_RootDeposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposit_Order_By>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


export type Subscription_RootDeposit_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDeposit_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Deposit_Stream_Cursor_Input>>;
  where?: InputMaybe<Deposit_Bool_Exp>;
};


export type Subscription_RootDomainArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


export type Subscription_RootDomain_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


export type Subscription_RootDomain_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDomain_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Domain_Stream_Cursor_Input>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


export type Subscription_RootNominatorArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


export type Subscription_RootNominator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nominator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nominator_Order_By>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


export type Subscription_RootNominator_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootNominator_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nominator_Stream_Cursor_Input>>;
  where?: InputMaybe<Nominator_Bool_Exp>;
};


export type Subscription_RootOperatorArgs = {
  distinct_on?: InputMaybe<Array<Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Order_By>>;
  where?: InputMaybe<Operator_Bool_Exp>;
};


export type Subscription_RootOperator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Order_By>>;
  where?: InputMaybe<Operator_Bool_Exp>;
};


export type Subscription_RootOperator_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOperator_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Operator_Stream_Cursor_Input>>;
  where?: InputMaybe<Operator_Bool_Exp>;
};


export type Subscription_RootOperator_Unlocked_FundsArgs = {
  distinct_on?: InputMaybe<Array<Operator_Unlocked_Funds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Unlocked_Funds_Order_By>>;
  where?: InputMaybe<Operator_Unlocked_Funds_Bool_Exp>;
};


export type Subscription_RootOperator_Unlocked_Funds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operator_Unlocked_Funds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operator_Unlocked_Funds_Order_By>>;
  where?: InputMaybe<Operator_Unlocked_Funds_Bool_Exp>;
};


export type Subscription_RootOperator_Unlocked_Funds_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOperator_Unlocked_Funds_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Operator_Unlocked_Funds_Stream_Cursor_Input>>;
  where?: InputMaybe<Operator_Unlocked_Funds_Bool_Exp>;
};


export type Subscription_RootReward_EventArgs = {
  distinct_on?: InputMaybe<Array<Reward_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reward_Event_Order_By>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


export type Subscription_RootReward_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reward_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reward_Event_Order_By>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


export type Subscription_RootReward_Event_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootReward_Event_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reward_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


export type Subscription_RootStatsArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Order_By>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};


export type Subscription_RootStats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Order_By>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};


export type Subscription_RootStats_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStats_Per_DomainArgs = {
  distinct_on?: InputMaybe<Array<Stats_Per_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Per_Domain_Order_By>>;
  where?: InputMaybe<Stats_Per_Domain_Bool_Exp>;
};


export type Subscription_RootStats_Per_Domain_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Per_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Per_Domain_Order_By>>;
  where?: InputMaybe<Stats_Per_Domain_Bool_Exp>;
};


export type Subscription_RootStats_Per_Domain_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStats_Per_Domain_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stats_Per_Domain_Stream_Cursor_Input>>;
  where?: InputMaybe<Stats_Per_Domain_Bool_Exp>;
};


export type Subscription_RootStats_Per_OperatorArgs = {
  distinct_on?: InputMaybe<Array<Stats_Per_Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Per_Operator_Order_By>>;
  where?: InputMaybe<Stats_Per_Operator_Bool_Exp>;
};


export type Subscription_RootStats_Per_Operator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Per_Operator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Per_Operator_Order_By>>;
  where?: InputMaybe<Stats_Per_Operator_Bool_Exp>;
};


export type Subscription_RootStats_Per_Operator_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStats_Per_Operator_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stats_Per_Operator_Stream_Cursor_Input>>;
  where?: InputMaybe<Stats_Per_Operator_Bool_Exp>;
};


export type Subscription_RootStats_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stats_Stream_Cursor_Input>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};


export type Subscription_RootWithdrawalArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};


export type Subscription_RootWithdrawal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Withdrawal_Order_By>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};


export type Subscription_RootWithdrawal_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootWithdrawal_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Withdrawal_Stream_Cursor_Input>>;
  where?: InputMaybe<Withdrawal_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "withdrawal" */
export type Withdrawal = {
  __typename?: 'withdrawal';
  /** An object relationship */
  account?: Maybe<Account>;
  account_id: Scalars['String']['output'];
  block_number: Scalars['Int']['output'];
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id: Scalars['String']['output'];
  extrinsic_hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** An object relationship */
  nominator?: Maybe<Nominator>;
  nominator_id: Scalars['String']['output'];
  /** An object relationship */
  operator?: Maybe<Operator>;
  operator_id: Scalars['String']['output'];
  shares: Scalars['numeric']['output'];
  status: Scalars['String']['output'];
  timestamp: Scalars['timestamptz']['output'];
};

/** aggregated selection of "withdrawal" */
export type Withdrawal_Aggregate = {
  __typename?: 'withdrawal_aggregate';
  aggregate?: Maybe<Withdrawal_Aggregate_Fields>;
  nodes: Array<Withdrawal>;
};

export type Withdrawal_Aggregate_Bool_Exp = {
  count?: InputMaybe<Withdrawal_Aggregate_Bool_Exp_Count>;
};

export type Withdrawal_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Withdrawal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Withdrawal_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "withdrawal" */
export type Withdrawal_Aggregate_Fields = {
  __typename?: 'withdrawal_aggregate_fields';
  avg?: Maybe<Withdrawal_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Withdrawal_Max_Fields>;
  min?: Maybe<Withdrawal_Min_Fields>;
  stddev?: Maybe<Withdrawal_Stddev_Fields>;
  stddev_pop?: Maybe<Withdrawal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Withdrawal_Stddev_Samp_Fields>;
  sum?: Maybe<Withdrawal_Sum_Fields>;
  var_pop?: Maybe<Withdrawal_Var_Pop_Fields>;
  var_samp?: Maybe<Withdrawal_Var_Samp_Fields>;
  variance?: Maybe<Withdrawal_Variance_Fields>;
};


/** aggregate fields of "withdrawal" */
export type Withdrawal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Withdrawal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "withdrawal" */
export type Withdrawal_Aggregate_Order_By = {
  avg?: InputMaybe<Withdrawal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Withdrawal_Max_Order_By>;
  min?: InputMaybe<Withdrawal_Min_Order_By>;
  stddev?: InputMaybe<Withdrawal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Withdrawal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Withdrawal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Withdrawal_Sum_Order_By>;
  var_pop?: InputMaybe<Withdrawal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Withdrawal_Var_Samp_Order_By>;
  variance?: InputMaybe<Withdrawal_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Withdrawal_Avg_Fields = {
  __typename?: 'withdrawal_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "withdrawal" */
export type Withdrawal_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "withdrawal". All fields are combined with a logical 'AND'. */
export type Withdrawal_Bool_Exp = {
  _and?: InputMaybe<Array<Withdrawal_Bool_Exp>>;
  _not?: InputMaybe<Withdrawal_Bool_Exp>;
  _or?: InputMaybe<Array<Withdrawal_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  extrinsic_hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nominator?: InputMaybe<Nominator_Bool_Exp>;
  nominator_id?: InputMaybe<String_Comparison_Exp>;
  operator?: InputMaybe<Operator_Bool_Exp>;
  operator_id?: InputMaybe<String_Comparison_Exp>;
  shares?: InputMaybe<Numeric_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Withdrawal_Max_Fields = {
  __typename?: 'withdrawal_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  extrinsic_hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominator_id?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "withdrawal" */
export type Withdrawal_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominator_id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Withdrawal_Min_Fields = {
  __typename?: 'withdrawal_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['Int']['output']>;
  domain_id?: Maybe<Scalars['String']['output']>;
  extrinsic_hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nominator_id?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "withdrawal" */
export type Withdrawal_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominator_id?: InputMaybe<Order_By>;
  operator_id?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "withdrawal". */
export type Withdrawal_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  extrinsic_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominator?: InputMaybe<Nominator_Order_By>;
  nominator_id?: InputMaybe<Order_By>;
  operator?: InputMaybe<Operator_Order_By>;
  operator_id?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "withdrawal" */
export enum Withdrawal_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  ExtrinsicHash = 'extrinsic_hash',
  /** column name */
  Id = 'id',
  /** column name */
  NominatorId = 'nominator_id',
  /** column name */
  OperatorId = 'operator_id',
  /** column name */
  Shares = 'shares',
  /** column name */
  Status = 'status',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Withdrawal_Stddev_Fields = {
  __typename?: 'withdrawal_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "withdrawal" */
export type Withdrawal_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Withdrawal_Stddev_Pop_Fields = {
  __typename?: 'withdrawal_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "withdrawal" */
export type Withdrawal_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Withdrawal_Stddev_Samp_Fields = {
  __typename?: 'withdrawal_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "withdrawal" */
export type Withdrawal_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "withdrawal" */
export type Withdrawal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Withdrawal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Withdrawal_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  block_number?: InputMaybe<Scalars['Int']['input']>;
  domain_id?: InputMaybe<Scalars['String']['input']>;
  extrinsic_hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nominator_id?: InputMaybe<Scalars['String']['input']>;
  operator_id?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Scalars['numeric']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Withdrawal_Sum_Fields = {
  __typename?: 'withdrawal_sum_fields';
  block_number?: Maybe<Scalars['Int']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "withdrawal" */
export type Withdrawal_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Withdrawal_Var_Pop_Fields = {
  __typename?: 'withdrawal_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "withdrawal" */
export type Withdrawal_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Withdrawal_Var_Samp_Fields = {
  __typename?: 'withdrawal_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "withdrawal" */
export type Withdrawal_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Withdrawal_Variance_Fields = {
  __typename?: 'withdrawal_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "withdrawal" */
export type Withdrawal_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
};

export type OperatorsListQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<Operator_Order_By> | Operator_Order_By;
  where?: InputMaybe<Operator_Bool_Exp>;
}>;


export type OperatorsListQuery = { __typename?: 'query_root', operator_aggregate: { __typename?: 'operator_aggregate', aggregate?: { __typename?: 'operator_aggregate_fields', count: number } | null }, operator: Array<{ __typename?: 'operator', id: string, sort_id: number, account_id: string, domain_id: string, current_epoch_rewards: any, current_total_stake: any, current_total_shares: any, minimum_nominator_stake: any, nomination_tax: number, signing_key: string, status: string, raw_status?: string | null, updated_at?: number | null, domain?: { __typename?: 'domain', id: string, sort_id: number } | null, nominators_aggregate: { __typename?: 'nominator_aggregate', aggregate?: { __typename?: 'nominator_aggregate_fields', count: number } | null }, nominators: Array<{ __typename?: 'nominator', id: string, known_shares: any }> }> };

export type OperatorByIdQueryVariables = Exact<{
  operatorId: Scalars['String']['input'];
}>;


export type OperatorByIdQuery = { __typename?: 'query_root', operator_by_pk?: { __typename?: 'operator', id: string, account_id: string, domain_id: string, current_epoch_rewards: any, current_total_stake: any, current_total_shares: any, minimum_nominator_stake: any, nomination_tax: number, signing_key: string, status: string, raw_status?: string | null, updated_at?: number | null, domain?: { __typename?: 'domain', id: string, sort_id: number } | null } | null };

export type OperatorNominatorsByIdQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<Nominator_Order_By> | Nominator_Order_By;
  where?: InputMaybe<Nominator_Bool_Exp>;
}>;


export type OperatorNominatorsByIdQuery = { __typename?: 'query_root', nominator_aggregate: { __typename?: 'nominator_aggregate', aggregate?: { __typename?: 'nominator_aggregate_fields', count: number } | null }, nominator: Array<{ __typename?: 'nominator', id: string, known_shares: any, account_id: string, domain_id: string }> };

export type NominatorsConnectionQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<Nominator_Order_By> | Nominator_Order_By;
  where?: InputMaybe<Nominator_Bool_Exp>;
}>;


export type NominatorsConnectionQuery = { __typename?: 'query_root', nominator_aggregate: { __typename?: 'nominator_aggregate', aggregate?: { __typename?: 'nominator_aggregate_fields', count: number } | null }, nominator: Array<{ __typename?: 'nominator', id: string, known_shares: any, account_id: string, domain_id: string, updated_at?: number | null, operator?: { __typename?: 'operator', id: string, account_id: string, domain_id: string, current_epoch_rewards: any, current_total_stake: any, current_total_shares: any, minimum_nominator_stake: any, nomination_tax: number, signing_key: string, status: string, raw_status?: string | null, updated_at?: number | null } | null }> };

export type DomainsLastBlockQueryVariables = Exact<{ [key: string]: never; }>;


export type DomainsLastBlockQuery = { __typename?: 'query_root', domain: Array<{ __typename?: 'domain', id: string, last_domain_block_number: number, completed_epoch: number }> };
