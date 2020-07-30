import { Grid } from "@material-ui/core";
import React from "react";
import mochi from "../assets/Mochi.jpg";
import pandoro from "../assets/pandoro.jpg";
import peppa from "../assets/Peppa.jpg";
import PetCard from "./petCard";


export default function Content() {
    return (
        <Grid container spacing={4}>

            <Grid item xs={12} sm={6} lg={4} >
                <PetCard
                initial="D"
                name="Pandoro"
                shortDesc="Ciao, sono Dodo"
                path={pandoro}
                desc="Sono Pandoro, il più grande dei 3 gatti e adoro miagolare alla luna."
                />
            </Grid>      

            <Grid item xs={12} sm={6} lg={4} >
                <PetCard 
                initial="P"
                name="Zeppola"
                shortDesc="Sono Zeppola detta Peppa"
                path={peppa}
                desc="Sono Zeppola, ma tutti mi chiamano Peppa, e non so più cosa fare per non farmi vedere dalla strana gente che c'è in casa."
                />
            </Grid>      

            <Grid item xs={12} sm={6} lg={4} >
                <PetCard
                    initial="M"
                    name="Mochi"
                    shortDesc="Sono Mochi la pazzoide"
                    path={mochi}
                    desc="Sono Mochi e sono completamente scoppiata. Faccio un sacco di guai ma sono la preferita di casa."
                     />
            </Grid>          
        </Grid>
        
    )
}