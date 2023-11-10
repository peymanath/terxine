export type MongoDbErrors = Record<number, string>;
export const mongoDbErrors: MongoDbErrors = {
  0: 'OK',
  1: 'InternalError',
  2: 'BadValue',
  3: 'OBSOLETE_DuplicateKey',
  4: 'NoSuchKey',
  5: 'GraphContainsCycle',
  6: 'HostUnreachable',
  7: 'HostNotFound',
  8: 'UnknownError',
  9: 'FailedToParse',
  10: 'CannotMutateObject',
  11: 'UserNotFound',
  12: 'UnsupportedFormat',
  13: 'Unauthorized',
  14: 'TypeMismatch',
  15: 'Overflow',
  16: 'InvalidLength',
  17: 'ProtocolError',
  18: 'AuthenticationFailed',
  19: 'CannotReuseObject',
  20: 'IllegalOperation',
  21: 'EmptyArrayOperation',
  22: 'InvalidBSON',
  23: 'AlreadyInitialized',
  24: 'LockTimeout',
  25: 'RemoteValidationError',
  26: 'NamespaceNotFound',
  27: 'IndexNotFound',
  28: 'PathNotViable',
  29: 'NonExistentPath',
  30: 'InvalidPath',
  31: 'RoleNotFound',
  32: 'RolesNotRelated',
  33: 'PrivilegeNotFound',
  34: 'CannotBackfillArray',
  35: 'UserModificationFailed',
  36: 'RemoteChangeDetected',
  37: 'FileRenameFailed',
  38: 'FileNotOpen',
  39: 'FileStreamFailed',
  40: 'ConflictingUpdateOperators',
  41: 'FileAlreadyOpen',
  42: 'LogWriteFailed',
  43: 'CursorNotFound',
  45: 'UserDataInconsistent',
  46: 'LockBusy',
  47: 'NoMatchingDocument',
  48: 'NamespaceExists',
  49: 'InvalidRoleModification',
  50: 'MaxTimeMSExpired',
  51: 'ManualInterventionRequired',
  52: 'DollarPrefixedFieldName',
  53: 'InvalidIdField',
  54: 'NotSingleValueField',
  55: 'InvalidDBRef',
  56: 'EmptyFieldName',
  57: 'DottedFieldName',
  58: 'RoleModificationFailed',
  59: 'CommandNotFound',
  60: 'OBSOLETE_DatabaseNotFound',
  61: 'ShardKeyNotFound',
  62: 'OplogOperationUnsupported',
  63: 'OBSOLETE_StaleShardVersion',
  64: 'WriteConcernFailed',
  65: 'MultipleErrorsOccurred',
  66: 'ImmutableField',
  67: 'CannotCreateIndex',
  68: 'IndexAlreadyExists',
  69: 'AuthSchemaIncompatible',
  70: 'ShardNotFound',
  71: 'ReplicaSetNotFound',
  72: 'InvalidOptions',
  73: 'InvalidNamespace',
  74: 'NodeNotFound',
  75: 'WriteConcernLegacyOK',
  76: 'NoReplicationEnabled',
  77: 'OperationIncomplete',
  78: 'CommandResultSchemaViolation',
  79: 'UnknownReplWriteConcern',
  80: 'RoleDataInconsistent',
  81: 'NoMatchParseContext',
  82: 'NoProgressMade',
  83: 'RemoteResultsUnavailable',
  84: 'OBSOLETE_DuplicateKeyValue',
  85: 'IndexOptionsConflict',
  86: 'IndexKeySpecsConflict',
  87: 'CannotSplit',
  88: 'OBSOLETE_SplitFailed',
  89: 'NetworkTimeout',
  90: 'CallbackCanceled',
  91: 'ShutdownInProgress',
  92: 'SecondaryAheadOfPrimary',
  93: 'InvalidReplicaSetConfig',
  94: 'NotYetInitialized',
  95: 'NotSecondary',
  96: 'OperationFailed',
  97: 'NoProjectionFound',
  98: 'DBPathInUse',
  100: 'UnsatisfiableWriteConcern',
  101: 'OutdatedClient',
  102: 'IncompatibleAuditMetadata',
  103: 'NewReplicaSetConfigurationIncompatible',
  104: 'NodeNotElectable',
  105: 'IncompatibleShardingMetadata',
  106: 'DistributedClockSkewed',
  107: 'LockFailed',
  108: 'InconsistentReplicaSetNames',
  109: 'ConfigurationInProgress',
  110: 'CannotInitializeNodeWithData',
  111: 'NotExactValueField',
  112: 'WriteConflict',
  113: 'InitialSyncFailure',
  114: 'InitialSyncOplogSourceMissing',
  115: 'CommandNotSupported',
  116: 'DocTooLargeForCapped',
  117: 'ConflictingOperationInProgress',
  118: 'NamespaceNotSharded',
  119: 'InvalidSyncSource',
  120: 'OplogStartMissing',
  121: 'DocumentValidationFailure',
  122: 'OBSOLETE_ReadAfterOptimeTimeout',
  123: 'NotAReplicaSet',
  124: 'IncompatibleElectionProtocol',
  125: 'CommandFailed',
  126: 'RPCProtocolNegotiationFailed',
  127: 'UnrecoverableRollbackError',
  128: 'LockNotFound',
  129: 'LockStateChangeFailed',
  130: 'SymbolNotFound',
  132: 'OBSOLETE_ConfigServersInconsistent',
  133: 'FailedToSatisfyReadPreference',
  134: 'ReadConcernMajorityNotAvailableYet',
  135: 'StaleTerm',
  136: 'CappedPositionLost',
  137: 'IncompatibleShardingConfigVersion',
  138: 'RemoteOplogStale',
  139: 'JSInterpreterFailure',
  140: 'InvalidSSLConfiguration',
  141: 'SSLHandshakeFailed',
  142: 'JSUncatchableError',
  143: 'CursorInUse',
  144: 'IncompatibleCatalogManager',
  145: 'PooledConnectionsDropped',
  146: 'ExceededMemoryLimit',
  147: 'ZLibError',
  148: 'ReadConcernMajorityNotEnabled',
  149: 'NoConfigPrimary',
  /**
   * # This error code is obsolete as of version 6.0 and no new places where it is thrown should be
   *     # added. Use StaleConfig.
   */
  150: 'StaleEpoch',
  151: 'OperationCannotBeBatched',
  152: 'OplogOutOfOrder',
  153: 'ChunkTooBig',
  154: 'InconsistentShardIdentity',
  155: 'CannotApplyOplogWhilePrimary',
  156: 'OBSOLETE_NeedsDocumentMove',
  157: 'CanRepairToDowngrade',
  158: 'MustUpgrade',
  159: 'DurationOverflow',
  160: 'MaxStalenessOutOfRange',
  161: 'IncompatibleCollationVersion',
  162: 'CollectionIsEmpty',
  163: 'ZoneStillInUse',
  164: 'InitialSyncActive',
  165: 'ViewDepthLimitExceeded',
  166: 'CommandNotSupportedOnView',
  167: 'OptionNotSupportedOnView',
  168: 'InvalidPipelineOperator',
  169: 'CommandOnShardedViewNotSupportedOnMongod',
  170: 'TooManyMatchingDocuments',
  171: 'CannotIndexParallelArrays',
  172: 'TransportSessionClosed',
  173: 'TransportSessionNotFound',
  174: 'TransportSessionUnknown',
  175: 'QueryPlanKilled',
  176: 'FileOpenFailed',
  177: 'ZoneNotFound',
  178: 'RangeOverlapConflict',
  179: 'WindowsPdhError',
  180: 'BadPerfCounterPath',
  181: 'AmbiguousIndexKeyPattern',
  182: 'InvalidViewDefinition',
  183: 'ClientMetadataMissingField',
  184: 'ClientMetadataAppNameTooLarge',
  185: 'ClientMetadataDocumentTooLarge',
  186: 'ClientMetadataCannotBeMutated',
  187: 'LinearizableReadConcernError',
  188: 'IncompatibleServerVersion',
  189: 'PrimarySteppedDown',
  190: 'MasterSlaveConnectionFailure',
  191: 'OBSOLETE_BalancerLostDistributedLock',
  192: 'FailPointEnabled',
  193: 'NoShardingEnabled',
  194: 'BalancerInterrupted',
  195: 'ViewPipelineMaxSizeExceeded',
  197: 'InvalidIndexSpecificationOption',
  198: 'OBSOLETE_ReceivedOpReplyMessage',
  199: 'ReplicaSetMonitorRemoved',
  200: 'ChunkRangeCleanupPending',
  201: 'CannotBuildIndexKeys',
  202: 'NetworkInterfaceExceededTimeLimit',
  203: 'ShardingStateNotInitialized',
  204: 'TimeProofMismatch',
  205: 'ClusterTimeFailsRateLimiter',
  206: 'NoSuchSession',
  207: 'InvalidUUID',
  208: 'TooManyLocks',
  209: 'StaleClusterTime',
  210: 'CannotVerifyAndSignLogicalTime',
  211: 'KeyNotFound',
  212: 'IncompatibleRollbackAlgorithm',
  213: 'DuplicateSession',
  214: 'AuthenticationRestrictionUnmet',
  215: 'DatabaseDropPending',
  216: 'ElectionInProgress',
  217: 'IncompleteTransactionHistory',
  218: 'UpdateOperationFailed',
  219: 'FTDCPathNotSet',
  220: 'FTDCPathAlreadySet',
  221: 'IndexModified',
  222: 'CloseChangeStream',
  223: 'IllegalOpMsgFlag',
  224: 'QueryFeatureNotAllowed',
  225: 'TransactionTooOld',
  226: 'AtomicityFailure',
  227: 'CannotImplicitlyCreateCollection',
  228: 'SessionTransferIncomplete',
  229: 'MustDowngrade',
  230: 'DNSHostNotFound',
  231: 'DNSProtocolError',
  232: 'MaxSubPipelineDepthExceeded',
  233: 'TooManyDocumentSequences',
  234: 'RetryChangeStream',
  /**
   *  # this function or module is not available on this platform or configuration
   */
  235: 'InternalErrorNotSupported',
  236: 'ForTestingErrorExtraInfo',
  237: 'CursorKilled',
  238: 'NotImplemented',
  239: 'SnapshotTooOld',
  240: 'DNSRecordTypeMismatch',
  241: 'ConversionFailure',
  242: 'CannotCreateCollection',
  243: 'IncompatibleWithUpgradedServer',
  244: 'NOT_YET_AVAILABLE_TransactionAborted',
  245: 'BrokenPromise',
  246: 'SnapshotUnavailable',
  247: 'ProducerConsumerQueueBatchTooLarge',
  248: 'ProducerConsumerQueueEndClosed',
  249: 'StaleDbVersion',
  250: 'StaleChunkHistory',
  251: 'NoSuchTransaction',
  252: 'ReentrancyNotAllowed',
  // 253, 254, 255 are removed in version 7.1
  256: 'TransactionCommitted',
  257: 'TransactionTooLarge',
  258: 'UnknownFeatureCompatibilityVersion',
  259: 'KeyedExecutorRetry',
  260: 'InvalidResumeToken',
  261: 'TooManyLogicalSessions',
  262: 'ExceededTimeLimit',
  263: 'OperationNotSupportedInTransaction',
  264: 'TooManyFilesOpen',
  265: 'OrphanedRangeCleanUpFailed',
  266: 'FailPointSetFailed',
  267: 'PreparedTransactionInProgress',
  268: 'CannotBackup',
  269: 'DataModifiedByRepair',
  270: 'RepairedReplicaSetNode',
  271: 'JSInterpreterFailureWithStack',
  272: 'MigrationConflict',
  273: 'ProducerConsumerQueueProducerQueueDepthExceeded',
  274: 'ProducerConsumerQueueConsumed',
  275: 'ExchangePassthrough',
  276: 'IndexBuildAborted',
  277: 'AlarmAlreadyFulfilled',
  278: 'UnsatisfiableCommitQuorum',
  279: 'ClientDisconnect',
  280: 'ChangeStreamFatalError',
  /**
   * TransactionCoordinatorSteppingDown gets converted to InterruptedDueToReplStateChange
   */
  281: 'TransactionCoordinatorSteppingDown',
  282: 'TransactionCoordinatorReachedAbortDecision',
  283: 'WouldChangeOwningShard',
  284: 'ForTestingErrorExtraInfoWithExtraInfoInNamespace',
  285: 'IndexBuildAlreadyInProgress',
  286: 'ChangeStreamHistoryLost',
  287: 'TransactionCoordinatorDeadlineTaskCanceled',
  288: 'ChecksumMismatch',
  289: 'WaitForMajorityServiceEarlierOpTimeAvailable',
  290: 'TransactionExceededLifetimeLimitSeconds',
  291: 'NoQueryExecutionPlans',
  292: 'QueryExceededMemoryLimitNoDiskUseAllowed',
  293: 'InvalidSeedList',
  294: 'InvalidTopologyType',
  295: 'InvalidHeartBeatFrequency',
  296: 'TopologySetNameRequired',
  297: 'HierarchicalAcquisitionLevelViolation',
  298: 'InvalidServerType',
  299: 'OCSPCertificateStatusRevoked',
  300: 'RangeDeletionAbandonedBecauseCollectionWithUUIDDoesNotExist',
  301: 'DataCorruptionDetected',
  302: 'OCSPCertificateStatusUnknown',
  303: 'SplitHorizonChange',
  /**
   * This code should only be used upon finding that a shard has been marked stale in the sharding
   * catalog cache, and as such does not belong in the StaleShardVersionError or
   * NeedRetargettingError categories.
   */
  304: 'ShardInvalidatedForTargeting',
  306: 'ReadThroughCacheLookupCanceled',
  307: 'RangeDeletionAbandonedBecauseTaskDocumentDoesNotExist',
  308: 'CurrentConfigNotCommittedYet',
  309: 'ExhaustCommandFinished',
  310: 'PeriodicJobIsStopped',
  311: 'TransactionCoordinatorCanceled',
  312: 'OperationIsKilledAndDelisted',
  313: 'ResumableRangeDeleterDisabled',
  314: 'ObjectIsBusy',
  315: 'TooStaleToSyncFromSource',
  316: 'QueryTrialRunCompleted',
  317: 'ConnectionPoolExpired',
  318: 'ForTestingOptionalErrorExtraInfo',
  319: 'MovePrimaryInProgress',
  320: 'TenantMigrationConflict',
  321: 'TenantMigrationCommitted',
  322: 'APIVersionError',
  323: 'APIStrictError',
  324: 'APIDeprecationError',
  325: 'TenantMigrationAborted',
  326: 'OplogQueryMinTsMissing',
  327: 'NoSuchTenantMigration',
  328: 'TenantMigrationAccessBlockerShuttingDown',
  329: 'TenantMigrationInProgress',
  330: 'SkipCommandExecution',
  331: 'FailedToRunWithReplyBuilder',
  332: 'CannotDowngrade',
  333: 'ServiceExecutorInShutdown',
  334: 'MechanismUnavailable',
  335: 'TenantMigrationForgotten',
  336: 'TimeseriesBucketCleared',
  337: 'AuthenticationAbandoned',
  338: 'ReshardCollectionInProgress',
  339: 'NoSuchReshardCollection',
  340: 'ReshardCollectionCommitted',
  341: 'ReshardCollectionAborted',
  342: 'ReshardingCriticalSectionTimeout',
  /**
   * ShardCannotRefreshDueToLocksHeld will be retried by the shards. Note that it is not under the
   * NeedRetargettingError, meaning MongoS will pass it through to the client, because there is no
   * case where it would be possible for MongoS to retry where MongoD couldn't.
   */
  343: 'ShardCannotRefreshDueToLocksHeld',
  344: 'AuditingNotEnabled',
  345: 'RuntimeAuditConfigurationNotEnabled',
  346: 'ChangeStreamInvalidated',
  347: 'APIMismatchError',
  348: 'ChangeStreamTopologyChange',
  349: 'KeyPatternShorterThanBound',
  350: 'ReshardCollectionTruncatedError',
  351: 'ChangeStreamStartAfterInvalidate',
  352: 'UnsupportedOpQueryCommand',
  353: 'NonRetryableTenantMigrationConflict',
  354: 'LoadBalancerSupportMismatch',
  355: 'InterruptedDueToStorageChange',
  356: 'TxnRetryCounterTooOld',
  357: 'InvalidBSONType',
  358: 'InternalTransactionNotSupported',
  359: 'CannotConvertIndexToUnique',
  360: 'PlacementVersionRefreshCanceled',
  361: 'CollectionUUIDMismatch',
  362: 'FutureAlreadyRetrieved',
  363: 'RetryableTransactionInProgress',
  365: 'TemporarilyUnavailable',
  366: 'WouldChangeOwningShardDeletedNoDocument',
  367: 'FLECompactionPlaceholder',
  369: 'FLETransactionAbort',
  370: 'CannotDropShardKeyIndex',
  371: 'UserWritesBlocked',
  372: 'CloseConnectionForShutdownCommand',
  373: 'InternalTransactionsExhaustiveFindHasMore',
  374: 'TransactionAPIMustRetryTransaction',
  375: 'TransactionAPIMustRetryCommit',
  376: 'ChangeStreamNotEnabled',
  377: 'FLEMaxTagLimitExceeded',
  378: 'NonConformantBSON',
  379: 'DatabaseMetadataRefreshCanceled',
  380: 'RequestAlreadyFulfilled',
  381: 'ReshardingCoordinatorServiceConflictingOperationInProgress',
  382: 'RemoteCommandExecutionError',
  383: 'CollectionIsEmptyLocally',
  384: 'ConnectionError',
  385: 'ConflictingServerlessOperation',
  386: 'DuplicateKeyId',
  387: 'EncounteredFLEPayloadWhileApplyingHmac',
  388: 'TransactionTooLargeForCache',
  389: 'LibmongocryptError',
  390: 'InvalidSignature',
  391: 'ReauthenticationRequired',
  392: 'InvalidJWT',
  393: 'InvalidTenantId',
  395: 'TruncatedSerialization',
  /**
   * This error code is not generated internally in mongod/s servers, but must be parsed and
   * reserve an error code. It can be returned by a remote search index management server.
   */
  396: 'IndexInformationTooLarge',
  398: 'StreamTerminated',
  400: 'CannotUpgrade',
  401: 'ResumeTenantChangeStream',
  402: 'ResourceExhausted',
  403: 'UnsupportedShardingEventNotification',
  404: 'LDAPRoleAcquisitionError',
  405: 'CannotCreateChunkDistribution',
  /**
   * Non-sequential error codes for compatibility only)
   */
  9001: 'SocketException',
  9996: 'OBSOLETE_RecvStaleConfig',
  10003: 'CannotGrowDocumentInCappedNamespace',
  10058: 'LegacyNotPrimary',
  10107: 'NotWritablePrimary',
  10334: 'BSONObjectTooLarge',
  11000: 'DuplicateKey',
  11600: 'InterruptedAtShutdown',
  11601: 'Interrupted',
  11602: 'InterruptedDueToReplStateChange',
  12586: 'BackgroundOperationInProgressForDatabase',
  12587: 'BackgroundOperationInProgressForNamespace',
  13104: 'OBSOLETE_PrepareConfigsFailed',
  13113: 'MergeStageNoMatchingDocument',
  13297: 'DatabaseDifferCase',
  13388: 'StaleConfig',
  13435: 'NotPrimaryNoSecondaryOk',
  13436: 'NotPrimaryOrSecondary',
  14031: 'OutOfDiskSpace',
  17280: 'OBSOLETE_KeyTooLong',
  28769: 'NamespaceCannotBeSharded',
  31082: 'SearchNotEnabled',
  40414: 'IDLFailedToParse',
  46841: 'ClientMarkedKilled',
  50768: 'NotARetryableWriteCommand',
  50915: 'BackupCursorOpenConflictWithCheckpoint',
  56846: 'ConfigServerUnreachable',
  57986: 'RetryableInternalTransactionNotSupported',
  640570: 'IllegalChangeToExpectedShardVersion',
  640571: 'IllegalChangeToExpectedDatabaseVersion',
};