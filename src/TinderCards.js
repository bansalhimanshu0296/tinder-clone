import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./css/TinderCards.css"
import instance from './axios'


function TinderCards() {
  const [people, setPeople] = useState([])
  useEffect(()=>{
    async function fetchData(){
        const req = await instance.get('/tinder/cards');
        setPeople(req.data)
    }
    fetchData();
  },[]);

  const swiped = (direction, person) =>{
    if(direction === "right"){

    }
  }
  const outOfFrame = (name) =>{

  }
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map(person=>(<TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir)=> swiped(dir, person)}
                onCardLeftScreen={()=> outOfFrame(person.name)}>
                    <div 
                      style={{ backgroundImage: `url(${person.imgUrl})`}}
                      className='card'>
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>)
            )}
        </div>
        
    </div>
  )
}

export default TinderCards