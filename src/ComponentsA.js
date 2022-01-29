import React from 'react';    
import { Link } from 'react-router-dom';       
 
class ComponentsA extends React.Component {   
 
    render() {                          
        return (
            <div>
                HelloPage1!!! 
                <br/>　　　　　　　　　　　　　　　　　　　
                <Link to={`/ComponentsB`}>Go To page2</Link>　　　　　　　　　　　　　　　　　　　
            </div>
        );
    }
}
 
export default ComponentsA; 