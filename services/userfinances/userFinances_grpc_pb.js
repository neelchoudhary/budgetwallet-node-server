// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_userfinances_userFinances_pb = require('../../services/userfinances/userFinances_pb.js');
var services_shared_shared_pb = require('../../services/shared/shared_pb.js');

function serialize_userfinances_Empty(arg) {
  if (!(arg instanceof services_userfinances_userFinances_pb.Empty)) {
    throw new Error('Expected argument of type userfinances.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userfinances_Empty(buffer_arg) {
  return services_userfinances_userFinances_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userfinances_GetFinancialAccountsRequest(arg) {
  if (!(arg instanceof services_userfinances_userFinances_pb.GetFinancialAccountsRequest)) {
    throw new Error('Expected argument of type userfinances.GetFinancialAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userfinances_GetFinancialAccountsRequest(buffer_arg) {
  return services_userfinances_userFinances_pb.GetFinancialAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userfinances_GetFinancialAccountsResponse(arg) {
  if (!(arg instanceof services_userfinances_userFinances_pb.GetFinancialAccountsResponse)) {
    throw new Error('Expected argument of type userfinances.GetFinancialAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userfinances_GetFinancialAccountsResponse(buffer_arg) {
  return services_userfinances_userFinances_pb.GetFinancialAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userfinances_GetFinancialInstitutionsRequest(arg) {
  if (!(arg instanceof services_userfinances_userFinances_pb.GetFinancialInstitutionsRequest)) {
    throw new Error('Expected argument of type userfinances.GetFinancialInstitutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userfinances_GetFinancialInstitutionsRequest(buffer_arg) {
  return services_userfinances_userFinances_pb.GetFinancialInstitutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userfinances_GetFinancialInstitutionsResponse(arg) {
  if (!(arg instanceof services_userfinances_userFinances_pb.GetFinancialInstitutionsResponse)) {
    throw new Error('Expected argument of type userfinances.GetFinancialInstitutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userfinances_GetFinancialInstitutionsResponse(buffer_arg) {
  return services_userfinances_userFinances_pb.GetFinancialInstitutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userfinances_GetFinancialTransactionsResponse(arg) {
  if (!(arg instanceof services_userfinances_userFinances_pb.GetFinancialTransactionsResponse)) {
    throw new Error('Expected argument of type userfinances.GetFinancialTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userfinances_GetFinancialTransactionsResponse(buffer_arg) {
  return services_userfinances_userFinances_pb.GetFinancialTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userfinances_ToggleFinancialAccountRequest(arg) {
  if (!(arg instanceof services_userfinances_userFinances_pb.ToggleFinancialAccountRequest)) {
    throw new Error('Expected argument of type userfinances.ToggleFinancialAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userfinances_ToggleFinancialAccountRequest(buffer_arg) {
  return services_userfinances_userFinances_pb.ToggleFinancialAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userfinances_ToggleFinancialAccountResponse(arg) {
  if (!(arg instanceof services_userfinances_userFinances_pb.ToggleFinancialAccountResponse)) {
    throw new Error('Expected argument of type userfinances.ToggleFinancialAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userfinances_ToggleFinancialAccountResponse(buffer_arg) {
  return services_userfinances_userFinances_pb.ToggleFinancialAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserFinancesServiceService = exports.UserFinancesServiceService = {
  getFinancialInstitutions: {
    path: '/userfinances.UserFinancesService/GetFinancialInstitutions',
    requestStream: false,
    responseStream: false,
    requestType: services_userfinances_userFinances_pb.GetFinancialInstitutionsRequest,
    responseType: services_userfinances_userFinances_pb.GetFinancialInstitutionsResponse,
    requestSerialize: serialize_userfinances_GetFinancialInstitutionsRequest,
    requestDeserialize: deserialize_userfinances_GetFinancialInstitutionsRequest,
    responseSerialize: serialize_userfinances_GetFinancialInstitutionsResponse,
    responseDeserialize: deserialize_userfinances_GetFinancialInstitutionsResponse,
  },
  getFinancialAccounts: {
    path: '/userfinances.UserFinancesService/GetFinancialAccounts',
    requestStream: false,
    responseStream: false,
    requestType: services_userfinances_userFinances_pb.GetFinancialAccountsRequest,
    responseType: services_userfinances_userFinances_pb.GetFinancialAccountsResponse,
    requestSerialize: serialize_userfinances_GetFinancialAccountsRequest,
    requestDeserialize: deserialize_userfinances_GetFinancialAccountsRequest,
    responseSerialize: serialize_userfinances_GetFinancialAccountsResponse,
    responseDeserialize: deserialize_userfinances_GetFinancialAccountsResponse,
  },
  toggleFinancialAccount: {
    path: '/userfinances.UserFinancesService/ToggleFinancialAccount',
    requestStream: false,
    responseStream: false,
    requestType: services_userfinances_userFinances_pb.ToggleFinancialAccountRequest,
    responseType: services_userfinances_userFinances_pb.ToggleFinancialAccountResponse,
    requestSerialize: serialize_userfinances_ToggleFinancialAccountRequest,
    requestDeserialize: deserialize_userfinances_ToggleFinancialAccountRequest,
    responseSerialize: serialize_userfinances_ToggleFinancialAccountResponse,
    responseDeserialize: deserialize_userfinances_ToggleFinancialAccountResponse,
  },
  getFinancialTransactions: {
    path: '/userfinances.UserFinancesService/GetFinancialTransactions',
    requestStream: false,
    responseStream: false,
    requestType: services_userfinances_userFinances_pb.Empty,
    responseType: services_userfinances_userFinances_pb.GetFinancialTransactionsResponse,
    requestSerialize: serialize_userfinances_Empty,
    requestDeserialize: deserialize_userfinances_Empty,
    responseSerialize: serialize_userfinances_GetFinancialTransactionsResponse,
    responseDeserialize: deserialize_userfinances_GetFinancialTransactionsResponse,
  },
};

exports.UserFinancesServiceClient = grpc.makeGenericClientConstructor(UserFinancesServiceService);
