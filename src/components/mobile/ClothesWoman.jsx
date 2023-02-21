import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const data = [
    {
        title: "Shorts",
        src:"https://www.telemundo.com/sites/nbcutelemundo/files/juniors_so_paperbag_shorts.jpg",
        description: "Shorts de varios colores y tallas"
    },
    {
        title: "Remeras",
        src : "https://d2r9epyceweg5n.cloudfront.net/stores/399/451/products/20200901_13053531-525819e90fa54f15ec16012672288321-1024-1024.jpg",
        description: "Remeras con diferentes motivos y tallas."
    },
    {
        title: "Jeans",
        src: "https://dsnegsjxz63ti.cloudfront.net/images/homeimages/fit_images/eg/m_3263cadbff52dc4.jpeg",
        description: "Jeans en diferentes estilos, clasicos, gastados y chupines."
    },
    {
        title: "Camisas",
        src: "https://http2.mlstatic.com/D_NQ_NP_624149-MLA51339599382_082022-W.jpg",
        description: "Camisas para todas las temporadas. Estampadas y lisas."
    },
    {
        title: "Ropa interior",
        src: "https://http2.mlstatic.com/D_NQ_NP_950811-MLA43675388463_102020-O.jpg",
        description: "Ropa interior con estilos varios y tamaños."
    }
]

const ClothesWoman = () => {
    const sendMessageWsp = (item)=> {
        let message = "Hola! Te consulto por el producto \n "+item["title"]+" 👕: "+item["description"]+"."+"\n"+"Tenes para la venta? 💲\n Gracias.-"
        let number = "+5491140825271"
        var url = "whatsapp://send?text="+encodeURIComponent(message)+"&phone="+encodeURIComponent(number)
    
        window.open(url);
    }
    return (
        <>
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10
        }}
        >
        {
            data.map((item)=>(
                <Card sx={{ 
                    maxWidth: 300,
                    marginTop: 2,
                    marginBottom: 2
                     }}
                     >
                <CardActionArea
                sx={{
                    width:300
                }}
                >
                    <CardMedia
                        component="img"
                        height="140"
                        width="300px"
                        image={item["src"]}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item["title"]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item["description"]}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => sendMessageWsp(item)}>
                        Consultar
                    </Button>
                </CardActions>
            </Card>
            ))
        }
        </div>
        </>
    );
}
export default ClothesWoman;