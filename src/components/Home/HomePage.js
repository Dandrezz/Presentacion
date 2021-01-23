import React from 'react';
import CustomNavar from '../Navbar/CustomNavbar';
import Card from './Card';
import './HomePage.css';

const HomePage = () => {
    return (
        <div style={{
            position:"relative"
        }}>
            <img 
                src="https://raw.githubusercontent.com/Dandrezz/Presentacion/main/src/images/cosmos.jpg" 
                alt="Via Lactea" 
                className="header-image"
            />
            <div className="topBar">
                <CustomNavar />
            </div>

            <div className="header">
                <h1 className="title">SoftwarePlus</h1>
                <div className="title-description">Presentacion de la empresa</div>
            </div>
            <div 
                className="content"
            >
                <div className="main-div">
                    <div className="subtitle-1">
                        <h3>
                            Nosotros construimos tus productos digitales
                        </h3>
                    </div>
                    <div class="grid-container">
                        <Card 
                            name="Anonimo"
                            degree="Analista de Sistemas"
                            image="https://www.w3schools.com/howto/img_avatar.png"
                        />
                        <Card 
                            name="Anonimo"
                            degree="Analista de Sistemas"
                            image="https://www.w3schools.com/howto/img_avatar2.png"
                        />
                        <Card 
                            name="Anonimo"
                            degree="Analista de Sistemas"
                            image="https://www.w3schools.com/howto/img_avatar.png"
                        />
                        <Card 
                            name="Anonimo"
                            degree="Analista de Sistemas"
                            image="https://www.w3schools.com/howto/img_avatar.png"
                        />
                        <Card 
                            name="Anonimo"
                            degree="Analista de Sistemas"
                            image="https://www.w3schools.com/howto/img_avatar.png"
                        />
                        <Card 
                            name="Anonimo"
                            degree="Analista de Sistemas"
                            image="https://www.w3schools.com/howto/img_avatar.png"
                        />
                                                <Card 
                            name="Anonimo"
                            degree="Analista de Sistemas"
                            image="https://www.w3schools.com/howto/img_avatar.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
