import React, {useRef} from 'react';


const IndexPage =() => {
    const refs= {
        show: useRef(),
        login: useRef()

    }



    return (
        <div styleName= 'main-container'>
         <h1> Welcome to Mesumi </h1>
         <p> Our site for all picturs </p>
                     
        </div>
        
      );
}
export default IndexPage
