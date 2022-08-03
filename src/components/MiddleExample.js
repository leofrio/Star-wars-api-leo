import { useEffect, useState } from "react"
import GettingData from "./Data/api" 
import './middleExample.css' 

export default function MiddleExample() {   
    const [planets,setPlanets]=useState([])
    const [people,setPeople]=useState([])
    const [ships,setShips]=useState([])
    const [species,setSpecies]=useState([])   
    const [vehicles,setVehicles]=useState([]) 
    const [films,setFilms]=useState([])
    const [loading,setLoading]=useState(false)


    useEffect( () => { 
            setLoading(true) 
            var loading1,loading2,loading3,loading4,loading5,loading6 =false
            GettingData("https://swapi.dev/api/planets/").then((res) => {  
                setPlanets([].concat(...res.map((o) => o.results).map((o) => o.map((obj) => obj.name))))
            }).finally(() => { 
                loading1=true 
                if(loading1 &&loading2 &&loading3 &&loading4&&loading5&&loading6) {
                    setLoading(false)
                }
            })   
            GettingData("https://swapi.dev/api/people/").then((res) => {  
                setPeople([].concat(...res.map((o) => o.results).map((o) => o.map((obj) => obj.name))))
            }).finally(() => {
                loading2=true
                if(loading1 &&loading2 &&loading3 &&loading4&&loading5&&loading6) {
                    setLoading(false)
                }
            })  
            GettingData("https://swapi.dev/api/starships/").then((res) => {  
                setShips([].concat(...res.map((o) => o.results).map((o) => o.map((obj) => obj.name))))
            }).finally(() => {
                loading3=true
                if(loading1 &&loading2 &&loading3 &&loading4&&loading5&&loading6) {
                    setLoading(false)
                }
            })  
            GettingData("https://swapi.dev/api/species/").then((res) => {  
                setSpecies([].concat(...res.map((o) => o.results).map((o) => o.map((obj) => obj.name))))
            }).finally(() => {
                loading4=true 
                if(loading1 &&loading2 &&loading3 &&loading4&&loading5&&loading6) {
                    setLoading(false)
                } 
            })  
            GettingData("https://swapi.dev/api/vehicles/").then((res) => {  
                setVehicles([].concat(...res.map((o) => o.results).map((o) => o.map((obj) => obj.name))))
            }).finally(() => {
                loading5=true
                if(loading1 &&loading2 &&loading3 &&loading4&&loading5&&loading6) {
                    setLoading(false)
                }
            })  
            GettingData("https://swapi.dev/api/films/").then((res) => {  
                setFilms([].concat(...res.map((o) => o.results).map((o) => o.map((obj) => obj.title))))
            }).finally(() => {
                loading6=true
                if(loading1 &&loading2 &&loading3 &&loading4&&loading5&&loading6) {
                    setLoading(false)
                }
            })  
        
        
        //getPlanets()
    },[])
    
    

    if(loading) { 
        return( 
            <> 
            <div className="loadingArea">
            <h1>LOADING</h1> 
            <div className="loader"></div>
            </div>
            </>
        )
    } 
    else {
        return (
            <>  
            <div className="showArea">
                <div className="planetsArea"> 
                    <h2>planets</h2>
                    <ul>
                        {planets.map((o) => <li>{o}</li>)}
                    </ul>
                </div>
                <div className="peopleArea"> 
                    <h2>people</h2>
                    <ul>
                        {people.map((o) => <li>{o}</li>)}
                    </ul>
                </div>
                <div className="shipArea"> 
                    <h2>ships</h2>
                    <ul>
                        {ships.map((o) => <li>{o}</li>)}
                    </ul>
                </div>
                <div className="speciesArea"> 
                    <h2>species</h2>
                    <ul>
                        {species.map((o) => <li>{o}</li>)}
                    </ul>
                </div>
                <div className="vehiclesArea"> 
                    <h2>vehicles</h2>
                    <ul>
                        {vehicles.map((o) => <li>{o}</li>)}
                    </ul>
                </div>
                <div className="filmsArea"> 
                    <h2>Movies</h2>
                    <ul>
                        {films.map((o) => <li>{o}</li>)}
                    </ul>
                </div>
            </div>
            </>
        ) 
    }
}