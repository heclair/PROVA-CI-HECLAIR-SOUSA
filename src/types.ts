export type ISODateTime = string; // Ex.: '2025-11-10T13:30:00Z' ou sem timezone, desde que seja parseável


export interface Appointment {
id: string;
title: string;
date: ISODateTime; // mantemos como string ISO para simplicidade
}