const URL = 'https://api.sampleapis.com/switch/games';

async function fetchData() {
  try {
    const result = await fetch(URL);
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`)
    }
    return result;
  } catch (error) {
    console.error('Error:', error)
  }
}

export default fetchData;