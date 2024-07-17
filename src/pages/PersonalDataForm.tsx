import { Grid, TextField, Select, MenuItem, FormControl, InputLabel, Autocomplete, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const MyFormSection = () => {
    const genderOptions = [
        { label: 'Masculino' },
        { label: 'Femenino' },
    ];
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Datos Personales
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField variant='outlined' label="Tipo de Documento" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Documento Identificación" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Fecha de expedición del documento" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Apellidos" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Nombres" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={genderOptions}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Género" />}
                            />
                        </Grid>
                        {/* Agrega más campos según tus necesidades */}
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Datos residencia
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Datos Estudio
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </div>

    );
};

export default MyFormSection;
