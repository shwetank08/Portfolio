import React from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "../Component/Cards";
import GitF from "../Photos/githubfetcher.jpg";
import CovT from "../Photos/CovidT.jpg";
import Todos from "../Photos/Todo.png";
import ExpT from "../Photos/ExpenseT.png";
import TTT from "../Photos/TTT.png";
const Projects = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        spacing={5}
      >
        <Grid item xs={12} sm={6} lg={4}>
          <Cards
            name={"Github User Fetcher"}
            text={
              "Displaying github information of the username entered after authenticating the user using firebase. Authentication method email and password"
            }
            photo={GitF}
            URL={"https://github.com/shwetank08/Github-User-Fetcher"}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Cards
            name={"Covid-19 Tracker"}
            text={
              "Covid-19 tracker using disease.sh Api. Displaying Cases, Deaths and Recovered information for the selected country and displaying a doughnut chart using react-chartjs-2."
            }
            photo={CovT}
            URL={"https://github.com/shwetank08/Covid-19-Tracker"}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Cards
            name={"Tic Tac Toe Game"}
            text={
              "Tic Tac Toe game using react and displaying notification using react toastify."
            }
            photo={TTT}
            URL={"https://github.com/shwetank08/Tic-Tac-Toe"}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Cards
            name={"Expense Tracker App"}
            text={
              "Displaying the list of items with price tag and Delete option and displaying the total amount on top. Build using react."
            }
            photo={ExpT}
            URL={"https://github.com/shwetank08/Expense-Tracker"}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Cards
            name={"Todo App"}
            text={
              "Displaying the list of tasks with Remove and Mark as complete options. Build using react"
            }
            photo={Todos}
            URL={"https://github.com/shwetank08/Todo-App"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
