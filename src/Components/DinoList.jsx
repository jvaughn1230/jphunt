import React from 'react'
import DinoCard from './DinoCard'
import { dinos } from '../assets/data'

const DinoList = () => {
    function newDinoCard(dino){
        return(
            <div>
                <DinoCard 
                    key={dino.id}
                    name={dino.name}
                    movies={dino.movies}
                />
            </div>
        )
    }

    return(
        <div>
            {dinos.map(newDinoCard)}
        </div>
    )

}

export default DinoList