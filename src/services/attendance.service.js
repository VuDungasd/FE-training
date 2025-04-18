export async function getAttendance() {
  // fake data
  return [
    { id: 1, date: '2025-04-01', status: 'present' },
    { id: 2, date: '2025-04-02', status: 'absent' },
    { id: 3, date: '2025-04-03', status: 'present' },
    { id: 4, date: '2025-04-04', status: 'present' },
    { id: 5, date: '2025-04-05', status: 'absent' },
  ]
}
