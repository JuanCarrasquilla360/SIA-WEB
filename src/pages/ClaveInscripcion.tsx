import { TextField, MenuItem, Select, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const ClaveInscripcion = () => {
    return (
        <form>
            <FormControl fullWidth margin="normal">
                <InputLabel id="tipo-doc-label">Tipo de Documento</InputLabel>
                <Select labelId="tipo-doc-label" id="tipo-doc" label="Tipo de Documento">
                    <MenuItem value="CC">Cédula de Ciudadanía</MenuItem>
                    <MenuItem value="TI">Tarjeta de Identidad</MenuItem>
                </Select>
            </FormControl>
            <TextField fullWidth margin="normal" id="documento" label="Documento de Identificación" variant="outlined" />
            <TextField fullWidth margin="normal" id="fecha-expedicion" label="Fecha de expedición de documento" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
            <FormControl fullWidth margin="normal">
                <InputLabel id="genero-label">Género</InputLabel>
                <Select labelId="genero-label" id="genero" label="Género">
                    <MenuItem value="M">Masculino</MenuItem>
                    <MenuItem value="F">Femenino</MenuItem>
                </Select>
            </FormControl>
            <TextField fullWidth margin="normal" id="apellidos" label="Apellidos" variant="outlined" />
            <TextField fullWidth margin="normal" id="nombres" label="Nombres" variant="outlined" />
            <FormControl fullWidth margin="normal">
                <InputLabel id="estado-civil-label">Estado Civil</InputLabel>
                <Select labelId="estado-civil-label" id="estado-civil" label="Estado Civil">
                    <MenuItem value="S">Soltero</MenuItem>
                    <MenuItem value="C">Casado</MenuItem>
                </Select>
            </FormControl>
            <TextField fullWidth margin="normal" id="fecha-nacimiento" label="Fecha de Nacimiento" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
            <FormControl fullWidth margin="normal">
                <InputLabel id="pais-label">País</InputLabel>
                <Select labelId="pais-label" id="pais" label="País">
                    <MenuItem value="CO">Colombia</MenuItem>
                    <MenuItem value="US">Estados Unidos</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel id="departamento-label">Departamento</InputLabel>
                <Select labelId="departamento-label" id="departamento" label="Departamento">
                    <MenuItem value="ANT">Antioquia</MenuItem>
                    <MenuItem value="CUN">Cundinamarca</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel id="ciudad-label">Ciudad</InputLabel>
                <Select labelId="ciudad-label" id="ciudad" label="Ciudad">
                    <MenuItem value="MED">Medellín</MenuItem>
                    <MenuItem value="BOG">Bogotá</MenuItem>
                </Select>
            </FormControl>
            <FormControl margin="normal">
                <RadioGroup row aria-labelledby="equipo-computo-label" name="equipo-computo">
                    <FormControlLabel value="si" control={<Radio />} label="Sí" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            {/* Añade más campos según sea necesario */}
            <Button type="submit" variant="contained" color="primary">Enviar</Button>
        </form>
    );
};

export default ClaveInscripcion;
