import React,{useState} from 'react'

const HogCard = ({name, image,greased,specialty,weight}) => {
    const [isFront, setIsFront] = useState(true)

    function display(){
        
    }
    return (
        <div onClick ={() => setIsFront(!isFront)}>
     
    <div>{isFront ? <img src={image} alt="hogPic"/> <h1>{name}</h1>:<p>{greased}</p><p>{specialty}</p><p>{weight}</p>}</div>
     </div>
 )
}
export default HogCard;
