import { randomValue } from "@/utils/randomValue";
import { randomStatus } from "@/utils/randomStatus";
import { randomName } from "@/utils/randomname";

export const moderators = new Array(73).fill(null).map((it, i) => ({
  id: Number(i) + 1,
  image: `https://placebeard.it/${randomValue(500, 1000)}/${randomValue(500, 1000)}`,
  name: `${randomName()}`,
  status: randomStatus(),
}));

export const ROOT = [
  {
    url: "offers",
    label: "Предложения",
    badge: 2,
  },
  {
    url: "moderators",
    label: "Модераторы",
    badge: 0,
  },
  {
    url: "education",
    label: "Обучение",
    badge: 0,
  },
  {
    url: "notification",
    label: "Уведомление",
    badge: 0,
  },
];

export const USER = {
  name: "Name",
  email: "test@test.com",
  password: "test12345",
  avatar: "https://placebeard.it/640x360"
};