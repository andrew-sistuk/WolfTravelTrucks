import { nanoid } from 'nanoid';

export function addId(arr) {
  return arr.map(elem => {
    return {
      ...elem,
      id: nanoid(),
    };
  });
}
