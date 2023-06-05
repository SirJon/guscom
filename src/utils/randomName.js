const names = [
  'Вадим',
  'Валентин',
  'Валерий',
  'Валериан',
  'Валерьян',
  'Василий',
  'Венедикт',
  'Викентий',
  'Виктор',
  'Вилен',
  'Вилор',
  'Виталий',
  'Владилен',
  'Владимир',
  'Владислав',
  'Владлен',
  'Влас',
  'Всеволод',
  'Вячеслав',
  'Макар',
  'Максим',
  'Марат',
  'Марк',
  'Маркел',
  'Мартин',
  'Мартын',
  'Матвей',
  'Мефодий',
  'Милослав',
  'Мина',
  'Минай',
  'Мирон',
  'Митрофан',
  'Михаил',
  'Михей',
  'Модест',
  'Моисей',
  'Мокей',
  'Мстислав',
];
const lastNames = [
  'Смирнов',
  'Иванов',
  'Кузнецов',
  'Соколов',
  'Попов',
  'Лебедев',
  'Козлов',
  'Новиков',
  'Морозов',
  'Петров',
  'Волков',
  'Соловьёв',
  'Васильев',
  'Зайцев',
  'Павлов',
  'Семёнов',
  'Голубев',
  'Виноградов',
  'Богданов',
  'Воробьёв',
  'Фёдоров',
  'Михайлов',
  'Беляев',
  'Тарасов',
  'Белов',
  'Комаров',
  'Орлов',
  'Киселёв',
  'Макаров',
  'Андреев',
  'Ковалёв',
  'Ильин',
  'Гусев',
  'Титов',
  'Кузьмин',
  'Кудрявцев',
  'Баранов',
  'Куликов',
  'Алексеев',
  'Степанов',
  'Яковлев',
  'Сорокин',
  'Сергеев',
  'Романов',
  'Захаров',
  'Борисов',
  'Королёв',
  'Герасимов',
  'Пономарёв',
  'Григорьев',
  'Лазарев',
  'Медведев',
  'Ершов',
  'Никитин',
  'Соболев',
  'Рябов',
  'Поляков',
  'Цветков',
  'Данилов',
  'Жуков',
  'Фролов',
  'Журавлёв',
  'Николаев',
  'Крылов',
  'Максимов',
  'Сидоров',
  'Осипов',
  'Белоусов',
  'Федотов',
  'Дорофеев',
  'Егоров',
  'Матвеев',
  'Бобров',
  'Дмитриев',
  'Калинин',
  'Анисимов',
  'Петухов',
  'Антонов',
  'Тимофеев',
  'Никифоров',
  'Веселов',
  'Филиппов',
  'Марков',
  'Большаков',
  'Суханов',
  'Миронов',
  'Ширяев',
  'Александров',
  'Коновалов',
  'Шестаков',
  'Казаков',

];

export const randomName = () => {
  return `${names[Math.floor(Math.random() * names.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`
}