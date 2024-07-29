import { Button } from '@/components/ui/button';
import { fetchMealsById } from '@/utils';
import Image from 'next/image';
import React from 'react'

export default async function DetaiPage({ params }:
  {
    params: { idMeal: string };
  }
) {
  const meal = await fetchMealsById(params.idMeal);
  const ingredients = Object.keys(meal)
    .filter(key => key.startsWith('strIngredient'))
    .map((ingredientKey, index) => {
      const measureKey = `strMeasure${index + 1}`;
      const ingredient = meal[ingredientKey];
      const measure = meal[measureKey];
      return { ingredient, measure };
    })
    .filter(({ ingredient }) => ingredient);

  const instructions = meal.strInstructions;
  const formattedInstructions = instructions.replace(/\r\n/g, '<br>');

  return (
    <div className='mt-24 min-h-[90vh] w-full bg-red-50'>
      <div className='md:w-4/5 xl:w-3/5 px-5 py-7 mx-auto'>
        <div className='flex flex-col md:flex-row w-full gap-5'>
          <div className='h-96 md:w-96 relative'>
            <Image
              src={meal.strMealThumb}
              fill
              sizes='100%'
              alt={meal.strMeal}
              className='object-cover rounded-lg'
            />
          </div>

          <div className='flex flex-1 mt-5 md:mt-0 flex-col gap-5'>
            <div className='flex justify-between p-3 rounded-lg bg-white shadow-sm text-xl font-semibold'>
              <h1>{meal.strMeal}</h1>
              {/* <Button>
                <p className='text-2xl'>♡</p>
              </Button> */}
            </div>
            <div className='p-5 rounded-lg shadow-sm bg-white'>
              <h1 className='mb-7 font-semibold text-lg'>Ingredients</h1>
              <div className='grid grid-cols-2'>
                {ingredients.map(({ ingredient, measure }, index) => (
                  <p className='mb-2' key={index}><span className='font-semibold'>{ingredient} </span> {measure}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-3 p-5 rounded-lg shadow-sm bg-white'>
          <h1 className='mb-7 font-semibold text-lg'>Instruction</h1>
          <p dangerouslySetInnerHTML={{ __html: formattedInstructions }} className='mb-2' />
        </div>
      </div>
    </div>
  )
}
