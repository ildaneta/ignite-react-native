export const month = (date: string) => {
  
  const dateSplited = date.split("");

  const monthJoined = dateSplited[3] + dateSplited[4];

  switch(monthJoined) {
    case '01':
      return 'January';
      break;
    case '02':
      return 'February';
      break;
    case '03':
      return 'March';
      break;
    case '04':
      return 'April';
      break;
    case '05':
      return 'May';
      break;
    case '06':
      return 'June';
      break;
    case '07':
      return 'July';
      break;
    case '08':
      return 'August';
      break;
    case '09':
      return 'September';
      break;
    case '10':
      return 'October';
      break;
    case '11':
      return 'November';
      break;
    default:
      return 'December';
      break;
  }
}