import { Consulta } from '../../consultas/entities/consulta.entity';

export class Animais {
  id: number;
  nome: string;
  especie: string;
  idade: number;
  genero: string;
  responsavel: string;
  telefoneResponsavel: string;
  historicoConsultas?: Consulta[];
}
