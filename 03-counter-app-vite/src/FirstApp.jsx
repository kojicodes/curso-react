import PropTypes from 'prop-types';

const printCharacter = (name) => {
  return name;
}

const animeCharacter = {
  name: 'Goku',
  anime: 'Dragon Ball'
};

export const MyFistApp = ({ title, subtitle, name }) => {
  // console.log(title);

  return (
    <>
      {/*<h1>{ printCharacter(animeCharacter.name) }</h1>*/}
      {/*<h1>{ JSON.stringify(newMessage)}</h1>*/}
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
  );
};

MyFistApp.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

MyFistApp.defaultProps = {
  name: 'Fernando Ortega',
  subtitle: 'No hay subtitulo',
  title: 'No hay titulo',
}