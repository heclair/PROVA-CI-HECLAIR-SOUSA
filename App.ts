import { Appointment, ISODateTime } from './src/types';


/**
* Verifica se a string é uma data ISO parseável por Date
*/
export function isValidISODate(dateStr: ISODateTime): boolean {
if (typeof dateStr !== 'string' || dateStr.trim().length === 0) return false;
const d = new Date(dateStr);
return !isNaN(d.getTime());
}


/**
* Normaliza o título: remove excesso de espaços
*/
export function normalizeTitle(title: string): string {
return title.trim().replace(/\s+/g, ' ');
}


/**
* Cria um novo compromisso validando título e data
*/
export function createAppointment(title: string, date: ISODateTime): Appointment {
const t = normalizeTitle(title);
if (!t) {
throw new Error('Título não pode ser vazio');
}
if (!isValidISODate(date)) {
throw new Error('Data inválida: use um formato ISO parseável');
}
const id = cryptoRandomId();
return { id, title: t, date };
}


/**
* Lista compromissos ordenados por data crescente
*/
export function listAppointments(items: Appointment[]): Appointment[] {
return [...items].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}


/**
* Cancela (remove) um compromisso pelo id
*/
export function cancelAppointment(items: Appointment[], id: string): Appointment[] {
return items.filter((x) => x.id !== id);
}


/**
* Busca compromissos por dia (ignora horário)
*/
export function findByDay(items: Appointment[], dayISO: string): Appointment[] {
if (!isValidISODate(dayISO)) {
throw new Error('Dia inválido');
}
const dayKey = toDayKey(dayISO);
return items.filter((x) => toDayKey(x.date) === dayKey);
}


/** Utilidades **/
function toDayKey(dateStr: string): string {
const d = new Date(dateStr);
const y = d.getUTCFullYear();
const m = String(d.getUTCMonth() + 1).padStart(2, '0');
const dd = String(d.getUTCDate()).padStart(2, '0');
return `${y}-${m}-${dd}`; // chave AAAA-MM-DD (UTC)
}


function cryptoRandomId(): string {
// Gera um id simples e determinístico o suficiente para testes (sem depender de lib externa)
return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}


/**
* Formata um compromisso para exibição em console
*/
export function formatAppointment(a: Appointment): string {
return `[#${a.id}] ${a.title} @ ${a.date}`;
}