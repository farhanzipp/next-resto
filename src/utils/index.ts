import axios from "axios";

export async function fetchRandomMeal() {
    try {
        const response = await axios.get(`https://themealdb.com/api/json/v1/1/random.php`);
        const data = response.data;

        if (!data || !data.meals) {
            throw new Error('No meals Found')
        }

        return data.meals[0];
    } catch ( error ) {
        console.error('Error fetching data', error)
    }
}
export async function fetchInitialMeals() {
    try {
        const response = await axios.get('https://themealdb.com/api/json/v1/1/search.php?f=e');
        const data = response.data;

        if (!data || !data.meals) {
            throw new Error('No meals Found')
        }

        return data.meals;
    } catch ( error ) {
        console.error('Error fetching data', error)
    }
}
export async function fetchSearchedMeals(query: string) {

    try {
        const response = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = response.data;

        if (!data || !data.meals) {
            throw new Error('No meals Found')
        }

        return data.meals;
    } catch ( error ) {
        console.error('Error fetching data', error)
    }
}

export async function fetchMealsById(idMeal: string) {
    try {
        const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = response.data;

        if (!data || !data.meals) {
            throw new Error('No meals Found')
        }

        return data.meals[0];
    } catch ( error ) {
        console.error('Error fetching data', error)
    }
}
