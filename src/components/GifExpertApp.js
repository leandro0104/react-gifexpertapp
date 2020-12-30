import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

// snippet para crear componente rafc + tab
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     //setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cat => [...cat, 'HunterXHunter']);
    // }

    return(
      <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />

      <ol>
        {
          categories.map( category => (
            <GifGrid 
            key={category}
            category={category}
            />
          ))
        }
      </ol>
      </>
    );
}
