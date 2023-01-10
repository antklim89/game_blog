export const dateFormater = Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    hour12: false,
});


export function formatDate(date: string | number | Date) {
    return dateFormater.format(new Date(date));
}
