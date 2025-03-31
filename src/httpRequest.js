import axios from 'axios';

export const fetchImages = async (topic, page) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
            client_id: 'uwoWl3w0Co8nq1e6CNKsstEMYKurA_wZx81c0s4PQgo',
            query: topic,
            page: page,
        }
    });
    const imagesResponse = response.data.results;
     console.log(imagesResponse);
    return imagesResponse;
};