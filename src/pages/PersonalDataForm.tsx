import {
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Autocomplete,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
const MyFormSection = () => {
    const [countriesList, setCountriesList] = useState([{ label: "" }])
    const [countrySelected, setCountrySelected] = useState("")
    const [ethnicSelected, setEthnicSelected] = useState("")
    const [hasDisability, setHasDisability] = useState("")
    const [hasSisben, setHasSisben] = useState("")
    const genderOptions = [
        { label: 'Masculino' },
        { label: 'Femenino' },
    ];
    const documentType = [
        { label: 'Cédula de Ciudadanía' },
        { label: 'Tarjeta de Identidad' },
        { label: 'Cédula de Extranjería' },
        { label: 'Registro Civil' },
        { label: 'Número de Identificación Tributaria' },
        { label: 'Pasaporte' },
        { label: 'Visa' },
        { label: 'Documento Nacional de Identidad Extranjera' },
        { label: 'Certificado Cabildo' },
        { label: 'Permiso por Protección Temporal' },
    ];
    const expeditionCity = [
        { label: "Leticia(Amazonas)" },
        { label: "Medellín(Antioquia)" },
        { label: "Arauca(Arauca)" },
        { label: "Barranquilla(Atlántico)" },
        { label: "Bogotá(Bogotá D.C.)" },
        { label: "Cartagena(Bolívar)" },
        { label: "Tunja(Boyacá)" },
        { label: "Manizales(Caldas)" },
        { label: "Florencia(Caquetá)" },
        { label: "Yopal(Casanare)" },
        { label: "Popayán(Cauca)" },
        { label: "Valledupar(Cesar)" },
        { label: "Quibdó(Chocó)" },
        { label: "Montería(Córdoba)" },
        { label: "Bogotá(Cundinamarca)" },
        { label: "Inírida(Guainía)" },
        { label: "San José del Guaviare(Guaviare)" },
        { label: "Neiva(Huila)" },
        { label: "Riohacha(La Guajira)" },
        { label: "Santa Marta(Magdalena)" },
        { label: "Villavicencio(Meta)" },
        { label: "Pasto(Nariño)" },
        { label: "Cúcuta(Norte de Santander)" },
        { label: "Mocoa(Putumayo)" },
        { label: "Armenia(Quindío)" },
        { label: "Pereira(Risaralda)" },
        { label: "Bucaramanga(Santander)" },
        { label: "Sincelejo(Sucre)" },
        { label: "Ibagué(Tolima)" },
        { label: "Cali(Valle del Cauca)" },
        { label: "Mitú(Vaupés)" },
        { label: "Puerto Carreño(Vichada)" }
    ];
    const colombianDepartments = [
        { label: "Amazonas" },
        { label: "Antioquia" },
        { label: "Arauca" },
        { label: "Atlántico" },
        { label: "Bolívar" },
        { label: "Boyacá" },
        { label: "Caldas" },
        { label: "Caquetá" },
        { label: "Casanare" },
        { label: "Cauca" },
        { label: "Cesar" },
        { label: "Chocó" },
        { label: "Córdoba" },
        { label: "Cundinamarca" },
        { label: "Guainía" },
        { label: "Guaviare" },
        { label: "Huila" },
        { label: "La Guajira" },
        { label: "Magdalena" },
        { label: "Meta" },
        { label: "Nariño" },
        { label: "Norte de Santander" },
        { label: "Putumayo" },
        { label: "Quindío" },
        { label: "Risaralda" },
        { label: "San Andrés y Providencia" },
        { label: "Santander" },
        { label: "Sucre" },
        { label: "Tolima" },
        { label: "Valle del Cauca" },
        { label: "Vaupés" },
        { label: "Vichada" }
    ];
    const maritalStatus = [
        { label: "Soltero" },
        { label: "Casado" },
        { label: "Unión Libre" },
        { label: "Viudo" },
        { label: "Separado" },
        { label: "Divorciado" }
    ];
    const ethnicOptions = [
        { label: "Indígena" },
        { label: "Afrocolombiano" },
        { label: "Rom ó Gitano" },
        { label: "Raizal" },
        { label: "No Aplica" }
    ];
    const disabilityOptions = [
        { label: "Auditiva - Sordo Profundo Usuario de Lengua de Señas" },
        { label: "Motora - Paraplejia" },
        { label: "Visual - Ceguera Total" },
        { label: "Motora - Lesión Neuromuscular" },
        { label: "Auditiva - Hipoacusico Usuario de Lengua de Señas" },
        { label: "Auditiva - Hipoacusico Oralizado" },
        { label: "Motora - Cuadriplejia" },
        { label: "Motora - Hemiplejia" },
        { label: "Motora - Distrofia Muscular" },
        { label: "Motora - Amputación" },
        { label: "Motora - Parálisis Cerebral" },
        { label: "Visual - Baja Visión" },
        { label: "Psicosocial" },
        { label: "Motora - Otra" },
        { label: "Intelectual" },
        { label: "Multiple" },
        { label: "Psicosocial - Esquizofrenia" },
        { label: "Déficit de atención e hiperactividad" },
        { label: "Síndrome de Asperger" }
    ];
    const blackOptions = [
        { label: "No Aplica" },
        { label: "Afrocolombianos" },
        { label: "Raizales" },
        { label: "Palenqueros" },
        { label: "Otras Comunidades Negras" }
    ]
    const assistanceOptions = [
        { label: "Ninguno" },
        { label: "Implante Coclear" },
        { label: "Audífonos" },
        { label: "Perro Guía" },
        { label: "Bastón Guía" },
        { label: "Silla de Ruedas" },
        { label: "Bastón de Apoyo" },
        { label: "Caminador" },
        { label: "Ayuda de Otras Personas" },
        { label: "Muletas" },
        { label: "Aditamentos (prótesis, férulas, implantes)" },
        { label: "Otra" }
    ];
    const lgtbiCommunity = [
        { label: "Prefiero no contestar" },
        { label: "Si" },
        { label: "No" },
    ];
    const getCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name');
            const countries = await response.json();
            return countries.map(country => ({
                label: country.name.common
            })).sort((a, b) => {
                if (a.label < b.label) {
                    return -1;
                }
                if (a.label > b.label) {
                    return 1;
                }
                return 0;
            });
        } catch (error) {
            console.error("Error fetching countries:", error);
            return [];
        }
    };
    const sisbenGroups = () => {
        let formattedGroups = [];

        // Generar los grupos A1 a A5
        for (let i = 1; i <= 5; i++) {
            formattedGroups.push({ label: `Grupo A${i}` });
        }

        // Generar los grupos B1 a B7
        for (let i = 1; i <= 7; i++) {
            formattedGroups.push({ label: `Grupo B${i}` });
        }

        // Generar los grupos C1 a C18
        for (let i = 1; i <= 18; i++) {
            formattedGroups.push({ label: `Grupo C${i}` });
        }

        // Generar los grupos D1 a D21
        for (let i = 1; i <= 21; i++) {
            formattedGroups.push({ label: `Grupo D${i}` });
        }

        // Imprimir el arreglo
        return formattedGroups;
    }
    const estratos = () => {
        let estratos = [];

        // Generar los grupos A1 a A5
        for (let i = 1; i <= 6; i++) {
            estratos.push({ label: `${i}` });
        }
        return estratos
    }
    useEffect(() => {
        getCountries().then(res => setCountriesList(res))
    }, [])


    return (
        <div>
            <Accordion defaultExpanded>
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
                            <Autocomplete
                                id="document-autocomplete"
                                options={documentType}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Tipo de Documento" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Documento Identificación" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="document-autocomplete"
                                options={expeditionCity}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Lugar de expedición" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Fecha de expedición del documento"
                                    slots={{ textField: (params) => <TextField {...params} fullWidth /> }} />
                            </LocalizationProvider>
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
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={maritalStatus}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Estado Civil" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Fecha de nacimiento"
                                    slots={{ textField: (params) => <TextField {...params} fullWidth /> }} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={countriesList}
                                getOptionLabel={(option) => option.label}
                                onChange={(event, value) => setCountrySelected(value?.label || "")}
                                renderInput={(params) => <TextField {...params} label="Pais de nacimiento" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                disabled={countrySelected !== "Colombia"}
                                options={colombianDepartments}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Departamento de nacimiento" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={colombianDepartments}
                                disabled={countrySelected !== "Colombia"}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Ciudad de nacimiento" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormLabel>¿Tiene usted equipo de cómputo y/o dispositivo móvil?</FormLabel>
                            <RadioGroup row defaultValue="outlined" name="radio-buttons-group">
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormLabel>	¿Tiene usted conectividad de red (internet)?</FormLabel>
                            <RadioGroup row defaultValue="outlined" name="radio-buttons-group">
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormLabel>¿Solicitó Presupuesto Participativo?</FormLabel>
                            <RadioGroup row defaultValue="outlined" name="radio-buttons-group">
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={ethnicOptions}
                                getOptionLabel={(option) => option.label}
                                onChange={(event, value) => setEthnicSelected(value?.label || "")}
                                renderInput={(params) => <TextField {...params} label="Grupo étnico" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={ethnicOptions}
                                getOptionLabel={(option) => option.label}
                                disabled={ethnicSelected !== "Indígena"}
                                renderInput={(params) => <TextField {...params} label="Pueblo indigena al que pertenece" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={blackOptions}
                                getOptionLabel={(option) => option.label}
                                disabled={ethnicSelected !== "Afrocolombiano"}
                                renderInput={(params) => <TextField {...params} label="Comunidad negra a la que pertenece" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormLabel>¿Presenta algún tipo de Discapacidad?</FormLabel>
                            <RadioGroup row defaultValue="outlined" name="radio-buttons-group"
                                onChange={(event, value) => setHasDisability(value || "")}>
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormLabel>¿Es Desplazado o Victima de violencia?</FormLabel>
                            <RadioGroup row defaultValue="outlined" name="radio-buttons-group">
                                <FormControlLabel disabled={hasDisability !== "si"} value="si" control={<Radio />} label="Si" />
                                <FormControlLabel disabled={hasDisability !== "si"} value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={disabilityOptions}
                                getOptionLabel={(option) => option.label}
                                disabled={hasDisability !== "si"}
                                renderInput={(params) => <TextField {...params} label="Tipo de Discapacidad" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={assistanceOptions}
                                getOptionLabel={(option) => option.label}
                                disabled={hasDisability !== "si"}
                                renderInput={(params) => <TextField {...params} label="	¿Utiliza o tiene algún tipo de apoyo?" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormLabel>¿Tiene Sisben?</FormLabel>
                            <RadioGroup row defaultValue="outlined" name="radio-buttons-group"
                                onChange={(event, value) => setHasSisben(value || "")}>
                                <FormControlLabel value="si" control={<Radio />} label="Si" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={sisbenGroups()}
                                getOptionLabel={(option) => option.label}
                                disabled={hasSisben !== "si"}
                                renderInput={(params) => <TextField {...params} label="Grupo de Sisben" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Correo Electrónico" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Confirmar correo" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Correo alternativo" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={lgtbiCommunity}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="¿Te identificas como miembro de la comunidad LGBTIQ+?" />}
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
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Dirección" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={estratos()}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Estrato" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Teléfono" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Celular" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Dirección" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={expeditionCity}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Ciudad" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={expeditionCity}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Barrio" />}
                            />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    DATOS DE INSCRIPCIÓN PARA EL PERIODO - 2024-2
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={[]}
                                renderInput={(params) => <TextField {...params} label="Primera Opción" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={[]}
                                renderInput={(params) => <TextField {...params} label="Campus" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={[]}
                                renderInput={(params) => <TextField {...params} label="Segunda Opción" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Autocomplete
                                id="gender-autocomplete"
                                options={[]}
                                renderInput={(params) => <TextField {...params} label="Campus" />}
                            />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>

    );
};

export default MyFormSection;
