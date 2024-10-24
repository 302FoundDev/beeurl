export const verifyTokenRequest = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/auth/verify', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null
  }
}
