

export const updateFavourites = (id, favourites) => {
  
  if(favourites.includes(id)){

    return favourites.filter((resId) => resId !== id) // resta 

  }else{

    return [...favourites, id]                        // suma

  }

}

export const checkFavourites = (id, favourites) => {
  return favourites.includes(id) ? '#8ac243' : "white"
}