import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IoIosTimer } from "react-icons/io";
import { BiBlock } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%", maxWidth: 900, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <IoIosTimer />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Délai
              </Typography>
              {
                " — Les investisseurs bénéficient de l’avantage fiscal l’année de libération du fonds. Néanmoins l’obligation d’utilisation des montants déposés est de 2 ans à partir de l’année de libération."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <BiBlock />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Blocage des fonds
              </Typography>
              {
                " — Le fonds géré est bloqué auprès de la STB SICAR pendant cinq ans à partir du 1er janvier de l’année qui suit celle du dépôt des fonds."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <GiTakeMyMoney />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Rémunération
              </Typography>
              {
                " — Le bailleur de fonds bénéficiera également conformément à la convention Fonds géré : - De la rémunération des fonds à des conditions très avantageuses jusqu’à leur utilisation dans des projets ayant obtenu au préalable son accord de participation - Du produit des intérêts des OCA/CCA souscrits - Des revenus du portefeuille d’investissement - Des dividendes distribués."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <AiOutlinePlus />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Autre avantage
              </Typography>
              {
                " — Est déductible du bénéfice imposable, la plus-value de cession d’actions et des parts sociales réalisées."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
