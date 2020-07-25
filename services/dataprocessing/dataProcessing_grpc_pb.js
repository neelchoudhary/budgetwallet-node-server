// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_dataprocessing_dataProcessing_pb = require('../../services/dataprocessing/dataProcessing_pb.js');

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
};

exports.DataProcessingServiceClient = grpc.makeGenericClientConstructor(DataProcessingServiceService);
