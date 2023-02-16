import * as React from 'react';


const data = [
    {
        hombres: 'https://www.micolet.com/blog/wp-content/uploads/2022/05/ropahombre-3.jpg',
    },
    {
        mujeres: 'https://notilook.com.ar/wp-content/uploads/2021/06/Tendencias-de-moda-para-mujer-verano-2022-Argentina-scaled.jpg',
    },
    {
        ninios: 'https://www.chiquipedia.com/imagenes/10-combinaciones-de-color-para-la-ropa-de-los-ninos.jpg',
    },
];
const Cards = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    overflow: 'scroll',
                    marginTop: 10

                }}
            >
                <div>
                    <img src={data[0].hombres}
                        width='250px'
                        height='auto'
                        style={{
                            objectFit: 'cover',
                            borderRadius: '10%',
                            height: '250px',
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    />
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '20px'
                        }}
                    >
                        Ropa para Hombres
                    </p>
                </div>

                <div>
                    <img src={data[1].mujeres}
                        width='250px'
                        height='auto'
                        style={{
                            objectFit: 'cover',
                            borderRadius: '10%',
                            height: '250px',
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    />
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '20px'
                        }}
                    >
                        Ropa para Mujeres
                    </p>
                </div>
                <div>
                    <img src={data[2].ninios}
                        width='250px'
                        height='auto'
                        style={{
                            objectFit: 'cover',
                            borderRadius: '10%',
                            height: '250px',
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    />
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '20px'
                        }}
                    >
                        Ropa para Niños
                    </p>
                </div>
            </div>
        </>
    );
}
export default Cards;