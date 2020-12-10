import React from 'react';
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    ButtonBase
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 2,
        padding: theme.spacing(2)
    },
    image: {
              width: 200,
              height: 200,
            },
    img: {
              margin: 'auto',
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
            },
}))

export default function Food() {
    const classes = useStyles()
    const data = [
        { 
            id:1,
            name: "Pedigree Professional for Small Puppy Breeds ",
            price: 1300 ,
            img:"/img/fooddata/pedi1.png",
            pack_size:"12kg",
            inCart: false,
            count: 0,
            total: 0
        },
        { 
            id:2,
            name: "Pedigree Professional Large Breed Puppy Food ",
            price: 1500 ,
            img:"/img/fooddata/pedi2.png",
            pack_size:"15kg",
            inCart: false,
            count: 0,
            total: 0
            
        },
        { 
            id:3,
            name: "Pedigree Puppy Food Milk and Vegetable ",
            price: 1800 ,
            img:"/img/fooddata/pedi3.png",
            pack_size:"12kg",
            inCart: false,
            count: 0,
            total: 0
        },
        { 
            id:4,
            name: "Pedigree Dry Puppy Meat and Milk",
            price: 2000 ,
            img:"/img/fooddata/pedi4.png",
            pack_size:"15kg",
            inCart: false,
            count: 0,
            total: 0
        },
        { 
            id:5,
            name: "Pedigree Adult Dog Food Chicken Rice and Eggs ",
            price: 2500 ,
            img:"/img/fooddata/pedi5.png",
            pack_size:"12kg",
            inCart: false,
            count: 0,
            total: 0
        },
        {   
            id:6,
            name: "Pedigree Pro Adult Weight Management",
            price: 3000 ,
            img:"/img/fooddata/pedi6.png",
            pack_size:"15kg",
            inCart: false,
            count: 0,
            total: 0
        },
        { 
            id:7,
            name: "Drools cat tuna and salmon gravy",
            price: 1300 ,
            img:"/img/fooddata/cat1.png",
            pack_size:"100gm",
            inCart: false,
            count: 0,
            total: 0
        },
        { 
            id:8,
            name: "Whiskas junior mackerel(Premimum)",
            price: 1000 ,
            img:"/img/fooddata/cat2.jpeg",
            pack_size:"1.1kg",
            inCart: false,
            count: 0,
            total: 0
        },
        { 
            id:9,
            name: "Purepet Adult Tuna and Salmon Flavor",
            price: 800 ,
            img:"/img/fooddata/cat3.jpg",
            pack_size:"7kg",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id:10,
            name: "Whiskas Adult Chicken Flavor Dry Food",
            price: 1000 ,
            img:"/img/fooddata/cat4.jpg",
            pack_size:"1.2kg",
            inCart: false,
            count: 0,
            total: 0
        },
        { 
            id:11,
            name: "Optimum Fish Food(Optimumōōōō)",
            price: 100,
            img:"/img/fooddata/fish1.jpg",
            pack_size:"100gm",
            inCart: false,
            count: 0,
            total: 0
        },
        { 
            id:12,
            name: "Tetra Temprature Flakes(Good Quality)",
            price: 230 ,
            img:"/img/fooddata/fishh.jpg",
            pack_size:"1000ml",
            inCart: false,
            count: 0,
            total: 0
        },
        
        
        
    ]
    return (
        
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
               
                {data.map(value => (
                    <Grid item xs={12} sm={6} md={3} key={data.indexOf(value)}>
                        <Card>
                            <CardHeader
                                title={ value.name}
                                // subheader={`Price : ${elem.price}`}
                                subheader={`Quantity : ${value.pack_size}`}
                            />
                            <CardContent>
                            <Typography variant="h6" gutterBottom>
                            {/* {`Quantity : ${elem.pack_size}`} */}
                                {`Price : ${value.price}`}
                            </Typography>
                            <ButtonBase className={classes.image}>
                                 <img className={classes.img} alt="complex" src={value.img} />
                             </ButtonBase>
                                {/* <Typography variant="h5" gutterBottom>
                                    Hello World
                                </Typography> */}
                                <div>
                            
                                <ButtonContainer style={{color:"black",border:"black"}}><a href="https://en.wikipedia.org/wiki/Pet_food" style={{textDecoration:"none"}}>More Info</a></ButtonContainer>
                                <ButtonContainer
                                cart
                                disabled={value.inCart ? true : false}
                                
                                
                                 >
                            {value.inCart ? "inCart" : "add  to cart"}
                            </ButtonContainer>

                             </div>
                            </CardContent>
                        </Card>
                     </Grid>
                     ))}
                                
            
                
            </Grid>
            <div>
                <Link to="/">
                      <ButtonContainer style={{border:"black"}}>back to Home</ButtonContainer>
                </Link>
                

            </div>
            
            
        </div>
    )
}