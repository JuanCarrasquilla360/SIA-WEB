import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IconInfoOctagon } from "@tabler/icons-react";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export interface Countries {
  name: {
    common: string;
    official: string;
    nativeName: NativeName;
  };
}

export interface NativeName {
  eng: Eng;
}

export interface Eng {
  official: string;
  common: string;
}
const MyFormSection = () => {
  const [countriesList, setCountriesList] = useState([{ label: "" }]);
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [file, setFile] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };
  const [formData, setFormData] = useState({
    tipoDocumento: "",
    documentoIdentificacion: "",
    lugarExpedicion: "",
    fechaExpedicion: dayjs(null),
    apellidos: "",
    nombres: "",
    genero: "",
    fechaNacimiento: dayjs(null),
    paisNacimiento: "",
    departamentoNacimiento: "",
    ciudadNacimiento: "",
    correoElectronico: "",
    confirmarCorreo: "",
  });

  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    console.log(id);

    if (id === "123") {
      setFormData({
        tipoDocumento: "Cédula de Ciudadanía",
        documentoIdentificacion: "123456789",
        lugarExpedicion: "Medellín(Antioquia)",
        fechaExpedicion: dayjs("2020-01-01"),
        apellidos: "Pérez Gómez",
        nombres: "Juan Carlos",
        genero: "Masculino",
        fechaNacimiento: dayjs("1990-05-15"),
        paisNacimiento: "Colombia",
        departamentoNacimiento: "Antioquia",
        ciudadNacimiento: "Medellín(Antioquia)",
        correoElectronico: "juan.perez@example.com",
        confirmarCorreo: "juan.perez@example.com",
      });
      setIsEditable(false);
    } else {
      alert("La cédula no existe");
      setIsEditable(true);
    }
  }, [id]);
  const cursos = [
    { label: "Introducción a la Programación" },
    { label: "Marketing Digital para Emprendedores" },
    { label: "Excel Avanzado y Herramientas de Negocios" },
    { label: "Fotografía Digital y Edición" },
    { label: "Fundamentos de Diseño Gráfico" },
    { label: "Habilidades de Comunicación Efectiva" },
    { label: "Técnicas de Ventas y Negociación" },
    { label: "Desarrollo Web con HTML y CSS" },
    { label: "Introducción al Análisis de Datos" },
    { label: "Gestión de Proyectos con Metodologías Ágiles" },
  ];
  const campus = [
    { label: "Campus Fraternidad" },
    { label: "Campus Robledo" },
    { label: "Campus Castilla" },
    { label: "Campus La Floresta" },
    { label: "Campus Boston" },
    { label: "Virtual" },
  ];
  const genderOptions = [{ label: "Masculino" }, { label: "Femenino" }];
  const documentType = [
    { label: "Cédula de Ciudadanía" },
    { label: "Tarjeta de Identidad" },
    { label: "Cédula de Extranjería" },
    { label: "Registro Civil" },
    { label: "Número de Identificación Tributaria" },
    { label: "Pasaporte" },
    { label: "Visa" },
    { label: "Documento Nacional de Identidad Extranjera" },
    { label: "Certificado Cabildo" },
    { label: "Permiso por Protección Temporal" },
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
    { label: "Puerto Carreño(Vichada)" },
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
    { label: "Vichada" },
  ];
  const getCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name"
      );
      const countries: Countries[] = await response.json();
      console.log(countries);

      return countries
        .map((country) => ({
          label: country.name.common,
        }))
        .sort((a, b) => {
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

  useEffect(() => {
    getCountries().then((res) => setCountriesList(res));
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAutocompleteChange = (
    _: React.SyntheticEvent,
    value: { label: string } | null,
    fieldName: string
  ) => {
    setFormData({ ...formData, [fieldName]: value?.label || "" });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Formulario enviado: ", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
            {/* Tipo de Documento */}
            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                id="document-type-autocomplete"
                options={documentType}
                onChange={(event, value) =>
                  handleAutocompleteChange(event, value, "tipoDocumento")
                }
                disabled={!isEditable}
                value={
                  documentType.find(
                    (option) => option.label === formData.tipoDocumento
                  ) || null
                }
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Tipo de Documento" fullWidth />
                )}
              />
            </Grid>

            {/* Documento Identificación */}
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Documento Identificación"
                name="documentoIdentificacion"
                disabled={!isEditable}
                onChange={handleChange}
                value={formData.documentoIdentificacion}
                fullWidth
              />
            </Grid>

            {/* Lugar de Expedición */}
            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                id="expedition-city-autocomplete"
                options={expeditionCity}
                disabled={!isEditable}
                onChange={(event, value) =>
                  handleAutocompleteChange(event, value, "lugarExpedicion")
                }
                value={
                  expeditionCity.find(
                    (option) => option.label === formData.lugarExpedicion
                  ) || null
                }
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Lugar de expedición"
                    fullWidth
                  />
                )}
              />
            </Grid>

            {/* Fecha de Expedición */}
            <Grid item xs={12} sm={6} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Fecha de Expedición"
                  value={formData.fechaExpedicion}
                  disabled={!isEditable}
                  onChange={(newValue: Dayjs | null) =>
                    setFormData({ ...formData, fechaExpedicion: newValue! })
                  }
                  slots={{
                    textField: (params) => <TextField {...params} fullWidth />,
                  }}
                />
              </LocalizationProvider>
            </Grid>

            {/* Nombres */}
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Nombres"
                name="nombres"
                disabled={!isEditable}
                onChange={handleChange}
                value={formData.nombres}
                fullWidth
              />
            </Grid>

            {/* Apellidos */}
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Apellidos"
                name="apellidos"
                disabled={!isEditable}
                onChange={handleChange}
                value={formData.apellidos}
                fullWidth
              />
            </Grid>

            {/* Género */}
            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                id="gender-autocomplete"
                options={genderOptions}
                disabled={!isEditable}
                onChange={(event, value) =>
                  handleAutocompleteChange(event, value, "genero")
                }
                value={
                  genderOptions.find(
                    (option) => option.label === formData.genero
                  ) || null
                }
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Género" fullWidth />
                )}
              />
            </Grid>

            {/* Fecha de Nacimiento */}
            <Grid item xs={12} sm={6} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Fecha de Nacimiento"
                  disabled={!isEditable}
                  value={formData.fechaNacimiento}
                  onChange={(newValue: Dayjs | null) =>
                    setFormData({ ...formData, fechaNacimiento: newValue! })
                  }
                  slots={{
                    textField: (params) => <TextField {...params} fullWidth />,
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                id="gender-autocomplete"
                options={countriesList}
                getOptionLabel={(option) => option.label}
                disabled={!isEditable}
                onChange={(event, value) =>
                  handleAutocompleteChange(event, value, "paisNacimiento")
                }
                value={
                  countriesList.find(
                    (option) => option.label === formData.paisNacimiento
                  ) || null
                }
                renderInput={(params) => (
                  <TextField {...params} label="Pais de nacimiento" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                id="gender-autocomplete"
                disabled={formData.paisNacimiento !== "Colombia" || !isEditable}
                options={colombianDepartments}
                onChange={(event, value) =>
                  handleAutocompleteChange(
                    event,
                    value,
                    "departamentoNacimiento"
                  )
                }
                value={
                  colombianDepartments.find(
                    (option) => option.label === formData.departamentoNacimiento
                  ) || null
                }
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Departamento de nacimiento" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                id="gender-autocomplete"
                options={expeditionCity}
                disabled={formData.paisNacimiento !== "Colombia" || !isEditable}
                onChange={(event, value) =>
                  handleAutocompleteChange(event, value, "ciudadNacimiento")
                }
                value={
                  expeditionCity.find(
                    (option) => option.label === formData.ciudadNacimiento
                  ) || null
                }
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Ciudad de nacimiento" />
                )}
              />
            </Grid>

            {/* Correo Electrónico */}
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Correo Electrónico"
                name="correoElectronico"
                disabled={!isEditable}
                onChange={handleChange}
                value={formData.correoElectronico}
                fullWidth
              />
            </Grid>

            {/* Confirmar Correo */}
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Confirmar Correo"
                name="confirmarCorreo"
                disabled={!isEditable}
                onChange={handleChange}
                value={formData.confirmarCorreo}
                fullWidth
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
                options={cursos}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Primera Opción" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Autocomplete
                id="gender-autocomplete"
                options={campus}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Campus" />
                )}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Adjuntar archivos
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Box component={"div"} display={"flex"} justifyContent={"center"}>
                <Typography display={"flex"} alignItems={"center"}>
                  Cedula
                </Typography>
                <Tooltip title="Se recomienda adjuntar archivos con número de cedula seguido de un guión bajo (_) seguido del nombre sugerido. Ejemplo: 123_cedula  ">
                  <IconButton>
                    <IconInfoOctagon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Button variant="contained" component="label">
                Adjuntar Cedula
                <input type="file" hidden onChange={handleFileChange} />
              </Button>

              {file && (
                <Box mt={2}>
                  <p>Archivo seleccionado: {file.name}</p>
                </Box>
              )}
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
      >
        Enviar
      </Button>
    </form>
  );
};

export default MyFormSection;
