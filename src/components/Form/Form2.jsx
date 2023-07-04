import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { InputLabel,Box, Typography } from '@mui/material';
import {Radio} from '@mui/material';

export default function Form2() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="entite"
            name="Entité"
            label="Entité qui sollicite"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box display="flex" alignItems="center" justifyContent="space-between" ml={2}>
        <Box>
        <InputLabel htmlFor="perimetre">Périmetre:</InputLabel>
          <FormControlLabel
            control={
              <Radio
                id="checkbox-perimetre-national"
                name="perimetre"
                value="national"
             />
            }
            label="National"
          />
          <FormControlLabel
            control={
              <Radio
                id="checkbox-perimetre-international"
                name="perimetre"
                value="international"
              />
            }
            label="International"
          />
          <FormControlLabel
            control={
            <Radio
              id="checkbox-perimetre-europeen"
              name="perimetre"
              value="europeen"
            />
            }
             label="Européen"
          />
        </Box>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="datedebut"
            name="datedebut"
            label="Année début de l'action"
            fullWidth
            autoComplete="year"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="datefin"
            name="datefin"
            label="Date fin de l'action"
            fullWidth
            autoComplete="year"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Nature activité"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Temps Passè"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Nature aide"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Les champs avec * sont obligatoires
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}