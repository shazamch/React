import React from 'react';

function Tiles(props) {
    console.log(props)
    return (
      <div className="h-32 w-64 bg-white text-gray-800 text-center py-4 rounded-lg flex items-center justify-center">
        <img src={props.src} width="75" height="75" className="mr-4" alt="Active Users" />
        <span className="text-lg font-thin">
          {props.tag} <span className="text-3xl font-bold">{props.num}</span>
        </span>
      </div>
    );
  }
  
  export default Tiles;
  