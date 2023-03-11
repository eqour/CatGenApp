const words1 = [
  'скоро',
  'может быть',
  'а может',
  'точно',
  'когда',
  'а вот',
  'а если',
  'однако',
  'завтра',
];

const words2 = [
  'наступит',
  'и',
  'уже',
  'будет',
  'не будет',
  'не наступит',
  'уже не',
  'хочу',
  'придёт',
  'прилетит',
  'приплывёт',
  'куплю',
  'сделаю',
  'сдам',
  'жду',
];

const words3 = [
  'осень',
  'весна',
  'лето',
  'зима',
  'хватит',
  'еда',
  'хорошо',
  'пошли домой',
  'всё',
  'спать',
  'пары',
  'коронавирус',
  'мята',
  'курсовая',
  'университет',
  'мясо',
  'экзамен',
  'зачёт',
  'практика',
  'сессия',
  'диплом',
  'защита',
  'конец света',
];

const words4 = ['!', '', '?'];

function generateMessage(): string {
  let text = '';
  text += words1[Math.floor(Math.random() * words1.length)] + ' ';
  text += words2[Math.floor(Math.random() * words2.length)] + ' ';
  text += words3[Math.floor(Math.random() * words3.length)];
  text += words4[Math.floor(Math.random() * words4.length)];
  return text;
}

export default generateMessage;
