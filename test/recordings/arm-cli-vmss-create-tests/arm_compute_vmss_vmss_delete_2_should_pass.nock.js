// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestVMSSCreate4555/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '962bf25e-2024-434c-ac16-129df0dca2ca',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': 'c22d090d-105d-4b0f-8099-a3a576a58a80',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T084820Z:c22d090d-105d-4b0f-8099-a3a576a58a80',
  date: 'Mon, 25 Apr 2016 08:48:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestVMSSCreate4555/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '962bf25e-2024-434c-ac16-129df0dca2ca',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': 'c22d090d-105d-4b0f-8099-a3a576a58a80',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T084820Z:c22d090d-105d-4b0f-8099-a3a576a58a80',
  date: 'Mon, 25 Apr 2016 08:48:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '73afcd8b-b448-494d-80e8-88024174e196',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2959a6fe-07d7-45f8-9ec8-e08590da0dda',
  'x-ms-routing-request-id': 'JAPANEAST:20160425T084852Z:2959a6fe-07d7-45f8-9ec8-e08590da0dda',
  date: 'Mon, 25 Apr 2016 08:48:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '73afcd8b-b448-494d-80e8-88024174e196',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2959a6fe-07d7-45f8-9ec8-e08590da0dda',
  'x-ms-routing-request-id': 'JAPANEAST:20160425T084852Z:2959a6fe-07d7-45f8-9ec8-e08590da0dda',
  date: 'Mon, 25 Apr 2016 08:48:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '064a44ff-ff90-47e9-84fa-4106cb16ad7b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': '4e135948-b9b7-4a9b-9f4d-0900c7123ef8',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T084924Z:4e135948-b9b7-4a9b-9f4d-0900c7123ef8',
  date: 'Mon, 25 Apr 2016 08:49:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '064a44ff-ff90-47e9-84fa-4106cb16ad7b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': '4e135948-b9b7-4a9b-9f4d-0900c7123ef8',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T084924Z:4e135948-b9b7-4a9b-9f4d-0900c7123ef8',
  date: 'Mon, 25 Apr 2016 08:49:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': 'a8d2efe7-9904-4741-b38e-d8387105a44b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14896',
  'x-ms-correlation-request-id': '8145728b-afb5-4996-bbc1-ca3cd8f63a1a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T084956Z:8145728b-afb5-4996-bbc1-ca3cd8f63a1a',
  date: 'Mon, 25 Apr 2016 08:49:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': 'a8d2efe7-9904-4741-b38e-d8387105a44b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14896',
  'x-ms-correlation-request-id': '8145728b-afb5-4996-bbc1-ca3cd8f63a1a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T084956Z:8145728b-afb5-4996-bbc1-ca3cd8f63a1a',
  date: 'Mon, 25 Apr 2016 08:49:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '61a4238a-7ea3-499a-a4f0-cf50c44fa8d3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '419ba86f-5a54-41dc-9115-70e606485a93',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T085032Z:419ba86f-5a54-41dc-9115-70e606485a93',
  date: 'Mon, 25 Apr 2016 08:50:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '61a4238a-7ea3-499a-a4f0-cf50c44fa8d3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '419ba86f-5a54-41dc-9115-70e606485a93',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T085032Z:419ba86f-5a54-41dc-9115-70e606485a93',
  date: 'Mon, 25 Apr 2016 08:50:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"endTime\": \"2016-04-25T08:50:33.5260383+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131060478482557488',
  'x-ms-request-id': '2ee3a9a9-c9df-4a28-85a4-2606f7826277',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': '1f2f4e66-6ebd-4a97-876e-4ce4293f37a4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T085104Z:1f2f4e66-6ebd-4a97-876e-4ce4293f37a4',
  date: 'Mon, 25 Apr 2016 08:51:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/962bf25e-2024-434c-ac16-129df0dca2ca?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"962bf25e-2024-434c-ac16-129df0dca2ca\",\r\n  \"startTime\": \"2016-04-25T08:48:20.1822876+00:00\",\r\n  \"endTime\": \"2016-04-25T08:50:33.5260383+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131060478482557488',
  'x-ms-request-id': '2ee3a9a9-c9df-4a28-85a4-2606f7826277',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': '1f2f4e66-6ebd-4a97-876e-4ce4293f37a4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T085104Z:1f2f4e66-6ebd-4a97-876e-4ce4293f37a4',
  date: 'Mon, 25 Apr 2016 08:51:04 GMT',
  connection: 'close' });
 return result; }]];