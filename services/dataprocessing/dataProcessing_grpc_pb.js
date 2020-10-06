// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_dataprocessing_dataProcessing_pb = require('../../services/dataprocessing/dataProcessing_pb.js');

function serialize_dataprocessing_Empty(arg) {
  if (!(arg instanceof services_dataprocessing_dataProcessing_pb.Empty)) {
    throw new Error('Expected argument of type dataprocessing.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dataprocessing_Empty(buffer_arg) {
  return services_dataprocessing_dataProcessing_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dataprocessing_FindRecurringTransactionsResponse(arg) {
  if (!(arg instanceof services_dataprocessing_dataProcessing_pb.FindRecurringTransactionsResponse)) {
    throw new Error('Expected argument of type dataprocessing.FindRecurringTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dataprocessing_FindRecurringTransactionsResponse(buffer_arg) {
  return services_dataprocessing_dataProcessing_pb.FindRecurringTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dataprocessing_GetAccountDailySnapshotsRequest(arg) {
  if (!(arg instanceof services_dataprocessing_dataProcessing_pb.GetAccountDailySnapshotsRequest)) {
    throw new Error('Expected argument of type dataprocessing.GetAccountDailySnapshotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dataprocessing_GetAccountDailySnapshotsRequest(buffer_arg) {
  return services_dataprocessing_dataProcessing_pb.GetAccountDailySnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dataprocessing_GetAccountDailySnapshotsResponse(arg) {
  if (!(arg instanceof services_dataprocessing_dataProcessing_pb.GetAccountDailySnapshotsResponse)) {
    throw new Error('Expected argument of type dataprocessing.GetAccountDailySnapshotsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dataprocessing_GetAccountDailySnapshotsResponse(buffer_arg) {
  return services_dataprocessing_dataProcessing_pb.GetAccountDailySnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dataprocessing_GetAccountMonthlySnapshotsRequest(arg) {
  if (!(arg instanceof services_dataprocessing_dataProcessing_pb.GetAccountMonthlySnapshotsRequest)) {
    throw new Error('Expected argument of type dataprocessing.GetAccountMonthlySnapshotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dataprocessing_GetAccountMonthlySnapshotsRequest(buffer_arg) {
  return services_dataprocessing_dataProcessing_pb.GetAccountMonthlySnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dataprocessing_GetAccountMonthlySnapshotsResponse(arg) {
  if (!(arg instanceof services_dataprocessing_dataProcessing_pb.GetAccountMonthlySnapshotsResponse)) {
    throw new Error('Expected argument of type dataprocessing.GetAccountMonthlySnapshotsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dataprocessing_GetAccountMonthlySnapshotsResponse(buffer_arg) {
  return services_dataprocessing_dataProcessing_pb.GetAccountMonthlySnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dataprocessing_GetCategoryMonthlySnapshotsRequest(arg) {
  if (!(arg instanceof services_dataprocessing_dataProcessing_pb.GetCategoryMonthlySnapshotsRequest)) {
    throw new Error('Expected argument of type dataprocessing.GetCategoryMonthlySnapshotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dataprocessing_GetCategoryMonthlySnapshotsRequest(buffer_arg) {
  return services_dataprocessing_dataProcessing_pb.GetCategoryMonthlySnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dataprocessing_GetCategoryMonthlySnapshotsResponse(arg) {
  if (!(arg instanceof services_dataprocessing_dataProcessing_pb.GetCategoryMonthlySnapshotsResponse)) {
    throw new Error('Expected argument of type dataprocessing.GetCategoryMonthlySnapshotsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dataprocessing_GetCategoryMonthlySnapshotsResponse(buffer_arg) {
  return services_dataprocessing_dataProcessing_pb.GetCategoryMonthlySnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dataprocessing_GetRecurringTransactionsResponse(arg) {
  if (!(arg instanceof services_dataprocessing_dataProcessing_pb.GetRecurringTransactionsResponse)) {
    throw new Error('Expected argument of type dataprocessing.GetRecurringTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dataprocessing_GetRecurringTransactionsResponse(buffer_arg) {
  return services_dataprocessing_dataProcessing_pb.GetRecurringTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DataProcessingServiceService = exports.DataProcessingServiceService = {
  getAccountDailySnapshots: {
    path: '/dataprocessing.DataProcessingService/GetAccountDailySnapshots',
    requestStream: false,
    responseStream: false,
    requestType: services_dataprocessing_dataProcessing_pb.GetAccountDailySnapshotsRequest,
    responseType: services_dataprocessing_dataProcessing_pb.GetAccountDailySnapshotsResponse,
    requestSerialize: serialize_dataprocessing_GetAccountDailySnapshotsRequest,
    requestDeserialize: deserialize_dataprocessing_GetAccountDailySnapshotsRequest,
    responseSerialize: serialize_dataprocessing_GetAccountDailySnapshotsResponse,
    responseDeserialize: deserialize_dataprocessing_GetAccountDailySnapshotsResponse,
  },
  getAccountMonthlySnapshots: {
    path: '/dataprocessing.DataProcessingService/GetAccountMonthlySnapshots',
    requestStream: false,
    responseStream: false,
    requestType: services_dataprocessing_dataProcessing_pb.GetAccountMonthlySnapshotsRequest,
    responseType: services_dataprocessing_dataProcessing_pb.GetAccountMonthlySnapshotsResponse,
    requestSerialize: serialize_dataprocessing_GetAccountMonthlySnapshotsRequest,
    requestDeserialize: deserialize_dataprocessing_GetAccountMonthlySnapshotsRequest,
    responseSerialize: serialize_dataprocessing_GetAccountMonthlySnapshotsResponse,
    responseDeserialize: deserialize_dataprocessing_GetAccountMonthlySnapshotsResponse,
  },
  getCategoryMonthlySnapshots: {
    path: '/dataprocessing.DataProcessingService/GetCategoryMonthlySnapshots',
    requestStream: false,
    responseStream: false,
    requestType: services_dataprocessing_dataProcessing_pb.GetCategoryMonthlySnapshotsRequest,
    responseType: services_dataprocessing_dataProcessing_pb.GetCategoryMonthlySnapshotsResponse,
    requestSerialize: serialize_dataprocessing_GetCategoryMonthlySnapshotsRequest,
    requestDeserialize: deserialize_dataprocessing_GetCategoryMonthlySnapshotsRequest,
    responseSerialize: serialize_dataprocessing_GetCategoryMonthlySnapshotsResponse,
    responseDeserialize: deserialize_dataprocessing_GetCategoryMonthlySnapshotsResponse,
  },
  findRecurringTransactions: {
    path: '/dataprocessing.DataProcessingService/FindRecurringTransactions',
    requestStream: false,
    responseStream: false,
    requestType: services_dataprocessing_dataProcessing_pb.Empty,
    responseType: services_dataprocessing_dataProcessing_pb.FindRecurringTransactionsResponse,
    requestSerialize: serialize_dataprocessing_Empty,
    requestDeserialize: deserialize_dataprocessing_Empty,
    responseSerialize: serialize_dataprocessing_FindRecurringTransactionsResponse,
    responseDeserialize: deserialize_dataprocessing_FindRecurringTransactionsResponse,
  },
  getRecurringTransactions: {
    path: '/dataprocessing.DataProcessingService/GetRecurringTransactions',
    requestStream: false,
    responseStream: false,
    requestType: services_dataprocessing_dataProcessing_pb.Empty,
    responseType: services_dataprocessing_dataProcessing_pb.GetRecurringTransactionsResponse,
    requestSerialize: serialize_dataprocessing_Empty,
    requestDeserialize: deserialize_dataprocessing_Empty,
    responseSerialize: serialize_dataprocessing_GetRecurringTransactionsResponse,
    responseDeserialize: deserialize_dataprocessing_GetRecurringTransactionsResponse,
  },
};

exports.DataProcessingServiceClient = grpc.makeGenericClientConstructor(DataProcessingServiceService);
