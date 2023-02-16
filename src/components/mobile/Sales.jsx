import Divider from '@mui/material/Divider';


const Sales = () => {
    const data = [
        {
            sale1: 'https://img.freepik.com/vector-premium/logo-super-oferta-brasil-vector-premium_363897-388.jpg',
        },
        {
            sale2: 'https://www.mibelgrano.com.ar/wp-content/uploads/2019/02/2x1.jpg',
        },
        {
            sale3: 'https://www.posicionamiento-webs.com/wp-content/uploads/2019/09/Errores-que-debes-evitar-al-hacer-promociones.jpg',
        },
    ];
    return (
        <>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 20
            }}
            >
                <div>
                    <img src={data[0].sale1}
                        width='300px'
                        height='auto'
                        style={{
                            objectFit: 'cover',
                            borderRadius: '10%',
                            height: '250px',
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    />

                </div>

                <div>
                    <img src={data[1].sale2}
                        width='300px'
                        height='auto'
                        style={{
                            objectFit: 'cover',
                            borderRadius: '10%',
                            height: '250px',
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    />

                </div>
                <div>
                    <img src={data[2].sale3}
                        width='300px'
                        height='auto'
                        style={{
                            objectFit: 'cover',
                            borderRadius: '10%',
                            height: '250px',
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    />

                </div>
            </div>
        </>
    );
}
export default Sales;