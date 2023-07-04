import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from "../theme";
import {Grid} from '@mui/material';
import {Button} from '@mui/material';

const infoChercheur = [
  {
    name: 'Doctorat :',
    desc: 'Oui',
  },
  {
    name: 'Ecole doctorale de rattachement :',
    desc: '...',
  },
  {
    name: 'Lien vers page chercheur :',
    desc: '...',
  },
  {
    name: 'Numéro ORCID :',
    desc: '...',
  },
  {
    name: 'Indice H :',
    desc: '...',
  },

];
const infoPerso = [
  {
    name: 'Nom :',
    desc: 'BRAHIMI',
  },
  {
    name: 'Prenom :',
    desc: 'Zakaria',
  },
  {
    name: 'Direction :',
    desc: '...',
  },
  {
    name: 'Département :',
    desc: '...',
  },
  {
    name: 'HDR :',
    desc: 'Oui',
  },
];


const Fiche = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box display="flex" flexDirection="column" m={5} borderRadius="4px" bgcolor={colors.bleuAccent[600]} p={3} position="relative">
      <Button variant="contained" color="secondary" style={{ position: 'absolute', top: 0, right: 0, margin: '8px' }}>
        Modifier
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
      <List disablePadding>
        {infoPerso.map((info) => (
          <ListItem key={info.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
            primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
            primary={info.name}
            secondary={info.desc}
           />
          </ListItem>
        ))}
      </List>
      </Grid>
      <Grid item xs={12} sm={6}>
      <List disablePadding>
        {infoChercheur.map((infoc) => (
          <ListItem key={infoc.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
            primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
            primary={infoc.name}
            secondary={infoc.desc}
           />
          </ListItem>
        ))}
      </List>
      </Grid>
      </Grid>
    </Box>
  );
};

export default Fiche;