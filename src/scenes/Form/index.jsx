import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form1 from '../../components/Form/Form1';
import Form2 from '../../components/Form/Form2';
import Form3 from '../../components/Form/Form3';
import Header from "../../components/Header";


const steps = ['Categorie et marqueur', 'Informations Action', 'Récapitulation'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Form1 />;
    case 1:
      return <Form2 />;
    case 2:
      return <Form3 />;
    default:
      throw new Error('Unknown step');
  }
}


const AddForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box m="20px">
      <Header title="Ajouter" subtitle="Ajouter une nouvelle action " />
      <Container component="main" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Nouvelle action exterieure 
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Succes !
              </Typography>
              <Typography variant="subtitle1">
                Vous avez ajouté une nouvelle action par succes.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Retour
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Suivant'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default AddForm;