const axios = require('axios');
const assert = require('assert');

async function performEncryptionTest() {
  try {
    // Send a GET request to the secure endpoint
    const secureEndpointResponse = await axios.get('https://reqres.in/api/secure-endpoint');

    // Perform assertions to validate encryption and secure communication
    assert.strictEqual(secureEndpointResponse.status, 200, 'Expected a 200 OK response');
    assert.strictEqual(secureEndpointResponse.headers['content-type'], 'application/json; charset=utf-8', 'Invalid Content-Type header');
    assert.strictEqual(secureEndpointResponse.config.url.startsWith('https://'), true, 'Insecure connection detected');

    console.log('Encryption test passed!');
  } catch (error) {
    console.error('Error:', error.message);
    console.log('Encryption test failed!');
  }
}

performEncryptionTest();
