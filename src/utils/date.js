import moment from 'moment'

export function parseTime(date) { // This is to display 12 hour format like you asked
  const d = new Date(date)
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export function formatDate(date) {
  return format(date)
}

export function itemUsable(from, to) {
  return moment().isBetween(from, to, null, '[]');
}

function format(date) {
  const d = moment(date)
  return d.format('ll')
  // return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
}
