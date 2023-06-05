import { STATUS } from "@/constants";

export function randomStatus() {
  const keys = Object.keys(STATUS);
  return STATUS[keys[ keys.length * Math.random() << 0]];
}