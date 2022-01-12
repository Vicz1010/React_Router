import React from 'react';
import './Modal.css';

const About = () => {
    return(
        <div>

            <div className='modal'>
                <div className='modal-content'>
                    <h3>I am a modal</h3>
                </div>
            </div>

            <div className='ui raised very padded text container segment'
            style={{marginTop:'80px'}}>
                <h3 className='ui header'>About</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est neque magni, nulla voluptatum ducimus consequuntur delectus provident quibusdam corporis culpa aliquid deleniti recusandae pariatur cum, nobis, fugit id quos iusto?</p>
            </div>

        </div>
        
    )
}

export default About;