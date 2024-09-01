import Container from '../../components/Container/Container.jsx';
import css from './Home.module.css';
import ButtonLink from '../../components/Buttons/ButtonLink.jsx';

function Home() {
  return (
    <main>
      <Container className={css.main}>
        <h1 className={css.header}>Campers of your dreams</h1>
        <p className={css.paragraph}>
          You can find everything you want in our catalog
        </p>
        <ButtonLink to="catalog" value="View Now" />
      </Container>
    </main>
  );
}

export default Home;
