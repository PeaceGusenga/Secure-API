const axios = require('axios');

async function performAPISecurityTest() {
  try {
    // Simulate authentication and retrieve a token
    const authResponse = await axios.post('https://reqres.in/api/login', {
      email: 'your-email@example.com',
      password: 'your-password',
    });

    const authToken = authResponse.data.token;

    // Send a GET request to a secure endpoint with the retrieved token
    const secureEndpointResponse = await axios.get('https://reqres.in/api/secure-endpoint', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log('Secure Endpoint Response:', secureEndpointResponse.data);
    console.log('Secure endpoint test passed!');
  } catch (error) {
    console.error('Error:', error.response.data);
    console.log('API security test failed!');
  }
}
performAPISecurityTest();
