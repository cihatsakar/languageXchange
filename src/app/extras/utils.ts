export function lastSeen(date: Date) {
  let now = new Date();
  let lastSeen = new Date(date);
  let diff = now.getTime() - lastSeen.getTime();
  let minutes = Math.floor(diff / 60000);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);
  if (years > 0) {
    return years + ' years ago';
  } else if (months > 0) {
    return months + ' months ago';
  } else if (days > 0) {
    return days + ' days ago';
  } else if (hours > 0) {
    return hours + ' hours ago';
  } else if (minutes > 0) {
    return minutes + ' minutes ago';
  } else {
    return 'just now';
  }
}

export function getAge(date: Date) {
  let now = new Date();
  let birthDate = new Date(date);
  let diff = now.getTime() - birthDate.getTime();
  let age = Math.floor(diff / 31557600000);
  return age;
}