import { Grid } from "@material-ui/core"
import React from "react"
import Content from "../components/content"
import Header from "../components/header"



export default function Home() {

  return (

    <Grid container direction="column">
      <Grid item>
        <Header title="The Gatos collection" />
      </Grid>

      <Grid item container>

        <Grid item xs={0} sm={2} />

        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>

        <Grid item xs={0} sm={2} />

      </Grid>

    </Grid>

  )
}
