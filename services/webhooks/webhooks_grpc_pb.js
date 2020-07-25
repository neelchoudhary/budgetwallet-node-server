// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_webhooks_webhooks_pb = require('../../services/webhooks/webhooks_pb.js');

function serialize_webhooks_GetPlaidWebhookRequest(arg) {
  if (!(arg instanceof services_webhooks_webhooks_pb.GetPlaidWebhookRequest)) {
    throw new Error('Expected argument of type webhooks.GetPlaidWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_webhooks_GetPlaidWebhookRequest(buffer_arg) {
  return services_webhooks_webhooks_pb.GetPlaidWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_webhooks_GetPlaidWebhookResponse(arg) {
  if (!(arg instanceof services_webhooks_webhooks_pb.GetPlaidWebhookResponse)) {
    throw new Error('Expected argument of type webhooks.GetPlaidWebhookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_webhooks_GetPlaidWebhookResponse(buffer_arg) {
  return services_webhooks_webhooks_pb.GetPlaidWebhookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_webhooks_UpdatePlaidWebhookRequest(arg) {
  if (!(arg instanceof services_webhooks_webhooks_pb.UpdatePlaidWebhookRequest)) {
    throw new Error('Expected argument of type webhooks.UpdatePlaidWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_webhooks_UpdatePlaidWebhookRequest(buffer_arg) {
  return services_webhooks_webhooks_pb.UpdatePlaidWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_webhooks_UpdatePlaidWebhookResponse(arg) {
  if (!(arg instanceof services_webhooks_webhooks_pb.UpdatePlaidWebhookResponse)) {
    throw new Error('Expected argument of type webhooks.UpdatePlaidWebhookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_webhooks_UpdatePlaidWebhookResponse(buffer_arg) {
  return services_webhooks_webhooks_pb.UpdatePlaidWebhookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WebhooksServiceService = exports.WebhooksServiceService = {
  getPlaidWebhook: {
    path: '/webhooks.WebhooksService/GetPlaidWebhook',
    requestStream: false,
    responseStream: false,
    requestType: services_webhooks_webhooks_pb.GetPlaidWebhookRequest,
    responseType: services_webhooks_webhooks_pb.GetPlaidWebhookResponse,
    requestSerialize: serialize_webhooks_GetPlaidWebhookRequest,
    requestDeserialize: deserialize_webhooks_GetPlaidWebhookRequest,
    responseSerialize: serialize_webhooks_GetPlaidWebhookResponse,
    responseDeserialize: deserialize_webhooks_GetPlaidWebhookResponse,
  },
  updatePlaidWebhook: {
    path: '/webhooks.WebhooksService/UpdatePlaidWebhook',
    requestStream: false,
    responseStream: false,
    requestType: services_webhooks_webhooks_pb.UpdatePlaidWebhookRequest,
    responseType: services_webhooks_webhooks_pb.UpdatePlaidWebhookResponse,
    requestSerialize: serialize_webhooks_UpdatePlaidWebhookRequest,
    requestDeserialize: deserialize_webhooks_UpdatePlaidWebhookRequest,
    responseSerialize: serialize_webhooks_UpdatePlaidWebhookResponse,
    responseDeserialize: deserialize_webhooks_UpdatePlaidWebhookResponse,
  },
};

exports.WebhooksServiceClient = grpc.makeGenericClientConstructor(WebhooksServiceService);
