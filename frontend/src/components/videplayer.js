import { speed } from 'jquery';
import React from 'react'


const videoURL ="https://youtu.be/VJvVjrzzRZU";
class Videoplayer extends React.Component{
    render (){
        return(
            <div className="videoWrapper">
                <video src={videoURL} poster="" />
                
                <div className ="controls">
                    <button>
                        play
                    </button>               
                    <input 
                        type ="range"
                        min = "0"
                        max = "100"
                    />

                    <select>
                        {[1,2,3].map(speed => (
                        <option key = {`speedChange_${speed}`}
                        >
                            {speed}
                            </option>
                        
                        ))}
                    </select>
             </div>
            </div>

            
        )
             
    
    }

}
export default Videoplayer