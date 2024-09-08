//!react and libraries
//!styles
import css from './Home.module.css';
//!component
import ButtonLink from '../../components/Buttons/ButtonLink.jsx';
import Container from '../../сontainers/Container/Container.jsx';
//!helpers
//!assets
//!myRedux

function Home() {
  return (
    <main>
      <Container className={css.main}>
        <h1 className={css.header}>Campers of your dreams</h1>
        <p className={css.paragraph}>
          You can find everything you want in our catalog
        </p>
        <ButtonLink to="campers" value="View Now" />
      </Container>
    </main>
  );
}

export default Home;
