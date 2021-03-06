// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-lb' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-request-id': '1d290bbd-1aa2-4712-9f38-fb8801011d4f',
  'x-ms-correlation-request-id': '1d290bbd-1aa2-4712-9f38-fb8801011d4f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T160644Z:1d290bbd-1aa2-4712-9f38-fb8801011d4f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:06:43 GMT',
  'content-length': '105' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb\",\"name\":\"xplat-test-lb\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': 'ab3753fb-8c9e-4c8d-b781-4260cc8381a6',
  'x-ms-correlation-request-id': 'ab3753fb-8c9e-4c8d-b781-4260cc8381a6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T160646Z:ab3753fb-8c9e-4c8d-b781-4260cc8381a6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:06:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '098e6cb0-8160-4c05-a481-aaaf59265e80',
  'x-ms-correlation-request-id': '098e6cb0-8160-4c05-a481-aaaf59265e80',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T160648Z:098e6cb0-8160-4c05-a481-aaaf59265e80',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 16:06:47 GMT',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"c442b963-b21d-422f-abec-081e93f20348\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c03547fb-ef42-47ea-b4c4-89ce94165e18\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c48a5615-de1e-4b81-8bbc-af8cb1520c81',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/c48a5615-de1e-4b81-8bbc-af8cb1520c81?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'd5173f88-d608-4d19-87a4-902a60499ad8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T160651Z:d5173f88-d608-4d19-87a4-902a60499ad8',
  date: 'Mon, 15 Aug 2016 16:06:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"c442b963-b21d-422f-abec-081e93f20348\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c03547fb-ef42-47ea-b4c4-89ce94165e18\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c442b963-b21d-422f-abec-081e93f20348"',
  'x-ms-request-id': '53ce9208-f729-47a4-b5e3-f4979b01436b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '81404dde-d9b8-4d19-a972-9ae9da7d58ac',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T160652Z:81404dde-d9b8-4d19-a972-9ae9da7d58ac',
  date: 'Mon, 15 Aug 2016 16:06:51 GMT' });
 return result; }]];
