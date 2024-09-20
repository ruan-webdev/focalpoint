// util/dateFormatter.ts
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const formatDate = (date: Date): string => {
  return format(date, "d 'de' MMMM 'de' yyyy", { locale: ptBR })
}
