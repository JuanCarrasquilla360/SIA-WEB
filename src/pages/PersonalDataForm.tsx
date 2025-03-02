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
import { Alumno, AlumnoData, Ciudad, Departamento, getAlumno, getCiudades, getCursosExtension, getDepartamentos, getEgresado, getPaises, getTipoDocumento, Pais, postAlumno } from "../helper/backendRequest";
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
interface AutocompleteIdStr {
  label: string;
  value: string
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
    tipoUsuario: string
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
    tipoUsuario: ""
  });

  const [alumnoData, setAlumnoData] = useState<Alumno | null>(null);
  const [egresadoData, setEgresadoData] = useState<Alumno | null>(null);
  const [paises, setPaises] = useState<AutocompleteId[]>([]);
  const [departamentos, setDepartamentos] = useState<AutocompleteId[]>([]);
  const [ciudades, setCiudades] = useState<AutocompleteId[]>([]);
  const [ciudadesExp, setCiudadesExp] = useState<AutocompleteId[]>([]);
  const [tipoDoc, setTipoDoc] = useState<AutocompleteId[]>([]);
  const [cursos, setCursos] = useState<AutocompleteId[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener la información del alumno egresado
  const fetchAlumnoData = async () => {
    try {
      if (!id) return
      const data = await getAlumno(id);
      console.log(data.data[0]);

      setAlumnoData(data.data[0]);
    } catch (err) {
      setError('Hubo un error al obtener los datos del alumno');
    }
  };
  const fetchEgresadoData = async () => {
    try {
      if (!id) return
      const data = await getEgresado(id);
      console.log(data.data[0]);

      setEgresadoData(data.data[0]);
    } catch (err) {
      setError('Hubo un error al obtener los datos del alumno');
    }
  };

  // Función para obtener la lista de países
  const fetchPaises = async () => {
    try {
      const data = await getPaises();
      setPaises(data.data.map(pais => ({ label: pais.Pais, value: pais["Id Pais"] })));
    } catch (err) {
      setError('Hubo un error al obtener los países');
    }
  };

  useEffect(() => {
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
  // Función para obtener ciudades por departamento
  const fetchCursos = async () => {
    try {
      const { data } = await getCursosExtension();
      setCursos(data.map(curso => ({ label: curso.Curso, value: curso["Id Curso"] })))
    } catch (err) {
      setError('Hubo un error al obtener las ciudades');
    }
  };

  useEffect(() => {
    fetchPaises();
    fetchCiudadesExp(2);
    fetchAlumnoData();
    fetchTipoDocumento();
    fetchCursos();
    fetchEgresadoData()
  }, []);

  const [isEditable, setIsEditable] = useState(true);
  const [tipoUsuario, setTipoUsuario] = useState<AutocompleteIdStr[]>([
    { label: "Particular", value: "particular" },
    { label: "Comunidad ITM: Estudiantes", value: "comunidad_itm_estudiantes" },
    { label: "Comunidad ITM: Egresados", value: "comunidad_itm_egresados" },
    { label: "Comunidad ITM: Empleados", value: "comunidad_itm_empleados" },
    { label: "Comunidad ITM: Docentes", value: "comunidad_itm_docentes" },
    {
      label: "Familiares de los Empleados ITM en primer grado de consanguinidad, primero de afinidad y primero civil",
      value: "familiares_empleados_itm_primer_grado_consanguinidad_afinidad_civil"
    },
    {
      label: "Empleados adscritos al Municipio de Medellín / Comunidad Sinergia (Estudiantes, egresados, empleados, docentes de la IUPB e IUCM)",
      value: "empleados_municipio_medellin_comunidad_sinergia"
    }
  ]);


  useEffect(() => {
    console.log(alumnoData);
    if (!alumnoData) return
    if (alumnoData && alumnoData?.Estado === "no_registra") {
      alert("La cédula no existe");
      setIsEditable(true);
      return
    }
    setTipoUsuario((user => ([...user, { label: alumnoData.Estado, value: alumnoData.Estado }])))
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
      tipoUsuario: alumnoData.Estado
    });
    setIsEditable(false);

  }, [alumnoData]);



  const genderOptions: AutocompleteId[] = [{ label: "Masculino", value: 1 }, { label: "Femenino", value: 2 }];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAutocompleteChange = (
    _: React.SyntheticEvent,
    value: { label: string, value?: number | string } | null,
    fieldName: string
  ) => {
    setFormData({ ...formData, [fieldName]: value?.value ? value?.value : value?.label || "" });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      "IdTipoDocumento": formData.tipoDocumento!,
      "Documento": formData.documentoIdentificacion,
      "IdCiudadDocumento": formData.ciudadNacimiento!,
      "FechaExpedicion": formData.fechaExpedicion,
      "Apellidos": formData.apellidos!,
      "Nombres": formData.nombres!,
      "IdSexo": formData.genero!,
      "FechaNacimiento": formData.fechaNacimiento,
      "IdCiudadNacimiento": formData.ciudadNacimiento!,
      "CorreoElectronico": formData.correoElectronico!,
    }
    await postAlumno(body).then(() => alert("Usuario creado existosamente"))
    console.log("Formulario enviado: ", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {!alumnoData ? (
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
              <Grid item xs={12} sm={6} md={4} sx={{ display: !isEditable ? "none" : "block" }}>
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
              <Grid item xs={12} sm={6} md={4} sx={{ display: !isEditable ? "none" : "block" }}>
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
              <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                  id="gender-autocomplete"
                  options={tipoUsuario}
                  disabled={!isEditable}
                  onChange={(event, value) =>
                    handleAutocompleteChange(event, value, "tipoUsuario")
                  }
                  value={
                    tipoUsuario.find(
                      (option) => option.value === formData.tipoUsuario
                    ) || null
                  }
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField {...params} label="Tipo Usuario" />
                  )}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ) : (
        <Typography>{`El usuario con documento ${id} es estudiante`}</Typography>
      )}
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
            <Grid item xs={12} sm={12} md={12}>
              <Autocomplete
                id="gender-autocomplete"
                options={cursos}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Lista de Cursos" />
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
// estudiante, docente, egresado, no_registra(familiar empleado - empleado adscrito  - particular)