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
import { Alumno, AlumnoData, Ciudad, Departamento, getAlumnoEgresado, getCiudades, getDepartamentos, getPaises, getTipoDocumento, Pais } from "../helper/backendRequest";
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
interface AutocompleteId {
  label: string;
  value: number
}

const MyFormSection = () => {

  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [file, setFile] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };
  const [formData, setFormData] = useState<{
    tipoDocumento: number | null;
    documentoIdentificacion: string;
    lugarExpedicion: number | null;
    fechaExpedicion: dayjs.Dayjs;
    apellidos: string;
    nombres: string;
    genero: number | null;
    fechaNacimiento: dayjs.Dayjs;
    paisNacimiento: number | null;
    departamentoNacimiento: number | null;
    ciudadNacimiento: number | null;
    correoElectronico: string,
    confirmarCorreo: string;
  }>({
    tipoDocumento: null,
    documentoIdentificacion: "",
    lugarExpedicion: null,
    fechaExpedicion: dayjs(null),
    apellidos: "",
    nombres: "",
    genero: null,
    fechaNacimiento: dayjs(null),
    paisNacimiento: null,
    departamentoNacimiento: null,
    ciudadNacimiento: null,
    correoElectronico: "",
    confirmarCorreo: "",
  });

  const [alumnoData, setAlumnoData] = useState<Alumno | null>(null);
  const [paises, setPaises] = useState<AutocompleteId[]>([]);
  const [departamentos, setDepartamentos] = useState<AutocompleteId[]>([]);
  const [ciudades, setCiudades] = useState<AutocompleteId[]>([]);
  const [ciudadesExp, setCiudadesExp] = useState<AutocompleteId[]>([]);
  const [tipoDoc, setTipoDoc] = useState<AutocompleteId[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener la información del alumno egresado
  const fetchAlumnoData = async () => {
    try {
      if (!id) return
      const data = await getAlumnoEgresado(id);
      setAlumnoData(data.data[0]);
    } catch (err) {
      setError('Hubo un error al obtener los datos del alumno');
    }
  };

  // Función para obtener la lista de países
  const fetchPaises = async () => {
    try {
      const data = await getPaises();
      console.log(data);

      setPaises(data.data.map(pais => ({ label: pais.pais, value: pais["Id Pais"] })));
    } catch (err) {
      setError('Hubo un error al obtener los países');
    }
  };

  useEffect(() => {
    console.log(formData);
    if (formData.paisNacimiento && formData.paisNacimiento === 1) {
      fetchDepartamentos(1)
    }
    if (formData.departamentoNacimiento) {
      fetchCiudades(formData.departamentoNacimiento)
    }
  }, [formData])

  // Función para obtener departamentos por país
  const fetchDepartamentos = async (idPais: number) => {
    try {
      const data = await getDepartamentos(idPais);
      setDepartamentos(data.data.map(dep => ({ label: dep.Depto, value: dep["Id Depto"] })));
    } catch (err) {
      setError('Hubo un error al obtener los departamentos');
    }
  };

  // Función para obtener ciudades por departamento
  const fetchCiudades = async (idDepto: number) => {
    try {
      const data = await getCiudades(idDepto);
      setCiudades(data.data.map(ciudad => ({ label: ciudad.Ciudad, value: ciudad["Id Ciudad"] })));
    } catch (err) {
      setError('Hubo un error al obtener las ciudades');
    }
  };
  // Función para obtener ciudades por departamento
  const fetchCiudadesExp = async (idDepto: number) => {
    try {
      const data = await getCiudades(idDepto);
      setCiudadesExp(data.data.map(ciudad => ({ label: ciudad.Ciudad, value: ciudad["Id Ciudad"] })));
    } catch (err) {
      setError('Hubo un error al obtener las ciudades');
    }
  };
  // Función para obtener ciudades por departamento
  const fetchTipoDocumento = async () => {
    try {
      const data = await getTipoDocumento();
      setTipoDoc(data.data.map(documento => ({ label: documento["Tipo Documento"], value: documento["Id Tipo Documento"] })));
    } catch (err) {
      setError('Hubo un error al obtener las ciudades');
    }
  };

  useEffect(() => {
    fetchPaises();
    fetchCiudadesExp(2);
    fetchAlumnoData();
    fetchTipoDocumento();
  }, []);

  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    console.log(alumnoData);
    if (!alumnoData) return
    if (alumnoData && alumnoData?.Estado === "no_registra") {
      alert("La cédula no existe");
      setIsEditable(true);
      return
    }
    setFormData({
      tipoDocumento: alumnoData?.["Id Tipo Documento"]!,
      documentoIdentificacion: alumnoData?.Documento!,
      lugarExpedicion: alumnoData?.["Id Ciudad Documento"],
      fechaExpedicion: dayjs(alumnoData?.["Fecha Expedicion"]!),
      apellidos: alumnoData?.Apellidos!,
      nombres: alumnoData?.Nombres!,
      genero: alumnoData["Id Sexo"],
      fechaNacimiento: dayjs(alumnoData?.["Fecha Nacimiento"]!),
      paisNacimiento: 1,
      departamentoNacimiento: 2,
      ciudadNacimiento: alumnoData?.["Id Ciudad Nacimiento"],
      correoElectronico: alumnoData?.["Correo Electronico"]!,
      confirmarCorreo: alumnoData?.["Correo Electronico"]!,
    });
    setIsEditable(false);

  }, [alumnoData]);
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
  const genderOptions: AutocompleteId[] = [{ label: "Masculino", value: 1 }, { label: "Femenino", value: 2 }];


  useEffect(() => {
    fetchPaises();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAutocompleteChange = (
    _: React.SyntheticEvent,
    value: { label: string, value?: number } | null,
    fieldName: string
  ) => {
    setFormData({ ...formData, [fieldName]: value?.value ? value?.value : value?.label || "" });
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
                options={tipoDoc}
                onChange={(event, value) =>
                  handleAutocompleteChange(event, value, "tipoDocumento")
                }
                disabled={!isEditable}
                value={
                  tipoDoc.find(
                    (option) => option.value === formData.tipoDocumento
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
                options={ciudadesExp}
                disabled={!isEditable}
                onChange={(event, value) =>
                  handleAutocompleteChange(event, value, "lugarExpedicion")
                }
                value={
                  ciudadesExp.find(
                    (option) => option.value === formData.lugarExpedicion
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
                    (option) => option.value === formData.genero
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
                options={paises}
                getOptionLabel={(option) => option.label}
                disabled={!isEditable}
                onChange={(event, value) =>
                  handleAutocompleteChange(event, value, "paisNacimiento")
                }
                value={
                  paises.find(
                    (option) => option.value === formData.paisNacimiento
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
                disabled={formData.paisNacimiento !== 1 || !isEditable}
                options={departamentos}
                onChange={(event, value) =>
                  handleAutocompleteChange(
                    event,
                    value,
                    "departamentoNacimiento"
                  )
                }
                value={
                  departamentos.find(
                    (option) => option.value === formData.departamentoNacimiento
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
                options={ciudades}
                disabled={formData.paisNacimiento !== 1 || !isEditable}
                onChange={(event, value) =>
                  handleAutocompleteChange(event, value, "ciudadNacimiento")
                }
                value={
                  ciudades.find(
                    (option) => option.value === formData.ciudadNacimiento
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
