"use client"
import React, { useEffect, useState } from 'react'
import { fetchInitialMeals, fetchRandomMeal, fetchSearchedMeals } from '@/utils'
import { MealCard, SearchBar } from '@/components';
import { Meal } from '@/types';
import { useDebounce } from 'use-debounce';

const RecipePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [meals, setMeals] = useState([]);
    const [debouncedText] = useDebounce(searchQuery, 500)

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (debouncedText) {
                const searchedMeals = await fetchSearchedMeals(debouncedText);
                setMeals(searchedMeals);
            } else {
                const initialData = await fetchInitialMeals()
                setMeals(initialData);
            }
        };
        fetchSearchResults();
    }, [debouncedText]);
    return (
        <div className='min-h-[85vh] md:w-4/5 xl:w-3/5 mt-24 mx-auto'>
            <h1 className='text-center text-xl font-semibold'>Discover Your Favorite Recipes</h1>
            <section className='w-full px-5 mt-7'>
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                {meals && meals.length > 0 ? (
                    <div className='mt-7 grid grid-cols-2 md:grid-cols-4 gap-5'>
                        {
                            meals.map((meal: Meal) => (
                                <MealCard key={meal.idMeal} meal={meal} />
                            ))
                        }
                    </div>
                ) : (
                    <p className='pt-8 text-center'>No Meals Found</p>
                )}
            </section>
        </div>
    )
}

export default RecipePage