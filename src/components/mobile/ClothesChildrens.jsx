import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const data = [
    {
        title: "Shorts",
        src:"https://cdn.shopify.com/s/files/1/0289/7061/4843/products/11_6232457f-56d6-4840-b733-d9cfbe11f2f4.jpg",
        description: "Shorts de varios colores y tallas"
    },
    {
        title: "Remeras",
        src : "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/171/237/products/rules11-125ca7a39d8d6dc40c16023449531675-640-0.jpg",
        description: "Remeras con diferentes motivos y tallas."
    },
    {
        title: "Jeans",
        src: "https://i.pinimg.com/736x/4e/a5/8c/4ea58cae9cc05c9e2911ab9bf2fcec06.jpg",
        description: "Jeans en diferentes estilos, clasicos, gastados y chupines."
    },
    {
        title: "Camisas",
        src: "https://i.pinimg.com/236x/56/b5/97/56b59757144c1d734408bfd7f2c17b7f--kids-shop-cotton-shorts.jpg",
        description: "Camisas para todas las temporadas. Estampadas y lisas."
    },
    {
        title: "Ropa interior",
        src: "https://sydney.pe/wp-content/uploads/2022/02/shutterstock_699115744.jpg",
        description: "Ropa interior con estilos varios y tamaños."
    }
]

const ClothesChildrens = () => {
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
export default ClothesChildrens;