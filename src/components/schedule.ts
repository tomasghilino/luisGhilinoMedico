// "Martes de 10 a 11:30 h" → "10 a 11:30 h"; "Martes desde las 18 h" → "desde las 18 h"
export function scheduleHours(schedule: string, dayLabel: string) {
  return schedule.replace(`${dayLabel} de `, "").replace(`${dayLabel} `, "")
}
