// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_financialcategories_financialCategories_pb = require('../../services/financialcategories/financialCategories_pb.js');

function serialize_financialcategories_Empty(arg) {
  if (!(arg instanceof services_financialcategories_financialCategories_pb.Empty)) {
    throw new Error('Expected argument of type financialcategories.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_financialcategories_Empty(buffer_arg) {
  return services_financialcategories_financialCategories_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_financialcategories_GetFinancialCategoriesResponse(arg) {
  if (!(arg instanceof services_financialcategories_financialCategories_pb.GetFinancialCategoriesResponse)) {
    throw new Error('Expected argument of type financialcategories.GetFinancialCategoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_financialcategories_GetFinancialCategoriesResponse(buffer_arg) {
  return services_financialcategories_financialCategories_pb.GetFinancialCategoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FinancialCategoryServiceService = exports.FinancialCategoryServiceService = {
  getFinancialCategories: {
    path: '/financialcategories.FinancialCategoryService/GetFinancialCategories',
    requestStream: false,
    responseStream: false,
    requestType: services_financialcategories_financialCategories_pb.Empty,
    responseType: services_financialcategories_financialCategories_pb.GetFinancialCategoriesResponse,
    requestSerialize: serialize_financialcategories_Empty,
    requestDeserialize: deserialize_financialcategories_Empty,
    responseSerialize: serialize_financialcategories_GetFinancialCategoriesResponse,
    responseDeserialize: deserialize_financialcategories_GetFinancialCategoriesResponse,
  },
};

exports.FinancialCategoryServiceClient = grpc.makeGenericClientConstructor(FinancialCategoryServiceService);
