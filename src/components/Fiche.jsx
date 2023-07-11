import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from "../theme";
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

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
    <Box mx={4} px={5} py={3}
      sx={{
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? colors.primary[800] : colors.primary[900],
        boxShadow:
          theme.palette.mode === "dark"
            ? "none"
            : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
      display="flex" flexDirection="column" borderRadius="4px" position="relative">
      <Button variant="contained" color="secondary" style={{ position: 'absolute', top: 10, right: 10, margin: '8px' }}>
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
        <Grid item xs={12} sm={6} >
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