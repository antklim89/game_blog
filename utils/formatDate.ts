import { format } from "date-fns/format";

export function formatDate(date: string | number | Date) {
    return format(new Date(date).toLocaleDateString(), "MMMM dd, yyyy", );
}
