import {
  normalizeTitle,
  createAppointment,
  listAppointments,
  cancelAppointment,
  findByDay,
  formatAppointment,
} from './App';

describe('normalizeTitle', () => {
  it('remove espaços extras', () => {
    expect(normalizeTitle('  Reunião   com   time  ')).toBe('Reunião com time');
  });
});

describe('createAppointment', () => {
  it('cria compromisso válido', () => {
    const a = createAppointment('Daily', '2025-11-10T09:00:00Z');
    expect(a.title).toBe('Daily');
    expect(a.id).toBeDefined();
    expect(typeof a.id).toBe('string');
  });

  it('lança erro para título vazio', () => {
    expect(() => createAppointment('   ', '2025-11-10')).toThrow('Título não pode ser vazio');
  });

  it('lança erro para data inválida', () => {
    expect(() => createAppointment('Reunião', 'ontem 10h')).toThrow('Data inválida');
  });
});

describe('listAppointments', () => {
  it('ordena por data crescente', () => {
    const a = createAppointment('A', '2025-11-11T10:00:00Z');
    const b = createAppointment('B', '2025-11-10T10:00:00Z');
    const c = createAppointment('C', '2025-11-12T10:00:00Z');
    const ordered = listAppointments([a, b, c]);
    expect(ordered.map((x: any) => x.title)).toEqual(['B', 'A', 'C']);
  });
});

describe('cancelAppointment', () => {
  it('remove pelo id', () => {
    const a = createAppointment('A', '2025-11-10T10:00:00Z');
    const b = createAppointment('B', '2025-11-10T11:00:00Z');
    const remaining = cancelAppointment([a, b], a.id);
    expect(remaining).toHaveLength(1);
    expect(remaining[0].id).toBe(b.id);
  });
});

describe('findByDay', () => {
  it('encontra compromissos no mesmo dia (UTC)', () => {
    const a = createAppointment('A', '2025-11-10T01:00:00Z');
    const b = createAppointment('B', '2025-11-10T23:59:59Z');
    const c = createAppointment('C', '2025-11-11T00:00:00Z');
    const hits = findByDay([a, b, c], '2025-11-10');
    expect(hits.map((x: any) => x.title)).toEqual(['A', 'B']);
  });

  it('lança erro para dia inválido', () => {
    expect(() => findByDay([], '32/13/2090')).toThrow('Dia inválido');
  });
});

describe('formatAppointment', () => {
  it('formata com id, título e data', () => {
    const a = createAppointment('Check-in', '2025-11-10T10:00:00Z');
    const s = formatAppointment(a);
    expect(s).toContain(a.id);
    expect(s).toContain('Check-in');
    expect(s).toContain('2025-11-10');
  });
});
