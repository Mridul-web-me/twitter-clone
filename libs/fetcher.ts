import axios from 'axios';
const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default fetcher;

// fetcher.ts
// const fetcher = async (url: string) => {
//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (!response.ok) {
//       const errorDetails = await response.json();
//       throw new Error(`An error occurred: ${response.status} ${response.statusText} - ${errorDetails.error}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// export default fetcher;
