import { basePropertyList } from './constants/basePropertyList.js';
import { nanoid } from 'nanoid';

export function ownPropertyList(obj, type = 'equipment') {
  const propertyList = [];
  for (const property in obj) {
    if (
      typeof obj[property] === 'function' ||
      typeof obj[property] === 'object' ||
      !Object.prototype.hasOwnProperty.call(obj, property) ||
      basePropertyList.includes(property)
    ) {
      continue;
    }

    switch (type) {
      case 'equipment':
        if (typeof obj[property] === 'boolean') {
          propertyList.push([nanoid(), property, obj[property]]);
        }
        break;
      case 'equipment_filter':
        if (typeof obj[property] === 'boolean') {
          propertyList.push([nanoid(), property]);
        }
        break;
      case 'details':
        if (typeof obj[property] !== 'boolean') {
          propertyList.push([nanoid(), property, obj[property]]);
        }
        break;
      case 'count':
        if (obj[property]) propertyList.push(property);
    }
  }
  return propertyList;
}
