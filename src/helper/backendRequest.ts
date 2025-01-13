import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', // Cambia esto según la URL de tu API
    timeout: 10000, // Tiempo de espera en milisegundos
});
interface AlumnoEgresadoResponse {
    status: string;
    data: any; // Define el tipo de datos que esperas, puede ser más específico si lo sabes
    message?: string;
}
export interface Pais {
    "Id Pais": number;
    pais: string;
}
interface PaisesResponse {
    status: string;
    data: Pais[];
    message?: string;
}
export interface Departamento {
    "Id Depto": number;
    Depto: string;
}

interface DepartamentosResponse {
    status: string;
    data: Departamento[];
    message?: string;
}
export interface Ciudad {
    Ciudad: string;
    "Id Ciudad": number;
}

interface CiudadesResponse {
    status: string;
    data: Ciudad[];
    message?: string;
}
interface TipoDocumentoResponse {
    status: string;
    data: TipoDocumento[];
    message?: string;
}
interface TipoDocumento {
    "Id Tipo Documento": number;
    "Tipo Documento": string;
}

export interface AlumnoData {
    status: string
    data: Alumno[]
}
export interface Alumno {
    Estado: string
    "Id Alumno": number
    Carnet: string
    Apellidos: string
    Nombres: string
    "Fecha Nacimiento": string
    "Id Ciudad Nacimiento": number
    Documento: string
    "Id Tipo Documento": number
    "Id Ciudad Documento": number
    "Fecha Expedicion": string
    "Id Sexo": number
    "Id Estado Civil": number
    Hijos: number
    Libreta: string
    Distrito: string
    "Id Estrato": number
    "Caracter Colegio": number
    Direccion: string
    Telefono: string
    "Id Ciudad Direccion": number
    "Id Barrio": number
    "Id Religion": number
    Id_Etnia: number
    "Id Grado": number
    "Id Institucion": number
    "Id Caracter Institucion": number
    "Id Eps": number
    Chip: string
    "Ano Bachillerato": number
    "Id Tipo Bachillerato": number
    SNP: string
    "Id Prueba Nacional": number
    "Prueba Nacional 1": number
    "Prueba Nacional 2": number
    "Prueba Nacional 3": number
    "Prueba Nacional 4": number
    "Prueba Nacional 5": number
    "Prueba Nacional 6": number
    "Prueba Nacional 7": number
    "Prueba Nacional 8": number
    "Prueba Nacional 9": number
    "Prueba Nacional 10": number
    "Prueba Nacional 11": number
    "Prueba Nacional 12": number
    "Prueba Nacional 13": number
    "Prueba Nacional 14": number
    "Prueba Nacional 15": number
    Clave: string
    Programa: string
    Jornada: string
    Ajuste: string
    "Fechas Matricula": string
    "Cita Asesoria": any
    "Fecha Ajustes": any
    Antiguedad: string
    Asesoria: string
    Mensaje: any
    Nuevo: number
    "Correo Electronico": string
    Celular: string
    "Correo Alterno": string
    "Direccion Correspondencia": string
    "Id Ciudad Correspondencia": number
    Labora: number
    "Id Tipo Empleo": number
    Discapacitado: number
    Id_Tipo_Discapacidad: number
    IdTipo_Apoyo_Discapacidad: number
    Desplazado: number
    Id_Capacidad_Excepcional: number
    Id_Comunidad_Negra: number
    "Id Pueblo Indigena": number
    "Id Tipo Sangre": number
    RH: string
    Id_PruebaIngles: number
    ObsPIngles: any
    Fallecido: number
    "Causa Fallecido": string
    "Fecha Fallecido": any
    "Id Institucion Pregrado": number
    "Ano Pregrado": number
    "Titulo Pregrado": string
    "Actualiza Alumno": string
    Bloqueado: number
    AntIdTipoDocumento: number
    AnteriorDocumento: string
    Fecha_Icfes: number
    Cambio_Clave: number
    AnteriorCarnet: string
    AnteriorBarrio: number
    "Id Tipo Usuario": any
    "Habilitado Prestamo": any
    PDerecho_Grado: number
    PSaber_Pro: number
    Codigo_Barra_DG: any
    Codigo_Barra_SP: any
    Inf_Restringida: number
    PSaber11: number
    LGBTIQ: number
    Id_Grupo_Sisben: number
    cargue_Documentos: number
}


export const getAlumnoEgresado = async (documento: string): Promise<AlumnoEgresadoResponse> => {
    try {
        const response = await axiosInstance.get('/alumno-egresado/', {
            params: { documento },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener la información del alumno egresado:', error);
        throw error;
    }
};

export const getPaises = async (): Promise<PaisesResponse> => {
    try {
        const response = await axiosInstance.get('/pais/');
        return response.data;
    } catch (error) {
        console.error('Error al obtener la lista de países:', error);
        throw error;
    }
};


export const getDepartamentos = async (idPais: number): Promise<DepartamentosResponse> => {
    try {
        const response = await axiosInstance.get('/depto/', {
            params: { id_pais: idPais },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener la lista de departamentos:', error);
        throw error;
    }
};

export const getCiudades = async (idDepto: number): Promise<CiudadesResponse> => {
    try {
        const response = await axiosInstance.get('/ciudad/', {
            params: { id_depto: idDepto },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener la lista de ciudades:', error);
        throw error;
    }
};

export const getTipoDocumento = async (): Promise<TipoDocumentoResponse> => {
    try {
        const response = await axiosInstance.get('/tipo_documento/');
        return response.data;
    } catch (error) {
        console.error('Error al obtener la lista de ciudades:', error);
        throw error;
    }
};