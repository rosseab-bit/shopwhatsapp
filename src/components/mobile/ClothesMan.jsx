import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const data = [
    {
        title: "Shorts",
        src:"https://ss224.liverpool.com.mx/sm/1100417771.jpg",
        description: "Shorts de varios colores y tallas"
    },
    {
        title: "Remeras",
        src : "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/5/6/56101_0_12.jpg",
        description: "Remeras con diferentes motivos y tallas."
    },
    {
        title: "Jeans",
        src: "https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5726756c/images/large/546021-azul-medio.jpg",
        description: "Jeans en diferentes estilos, clasicos, gastados y chupines."
    },
    {
        title: "Camisas",
        src: "https://andreamx.vteximg.com.br/arquivos/ids/15433770-445-628/Perfil-Normal.jpg",
        description: "Camisas para todas las temporadas. Estampadas y lisas."
    },
    {
        title: "Ropa interior",
        src: "https://resize.sprintercdn.com/f/261x261/products/0334499/jack-and-jones-jacjay_0334499_00_4_1412001308.jpg",
        description: "Ropa interior con estilos varios y tamaños."
    }
]

const ClothesMan = () => {
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
                    <Button size="small" color="primary">
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
export default ClothesMan;