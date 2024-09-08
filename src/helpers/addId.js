import { nanoid } from 'nanoid';

export default function addId(arr) {
  console.log('AddID', arr);
  return arr.map(elem => {
    return {
      ...elem,
      id: nanoid(),
    };
  });
}
