import React from 'react';             
import { Link } from 'react-router-dom';

class ComponentsB extends React.Component {   
 
    render() {              
        return (
            <div>
                HelloPage2!!!
                <br/>                         
                <Link to={`/`}>Go To page1</Link>
            </div>
        );
    }
}
 
export default ComponentsB; 