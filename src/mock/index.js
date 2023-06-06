import { randomValue } from "@/utils/randomValue";
import { randomString } from "@/utils/randomString";
import { randomStatus } from "@/utils/randomStatus";
import { randomName } from "@/utils/randomname";

export const moderators = new Array(73).fill(null).map((it, i) => ({
  id: Number(i) + 1,
  image: `https://placeimg.com/${randomValue(500, 1000)}/${randomValue(500, 1000)}`,
  name: `${randomName()}`,
  status: randomStatus(),
}))