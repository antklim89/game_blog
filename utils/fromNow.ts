const MS = 1;
const SECOND = 1000 * MS;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

const AS_JUST_NOW = 5 * SECOND;
const AS_SECONDS = 45 * SECOND;
const AS_A_MINUTE = 90 * SECOND;
const AS_MINUTES = 45 * MINUTE;
const AS_AN_HOUR = 90 * MINUTE;
const AS_HOURS = 22 * HOUR;
const AS_A_DAY = 36 * HOUR;
const AS_DAYS = 26 * DAY;
const AS_A_MONTH = 45 * DAY;
const AS_MONTHS = 320 * DAY;
const AS_A_YEAR = 548 * DAY;

const FAILOVER = 'just now';

export function fromNow(time: number | string | Date): string {
    if (typeof time === 'string' && (/(ago)|(now)/i).test(time)) return time;
    const t = typeof time !== 'number' ? new Date(time).getTime() : time;
    if (Number.isNaN(t)) return FAILOVER;
    const now = Date.now();
    const diff = now - t;

    if (diff < 0) return FAILOVER;
    if (diff < AS_JUST_NOW) return 'just now';
    if (diff < AS_SECONDS) return 'a few seconds ago';
    if (diff < AS_A_MINUTE) return 'a minute ago';
    if (diff < AS_MINUTES) return `${Math.round(diff / MINUTE)} minutes ago`;
    if (diff < AS_AN_HOUR) return 'an hour ago';
    if (diff < AS_HOURS) return `${Math.round(diff / HOUR)} hours ago`;
    if (diff < AS_A_DAY) return 'a day ago';
    if (diff < AS_DAYS) return `${Math.round(diff / DAY)} days ago`;
    if (diff < AS_A_MONTH) return 'a month ago';
    if (diff < AS_MONTHS) return `${Math.round(diff / MONTH)} months ago`;
    if (diff < AS_A_YEAR) return 'a year ago';
    return `${Math.round(diff / YEAR)} years ago`;
}
