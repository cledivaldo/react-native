//src/utils/tokenUtils.ts:

export function timeUntilExpiration(token: string): string {
  // Decodifica o payload do JWT
  const payload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(payload.replace(/_/g, '/').replace(/-/g, '+')));

  // Pega o tempo de expiração (exp) que está em formato timestamp Unix
  const expirationTime = decodedPayload.exp;

  // Calcula o tempo restante até a expiração
  const currentTime = Math.floor(Date.now() / 1000); // Hora atual em timestamp Unix
  const timeRemaining = expirationTime - currentTime;

  if (timeRemaining <= 0) {
    return "Token expirado";
  }

  // Calcula o tempo restante em horas, minutos e segundos
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}