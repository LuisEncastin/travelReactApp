import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

export const getPlacesData = async (lat, lng) => {
    try {
        const { data : { data }} = await axios.get(URL, {
                params: {
                  latitude: lat ,
                  longitude: lng ,
                },
                headers: {
                  'x-rapidapi-key': '5069e12409mshca8b2d705025342p1258acjsn6d8613fc755b',
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
                }
              });
        return { data }
    } catch (error) {
        console.log(error)
    }
}