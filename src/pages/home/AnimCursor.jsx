import React from 'react';
import AnimatedCursor from "react-animated-cursor"
import Cursor from "../../assets/Star 16.png"

const AnimCursor = () => {
    return (
        <div>
           <AnimatedCursor
           
           innerSize={50}
           outerSize={50}
           
           outerAlpha={0}
           
           
         
           innerScale={0.5}
           outerScale={0.5}
           innerStyle={{
            backgroundImage: `url(${Cursor})`, // Replace with your image path
            backgroundSize: "cover",
            width: "50px",
            height: "50px",
            border: "none",
            backgroundColor: "none",
          }}
           outerStyle={{
            backgroundImage: `url(${Cursor})`, // Replace with your image path
            backgroundSize: "cover",
            width: "50px",
            height: "50px",
          }}
           clickables={[
             'a',
             'input[type="text"]',
             'input[type="email"]',
             'input[type="number"]',
             'input[type="submit"]',
             'input[type="image"]',
             'label[for]',
             'select',
             'textarea',
             'button',
             '.link'
           ]}
           
           />
            
        </div>
    );
};

export default AnimCursor;