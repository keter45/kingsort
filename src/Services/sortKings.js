import romanToNumber from './romanToNumber';

function numberCompare(a, b) {
  if (a.name === b.name) {
    if (Number(a.number) > Number(b.number)) {
      return 1;
    }
    return -1;
  }
  return a - b;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function sortKings(kings) {
  let kingsList = [];
  const king = [
    {
      Name: [],
      Number: '',
    },
  ];

  // Translate roman to number to order the array
  kings.forEach(k => {
    king.Name = capitalize(k).split(' ');
    king.Number = romanToNumber(king.Name[1]);

    kingsList = [
      ...kingsList,
      {
        name: king.Name[0],
        fullname: king.Name.join(' '),
        number: king.Number,
      },
    ];
  });

  kingsList.sort((a, b) => numberCompare(a, b));

  let namesList = [];

  kingsList.forEach(k => {
    namesList = [...namesList, k.fullname];
  });

  return namesList;
}
