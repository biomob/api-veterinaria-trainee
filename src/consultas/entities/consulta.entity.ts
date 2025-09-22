import { Animais } from '../../animais/entities/animais.entity';

export class Consulta {
  id: number;
  animal: Animais; 
  dataConsulta: Date;
  motivoConsulta: string;
  valor: number;
  horarioConsulta: string;
}