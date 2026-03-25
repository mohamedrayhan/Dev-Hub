export const patients = [
  {
    id: 'p1',
    name: 'Nisha G',
    age: 38,
    role: 'patient',
    vitals: [
      { time: '08:00', hr: 78, spo2: 98, temp: 36.6, bp: 120, status: 'stable' },
      { time: '10:00', hr: 82, spo2: 96, temp: 36.8, bp: 125, status: 'warning' },
      { time: '12:00', hr: 92, spo2: 94, temp: 37.4, bp: 135, status: 'critical' },
      { time: '14:00', hr: 90, spo2: 95, temp: 37.0, bp: 130, status: 'warning' }
    ],
    conditions: ['Circadian stress', 'Mild hypoxemia risk']
  },
  {
    id: 'p2',
    name: 'Arjun R',
    age: 46,
    role: 'patient',
    vitals: [
      { time: '08:00', hr: 76, spo2: 99, temp: 36.5, bp: 118, status: 'stable' },
      { time: '10:00', hr: 84, spo2: 94, temp: 37.8, bp: 128, status: 'critical' },
      { time: '12:00', hr: 88, spo2: 93, temp: 37.6, bp: 132, status: 'critical' },
      { time: '14:00', hr: 85, spo2: 96, temp: 37.8, bp: 124, status: 'warning' }
    ],
    conditions: ['ECG micro-variation signature', 'Possible early arrhythmia']
  },
  {
    id: 'p3',
    name: 'Sarah K',
    age: 29,
    role: 'patient',
    vitals: [
      { time: '08:00', hr: 72, spo2: 99, temp: 36.6, bp: 115, status: 'stable' },
      { time: '10:00', hr: 75, spo2: 98, temp: 36.7, bp: 117, status: 'stable' },
      { time: '12:00', hr: 78, spo2: 97, temp: 36.8, bp: 119, status: 'stable' }
    ],
    conditions: ['Post-op recovery']
  },
  {
    id: 'p4',
    name: 'Michael W',
    age: 62,
    role: 'patient',
    vitals: [
      { time: '08:00', hr: 88, spo2: 95, temp: 37.2, bp: 140, status: 'warning' },
      { time: '10:00', hr: 94, spo2: 92, temp: 37.5, bp: 155, status: 'critical' }
    ],
    conditions: ['Chronic hypertension', 'Diabetes Type II']
  },
  {
    id: 'p5',
    name: 'Emily D',
    age: 41,
    role: 'patient',
    vitals: [
      { time: '09:00', hr: 80, spo2: 98, temp: 37.0, bp: 122, status: 'stable' },
      { time: '11:00', hr: 82, spo2: 97, temp: 37.1, bp: 124, status: 'stable' }
    ],
    conditions: ['Asthma management']
  }
];
