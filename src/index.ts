import {
createAppointment,
listAppointments,
findByDay,
cancelAppointment,
formatAppointment
} from '../App';


console.log('=== Demonstração da Agenda (TS) ===\n');


const agenda = [
createAppointment('Reunião de kickoff', '2025-11-10T14:00:00Z'),
createAppointment('1:1 com gestor', '2025-11-10T16:30:00Z'),
createAppointment('Daily do projeto', '2025-11-11T12:00:00Z')
];


console.log('Compromissos cadastrados (ordenados):');
for (const a of listAppointments(agenda)) {
console.log(' -', formatAppointment(a));
}


console.log('\nBusca por dia 2025-11-10:');
for (const a of findByDay(agenda, '2025-11-10')) {
console.log(' -', formatAppointment(a));
}


console.log('\nCancelando o primeiro compromisso...');
const afterCancel = cancelAppointment(agenda, agenda[0].id);
for (const a of listAppointments(afterCancel)) {
console.log(' -', formatAppointment(a));
}


console.log('\n✅ Agenda executada com sucesso!');
console.log('Execute "npm test" para rodar os testes automatizados.');


//teste