import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const formatDate = (date: Date): string => {
  // Formatar o dia da semana corretamente
  const dayOfWeek = format(date, "EEEE", { locale: ptBR })
    .replace("segunda-feira", "Segunda-feira")
    .replace("terça-feira", "Terça-feira")
    .replace("quarta-feira", "Quarta-feira")
    .replace("quinta-feira", "Quinta-feira")
    .replace("sexta-feira", "Sexta-feira")
    .replace("sábado", "Sábado")
    .replace("domingo", "Domingo")

  // Formatar a data completa corretamente
  const fullDate = format(date, "d 'de' MMMM 'de' yyyy", { locale: ptBR })

  return `${dayOfWeek}, ${fullDate}`
}
