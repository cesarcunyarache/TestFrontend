import React from 'react';
import styles from './Collaborators.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Collaborators({ autoPlay }) {
    return (
        <div className="container m-auto">
            <div className="Imagenes">
                <Carousel autoPlay={autoPlay} showStatus={false} infiniteLoop interval={2000}>
                    <div >
                        <img className="rounded-md" src="col1.jpg" alt="Imagen 1" width={298} height={330} />
                    </div>
                    <div>
                        <img className="rounded-md" src="col2.jpg" alt="Imagen 2" width={298} height={330} />
                    </div>
                    <div>
                        <img className="rounded-md" src="col3.jpg" alt="Imagen 3" width={298} height={330} />
                    </div>
                    <div>
                        <img className="rounded-md" src="col4.jpg" alt="Imagen 4" width={298} height={330} />
                    </div>
                    <div>
                        <img className="rounded-md" src="col1.jpg" alt="Imagen 5" width={298} height={330} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
