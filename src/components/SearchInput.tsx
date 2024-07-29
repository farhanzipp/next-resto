import React, { ChangeEvent } from 'react'
import { Input } from './ui/input'



export function SearchInput({
    value, onChange, delay = 250
}: DebouncedInputProps) {

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <Input
                type='text'
                placeholder='search...'
                onChange={handleOnChange}
            />
        </div>
    )
}
