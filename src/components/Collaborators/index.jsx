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
                        <img className="rounded-md" src="https://scontent.fpiu2-1.fna.fbcdn.net/v/t39.30808-6/387146502_338292802046917_6177213982756628917_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHY2_bG6XiHloAqsGR6DAR8zdCKD2oVuiDN0IoPahW6IIINr4lZR9OrTSzpdPAOw_3wPnyVBYxxm5ZC6FqO71NN&_nc_ohc=cFKX_qxiVAkAX_dRAFc&_nc_ht=scontent.fpiu2-1.fna&oh=00_AfCLpLb0mdWSjFvw-roxTVdw7YHd1VX_7OpYOTVbYlsQxQ&oe=655007E0" alt="Imagen 1" width={298} height={330} />
                    </div>
                    <div>
                        <img className="rounded-md" src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/393499911_343295898213274_1333250192587926463_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGqVx8U9T4fd48twsGNunR-WXeuTc96xd9Zd65Nz3rF38lwVwUZHSzNg2iU1n49oYOVYm1mynQ0uj1Ubiu6ajhw&_nc_ohc=6hpSetDxMZgAX9xnPbY&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfBN6S33jVKLRl5S1EKeVn_W8C6oklcUuW19B1LbEeOMQw&oe=65502A09" alt="Imagen 2" width={298} height={330} />
                    </div>
                    <div>
                        <img className="rounded-md" src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/353857868_280052127870985_7182318458285141841_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGypIs4IABI7t2qIRM2FEN6cOa5C-YmbLRw5rkL5iZstEZlLqyaVPr9ryF-HVtJZtxSxrQ1cyFOa4Kip9nBvF3y&_nc_ohc=YuzyK_H_rdsAX-aC7IP&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfDUTUg2HIlzGlAfCFGtIPPgWKbqpqyQd1Y-qzjFQwqSCw&oe=654F619A" alt="Imagen 3" width={298} height={330} />
                    </div>
                    <div>
                        <img className="rounded-md" src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/398384443_351696187373245_2594587163898805188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFoWNBg-Uia3QVm3zU1NHo1qDD1MvOK7ueoMPUy84ru5_bIhuQOJ8_8QnyBplrjfos2F1zZrL2UjviURrC3jE2S&_nc_ohc=uNfxhjrSWkcAX_5qsvJ&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfBOYVuEZEMGZw9NEQwn4ihREq643TLGTQhBbLpQ2SpBpQ&oe=65504972" alt="Imagen 4" width={298} height={330} />
                    </div>
                    <div>
                        <img className="rounded-md" src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/387176066_338292755380255_7703918401909089335_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1esNgOLOhpKLDPH6-LIWFw3HXhKxFWS7DcdeErEVZLpFPSIjlz9kJyvgd8FvutkpO_jHz-7mRXUaHKGg-qsxN&_nc_ohc=QkDpW1V4Nd0AX-QAg0M&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfADajyd6WJbVLcr2hacvZJ55OXJq_4jwDxvnu4QUD0Xjg&oe=654F32B0" alt="Imagen 5" width={298} height={330} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
