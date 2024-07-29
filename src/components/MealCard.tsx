import { MealProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { Card, CardContent } from './ui/card'
import Loading from './Loading'

const MealCard = ({ meal }: MealProps) => {
  return (
    <Link href={`/recipes/${meal.idMeal}`}>
      <Card className='p-2'>
        <div className='relative h-36 w-full'>
          <Image
            src={meal.strMealThumb}
            fill
            sizes='100%'
            className='object-cover rounded-md'
            alt={meal.strMeal}
            priority
          />
        </div>
        <p className='mt-2 text-lg font-semibold text-center'>{meal.strMeal}</p>
      </Card>
    </Link>
  )
}

export default MealCard