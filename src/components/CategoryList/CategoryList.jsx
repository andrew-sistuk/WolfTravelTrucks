import css from './CategoryList.module.css';
import { nanoid } from 'nanoid';
import Category from '../Category/Category.jsx';
import { CategoryIcons } from '../../helpers/constants/CategoryIcons.jsx';

function CategoryList({ categories }) {
  return (
    <ul className={css['category-list']}>
      {categories.map(
        ([id = nanoid(), key, value]) =>
          value && (
            <li key={id}>
              <Category
                Icon={key && CategoryIcons[key.toLowerCase()]}
                text={key}
              />
            </li>
          )
      )}
    </ul>
  );
}

export default CategoryList;
