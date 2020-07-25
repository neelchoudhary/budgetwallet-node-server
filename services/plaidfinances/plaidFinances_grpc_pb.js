// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_plaidfinances_plaidFinances_pb = require('../../services/plaidfinances/plaidFinances_pb.js');

function serialize_plaidfinances_AddFinancialTransactionsRequest(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.AddFinancialTransactionsRequest)) {
    throw new Error('Expected argument of type plaidfinances.AddFinancialTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_AddFinancialTransactionsRequest(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.AddFinancialTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_AddFinancialTransactionsResponse(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.AddFinancialTransactionsResponse)) {
    throw new Error('Expected argument of type plaidfinances.AddFinancialTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_AddFinancialTransactionsResponse(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.AddFinancialTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_AddHistoricalFinancialTransactionsRequest(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.AddHistoricalFinancialTransactionsRequest)) {
    throw new Error('Expected argument of type plaidfinances.AddHistoricalFinancialTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_AddHistoricalFinancialTransactionsRequest(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.AddHistoricalFinancialTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_AddHistoricalFinancialTransactionsResponse(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.AddHistoricalFinancialTransactionsResponse)) {
    throw new Error('Expected argument of type plaidfinances.AddHistoricalFinancialTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_AddHistoricalFinancialTransactionsResponse(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.AddHistoricalFinancialTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_Empty(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.Empty)) {
    throw new Error('Expected argument of type plaidfinances.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_Empty(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_LinkFinancialInstitutionRequest(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.LinkFinancialInstitutionRequest)) {
    throw new Error('Expected argument of type plaidfinances.LinkFinancialInstitutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_LinkFinancialInstitutionRequest(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.LinkFinancialInstitutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_LinkFinancialInstitutionResponse(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.LinkFinancialInstitutionResponse)) {
    throw new Error('Expected argument of type plaidfinances.LinkFinancialInstitutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_LinkFinancialInstitutionResponse(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.LinkFinancialInstitutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_RemoveFinancialInstitutionRequest(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.RemoveFinancialInstitutionRequest)) {
    throw new Error('Expected argument of type plaidfinances.RemoveFinancialInstitutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_RemoveFinancialInstitutionRequest(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.RemoveFinancialInstitutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_RemoveFinancialInstitutionResponse(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.RemoveFinancialInstitutionResponse)) {
    throw new Error('Expected argument of type plaidfinances.RemoveFinancialInstitutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_RemoveFinancialInstitutionResponse(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.RemoveFinancialInstitutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_RemoveFinancialTransactionsRequest(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.RemoveFinancialTransactionsRequest)) {
    throw new Error('Expected argument of type plaidfinances.RemoveFinancialTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_RemoveFinancialTransactionsRequest(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.RemoveFinancialTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_UpdateFinancialAccountsRequest(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.UpdateFinancialAccountsRequest)) {
    throw new Error('Expected argument of type plaidfinances.UpdateFinancialAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_UpdateFinancialAccountsRequest(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.UpdateFinancialAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_UpdateFinancialAccountsResponse(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.UpdateFinancialAccountsResponse)) {
    throw new Error('Expected argument of type plaidfinances.UpdateFinancialAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_UpdateFinancialAccountsResponse(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.UpdateFinancialAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_UpdateFinancialInstitutionRequest(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.UpdateFinancialInstitutionRequest)) {
    throw new Error('Expected argument of type plaidfinances.UpdateFinancialInstitutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_UpdateFinancialInstitutionRequest(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.UpdateFinancialInstitutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plaidfinances_UpdateFinancialInstitutionResponse(arg) {
  if (!(arg instanceof services_plaidfinances_plaidFinances_pb.UpdateFinancialInstitutionResponse)) {
    throw new Error('Expected argument of type plaidfinances.UpdateFinancialInstitutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plaidfinances_UpdateFinancialInstitutionResponse(buffer_arg) {
  return services_plaidfinances_plaidFinances_pb.UpdateFinancialInstitutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PlaidFinancesServiceService = exports.PlaidFinancesServiceService = {
  linkFinancialInstitution: {
    path: '/plaidfinances.PlaidFinancesService/LinkFinancialInstitution',
    requestStream: false,
    responseStream: false,
    requestType: services_plaidfinances_plaidFinances_pb.LinkFinancialInstitutionRequest,
    responseType: services_plaidfinances_plaidFinances_pb.LinkFinancialInstitutionResponse,
    requestSerialize: serialize_plaidfinances_LinkFinancialInstitutionRequest,
    requestDeserialize: deserialize_plaidfinances_LinkFinancialInstitutionRequest,
    responseSerialize: serialize_plaidfinances_LinkFinancialInstitutionResponse,
    responseDeserialize: deserialize_plaidfinances_LinkFinancialInstitutionResponse,
  },
  updateFinancialInstitution: {
    path: '/plaidfinances.PlaidFinancesService/UpdateFinancialInstitution',
    requestStream: false,
    responseStream: false,
    requestType: services_plaidfinances_plaidFinances_pb.UpdateFinancialInstitutionRequest,
    responseType: services_plaidfinances_plaidFinances_pb.UpdateFinancialInstitutionResponse,
    requestSerialize: serialize_plaidfinances_UpdateFinancialInstitutionRequest,
    requestDeserialize: deserialize_plaidfinances_UpdateFinancialInstitutionRequest,
    responseSerialize: serialize_plaidfinances_UpdateFinancialInstitutionResponse,
    responseDeserialize: deserialize_plaidfinances_UpdateFinancialInstitutionResponse,
  },
  updateFinancialAccounts: {
    path: '/plaidfinances.PlaidFinancesService/UpdateFinancialAccounts',
    requestStream: false,
    responseStream: false,
    requestType: services_plaidfinances_plaidFinances_pb.UpdateFinancialAccountsRequest,
    responseType: services_plaidfinances_plaidFinances_pb.UpdateFinancialAccountsResponse,
    requestSerialize: serialize_plaidfinances_UpdateFinancialAccountsRequest,
    requestDeserialize: deserialize_plaidfinances_UpdateFinancialAccountsRequest,
    responseSerialize: serialize_plaidfinances_UpdateFinancialAccountsResponse,
    responseDeserialize: deserialize_plaidfinances_UpdateFinancialAccountsResponse,
  },
  removeFinancialInstitution: {
    path: '/plaidfinances.PlaidFinancesService/RemoveFinancialInstitution',
    requestStream: false,
    responseStream: false,
    requestType: services_plaidfinances_plaidFinances_pb.RemoveFinancialInstitutionRequest,
    responseType: services_plaidfinances_plaidFinances_pb.RemoveFinancialInstitutionResponse,
    requestSerialize: serialize_plaidfinances_RemoveFinancialInstitutionRequest,
    requestDeserialize: deserialize_plaidfinances_RemoveFinancialInstitutionRequest,
    responseSerialize: serialize_plaidfinances_RemoveFinancialInstitutionResponse,
    responseDeserialize: deserialize_plaidfinances_RemoveFinancialInstitutionResponse,
  },
  addHistoricalFinancialTransactions: {
    path: '/plaidfinances.PlaidFinancesService/AddHistoricalFinancialTransactions',
    requestStream: false,
    responseStream: false,
    requestType: services_plaidfinances_plaidFinances_pb.AddHistoricalFinancialTransactionsRequest,
    responseType: services_plaidfinances_plaidFinances_pb.AddHistoricalFinancialTransactionsResponse,
    requestSerialize: serialize_plaidfinances_AddHistoricalFinancialTransactionsRequest,
    requestDeserialize: deserialize_plaidfinances_AddHistoricalFinancialTransactionsRequest,
    responseSerialize: serialize_plaidfinances_AddHistoricalFinancialTransactionsResponse,
    responseDeserialize: deserialize_plaidfinances_AddHistoricalFinancialTransactionsResponse,
  },
  addFinancialTransactions: {
    path: '/plaidfinances.PlaidFinancesService/AddFinancialTransactions',
    requestStream: false,
    responseStream: false,
    requestType: services_plaidfinances_plaidFinances_pb.AddFinancialTransactionsRequest,
    responseType: services_plaidfinances_plaidFinances_pb.AddFinancialTransactionsResponse,
    requestSerialize: serialize_plaidfinances_AddFinancialTransactionsRequest,
    requestDeserialize: deserialize_plaidfinances_AddFinancialTransactionsRequest,
    responseSerialize: serialize_plaidfinances_AddFinancialTransactionsResponse,
    responseDeserialize: deserialize_plaidfinances_AddFinancialTransactionsResponse,
  },
  removeFinancialTransactions: {
    path: '/plaidfinances.PlaidFinancesService/RemoveFinancialTransactions',
    requestStream: false,
    responseStream: false,
    requestType: services_plaidfinances_plaidFinances_pb.RemoveFinancialTransactionsRequest,
    responseType: services_plaidfinances_plaidFinances_pb.Empty,
    requestSerialize: serialize_plaidfinances_RemoveFinancialTransactionsRequest,
    requestDeserialize: deserialize_plaidfinances_RemoveFinancialTransactionsRequest,
    responseSerialize: serialize_plaidfinances_Empty,
    responseDeserialize: deserialize_plaidfinances_Empty,
  },
};

exports.PlaidFinancesServiceClient = grpc.makeGenericClientConstructor(PlaidFinancesServiceService);
