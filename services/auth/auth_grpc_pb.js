// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_auth_auth_pb = require('../../services/auth/auth_pb.js');

function serialize_auth_Empty(arg) {
  if (!(arg instanceof services_auth_auth_pb.Empty)) {
    throw new Error('Expected argument of type auth.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_Empty(buffer_arg) {
  return services_auth_auth_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginRequest(arg) {
  if (!(arg instanceof services_auth_auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginRequest(buffer_arg) {
  return services_auth_auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginResponse(arg) {
  if (!(arg instanceof services_auth_auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginResponse(buffer_arg) {
  return services_auth_auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SignupRequest(arg) {
  if (!(arg instanceof services_auth_auth_pb.SignupRequest)) {
    throw new Error('Expected argument of type auth.SignupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_SignupRequest(buffer_arg) {
  return services_auth_auth_pb.SignupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SignupResponse(arg) {
  if (!(arg instanceof services_auth_auth_pb.SignupResponse)) {
    throw new Error('Expected argument of type auth.SignupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_SignupResponse(buffer_arg) {
  return services_auth_auth_pb.SignupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_VerifyAuthResponse(arg) {
  if (!(arg instanceof services_auth_auth_pb.VerifyAuthResponse)) {
    throw new Error('Expected argument of type auth.VerifyAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_VerifyAuthResponse(buffer_arg) {
  return services_auth_auth_pb.VerifyAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  verifyAuth: {
    path: '/auth.AuthService/VerifyAuth',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_auth_pb.Empty,
    responseType: services_auth_auth_pb.VerifyAuthResponse,
    requestSerialize: serialize_auth_Empty,
    requestDeserialize: deserialize_auth_Empty,
    responseSerialize: serialize_auth_VerifyAuthResponse,
    responseDeserialize: deserialize_auth_VerifyAuthResponse,
  },
  signup: {
    path: '/auth.AuthService/Signup',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_auth_pb.SignupRequest,
    responseType: services_auth_auth_pb.SignupResponse,
    requestSerialize: serialize_auth_SignupRequest,
    requestDeserialize: deserialize_auth_SignupRequest,
    responseSerialize: serialize_auth_SignupResponse,
    responseDeserialize: deserialize_auth_SignupResponse,
  },
  login: {
    path: '/auth.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_auth_pb.LoginRequest,
    responseType: services_auth_auth_pb.LoginResponse,
    requestSerialize: serialize_auth_LoginRequest,
    requestDeserialize: deserialize_auth_LoginRequest,
    responseSerialize: serialize_auth_LoginResponse,
    responseDeserialize: deserialize_auth_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
