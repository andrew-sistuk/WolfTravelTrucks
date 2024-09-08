//!react and libraries
//!styles
import css from './Features.module.css';
//!component
import Details from '../../сontainers/Details/Details.jsx';
import BookForm from '../../components/BookForm/BookForm.jsx';
//!helpers
//!assets
//!myRedux

function Features() {
  return (
    <Details header="Features">
      <div className={css.details}>
        <p>text</p>
      </div>
      <BookForm />
    </Details>
  );
}

export default Features;
