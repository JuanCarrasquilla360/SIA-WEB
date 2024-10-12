import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
  OutlinedInput,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home: React.FC = () => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        color={"#161E3E"}
        fontWeight={"bold"}
      >
        Proceso de Inscripción ITM 2024-2
      </Typography>

      <Typography variant="h6" gutterBottom>
        Para el período 2024-2, el proceso de inscripción en el ITM consta de
        dos pasos:
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4 }} dense>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText
            primary="Diligencia tu Información Personal"
            secondary="Completa los campos correspondientes a tu información personal, datos de residencia y los programas a los que deseas acceder en el ITM."
          />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText
            primary="Adjunta los Documentos Requeridos"
            secondary="Sube los documentos necesarios según tu tipo de inscripción."
          />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{}}>
        Recomendaciones:
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4 }} dense>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText
            primary="Documento de Identidad"
            secondary="Ingresa tu documento de identidad sin puntos ni espacios."
          />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText
            primary="Formato de Documentos"
            secondary="Asegúrate de contar con los documentos requeridos en formato PDF antes de iniciar el proceso de inscripción. El nombre del archivo no debe contener tildes, puntos ni caracteres especiales."
          />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText
            primary="Entrega Completa"
            secondary="Recuerda que si no entregas alguno de los documentos requeridos, no podrás ser admitido."
          />
        </ListItem>
      </List>

      <Box>
        <Typography variant="h6" gutterBottom>
          Información Adicional para Estudiantes de Pregrado
        </Typography>
        <Typography fontSize={"14px"} color={"#00000099"}>
          Si eres un aspirante nuevo, antes de iniciar tu inscripción asegúrate
          de conocer los resultados de tus pruebas ICFES/Saber 11 o el número de
          registro en la prueba.
        </Typography>
        <Typography fontSize={"14px"} color={"#00000099"}>
          Si no los conoces, puedes consultarlos en{" "}
          <a
            href="http://www.icfes.gov.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.icfes.gov.co
          </a>
        </Typography>
      </Box>
      <Box>
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          sx={{
            p: 2,
            mt: 2,
            background:
              "linear-gradient(45deg, rgba(30,95,242,1)0%, rgba(18,55,140,1) 100%)",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom color={"white"}>
              ¡No olvides que es el primer paso hacia tu futuro en el ITM!
            </Typography>
            <Typography fontSize={"14px"} color={"#FCFCFC80"}>
              Si eres un aspirante nuevo, antes de iniciar tu inscripción
              asegúrate de conocer los resultados de tus pruebas ICFES/Saber 11
              o el número de registro en la prueba.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box display={"flex"} flexDirection={"column"} width={"70%"}>
              <OutlinedInput
                sx={{ bgcolor: "white" }}
                placeholder="Documento"
                size="small"
              />
              <Button sx={{ bgcolor: "black", color: "white", mt: 1 }}>
                Ingresar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Aviso de Privacidad</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="h6" gutterBottom>
              Tratamiento de Datos Personales - Institución Universitaria ITM
            </Typography>

            <Typography fontSize={"14px"} paragraph>
              La Institución Universitaria ITM, cuyo objeto general es la
              prestación del servicio de educación, informa que los datos
              personales que se recolectan a través de los formatos,
              actividades, páginas web, planillas, eventos, capacitaciones y
              demás instrumentos físicos o digitales utilizados por la
              Institución en la ejecución de sus actividades, serán tratados de
              manera confiable y segura para los siguientes fines:
            </Typography>

            <List sx={{ listStyleType: "disc", pl: 4 }} dense>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary="(i) Ejecutar su objeto social;" />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary="(ii) Cumplir con las obligaciones propias y derivadas de la relación jurídica, contractual, estatutaria y/
o legal existente con el titular del dato;"
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary="(iii) Establecer canales de comunicación tradicionales y/o virtuales con el fin de suministrar
información sobre los productos, servicios, actividades, y/o acciones de responsabilidad social
empresarial realizadas con y hacia sus grupos de interés, lo que incluye atender sus peticiones,
quejas y reclamos;"
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary="(iv) Realizar encuestas, estadísticas, invitaciones o convocatorias relacionadas con los productos o
servicios de la institución."
                />
              </ListItem>
            </List>

            <Typography fontSize={"14px"} paragraph>
              Se informa así mismo que los datos podrán ser entregados de manera
              segura y bajo la dirección de la institución a proveedores de
              servicios y/o contratistas, nacionales o extranjeros, y en todo
              caso serán gestionados en una infraestructura segura por parte de
              esta organización y/o de sus encargados, de manera confidencial y
              no serán cedidos a terceros. También pueden ser entregados a
              autoridades cuando así se requiera conforme a su facultad legal.
            </Typography>

            <Typography fontSize={"14px"} paragraph>
              Adicionalmente a las finalidades antes comunicadas, La institución
              está interesada en otorgar a los datos recolectados la finalidad
              de conocimiento de nuestros grupos de interés para lo cual habrá
              de aplicar herramientas de analítica de datos a su información,
              conocer mejor su situación particular y preferencias, crear y
              diseñar servicios ajustados a sus necesidades. Para este efecto le
              agradecemos nos autorice el tratamiento con esta finalidad
              específica dando click en el botón Enviar.
            </Typography>

            <Typography fontSize={"14px"}>
              Para el ejercicio del Habeas Data, el titular del dato personal o
              quien demuestre un legítimo interés conforme lo señalado en la
              normatividad vigente, podrá hacerlo a través del siguiente correo
              electrónico:{" "}
              <a href="mailto:habeasdata@itm.edu.co">habeasdata@itm.edu.co</a>
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Home;
