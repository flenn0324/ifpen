import React, { useState } from "react";
import { Box, TextField, Button, Select, MenuItem, Checkbox, FormControlLabel, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { InputLabel } from "@mui/material";

const SearchComponent = ({ onSearch, hideInput }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchQuery, setSearchQuery] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [perimeter, setPerimeter] = useState({
    national: false,
    international: false,
    european: false,
  });
  const [direction, setDirection] = useState("");
  const [department, setDepartment] = useState("");
  const [markerCategory, setMarkerCategory] = useState("");
  const [researcher, setResearcher] = useState("");

  const handleSearch = () => {
    // Call the onSearch function with the search criteria
    onSearch({
      searchQuery,
      startYear,
      endYear,
      perimeter,
      direction,
      department,
      markerCategory,
      researcher,
    });
  };

  return (
    <Box m={4} p={5} borderRadius="4px" bgcolor={colors.blueAccent[900]}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={7}>
        <TextField
          sx={{ pr: 4 }}
          label="Entité"
          variant="standard"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
        />

        <TextField
          sx={{ pr: 4 }}
          label="Début période"
          type="date"
          variant="standard"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Fin période"
          type="date"
          variant="standard"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between" mb={5}>
        <Box>
          <InputLabel htmlFor="perimetre">Périmetre:</InputLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={perimeter.national}
                onChange={(e) =>
                  setPerimeter((prevPerimeter) => ({
                    ...prevPerimeter,
                    national: e.target.checked,
                  }))
                }
                color="primary"
              />
            }
            label="National"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={perimeter.international}
                onChange={(e) =>
                  setPerimeter((prevPerimeter) => ({
                    ...prevPerimeter,
                    international: e.target.checked,
                  }))
                }
                color="primary"
              />
            }
            label="International"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={perimeter.european}
                onChange={(e) =>
                  setPerimeter((prevPerimeter) => ({
                    ...prevPerimeter,
                    european: e.target.checked,
                  }))
                }
                color="primary"
              />
            }
            label="Européen"
          />
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between" mb={7}>

        <Box width="100%" mr={4} >
          <InputLabel htmlFor="perimetre">Direction :</InputLabel>
          <Select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            variant="standard"
            fullWidth

          >
            <MenuItem value="" disabled>
              {direction ? '' : 'Sélectionnez une Direction...'}
            </MenuItem>
            <MenuItem value="">Tous</MenuItem>
            <MenuItem value="direction1">Direction 1</MenuItem>
            <MenuItem value="direction2">Direction 2</MenuItem>
            <MenuItem value="direction3">Direction 3</MenuItem>
            <MenuItem value="direction4">Direction 4</MenuItem>
            <MenuItem value="direction5">Direction 5</MenuItem>
            <MenuItem value="direction6">Direction 6</MenuItem>
            <MenuItem value="direction7">Direction 7</MenuItem>
            <MenuItem value="direction8">Direction 8</MenuItem>
          </Select>
        </Box>
        <Box width="100%" mr={4} >
          <InputLabel htmlFor="perimetre">Département :</InputLabel>
          <Select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            variant="standard"
            fullWidth
          >
            <MenuItem value="" disabled>Sélectionnez un Departement...</MenuItem>
            <MenuItem value="">Tous</MenuItem>
            <MenuItem value="department1">Département 1</MenuItem>
            <MenuItem value="department2">Département 2</MenuItem>
            <MenuItem value="department3">Département 3</MenuItem>
            <MenuItem value="department4">Département 4</MenuItem>
            <MenuItem value="department5">Département 5</MenuItem>
            <MenuItem value="department6">Département 6</MenuItem>
            <MenuItem value="department7">Département 7</MenuItem>
            <MenuItem value="department8">Département 8</MenuItem>
          </Select>
        </Box>
        <Box width="100%" >
          <InputLabel htmlFor="perimetre">Catégorie :</InputLabel>
          <Select
            value={markerCategory}
            onChange={(e) => setMarkerCategory(e.target.value)}
            variant="standard"
            fullWidth
          >
            <MenuItem value="" disabled>Sélectionnez une categorie...</MenuItem>
            <MenuItem value="">Tous</MenuItem>
            <MenuItem value="category1">Catégorie 1</MenuItem>
            <MenuItem value="category2">Catégorie 2</MenuItem>
            <MenuItem value="category3">Catégorie 3</MenuItem>
            <MenuItem value="category4">Catégorie 4</MenuItem>
            <MenuItem value="category5">Catégorie 5</MenuItem>
            <MenuItem value="category6">Catégorie 6</MenuItem>
          </Select>
        </Box>

        {!hideInput && (
          <div>
            <InputLabel htmlFor="NomChercheur">Nom de chercheur :</InputLabel>
            <TextField
              label="Nom Chercheur"
              variant="standard"
              value={researcher}
              onChange={(e) => setResearcher(e.target.value)}
            />
          </div>
        )}


      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <Button variant="contained" onClick={handleSearch} fullWidth sx={{
          bgcolor: theme.palette.mode === "dark" ? colors.greenAccent[600] : colors.greenAccent[400],
          ":hover": {
            bgcolor: theme.palette.mode === "dark" ? colors.greenAccent[800] : colors.greenAccent[200],
          }
        }}>
          Rechercher
        </Button>
      </Box>

    </Box>
  );
};

export default SearchComponent;
