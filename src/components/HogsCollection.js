import React from "react";
import HogCard from "./HogCard"

function HogsCollection ({hogs}){

    const hogsToDisplay = hogs.map((hog) => <HogCard key={hog.name}
	 name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased}/>)
    return(
        <>
        {hogsToDisplay}
     </>
        
    )
}

export default HogsCollection
;
