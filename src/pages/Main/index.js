import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  ListPokemons,
  Pokemon,
  PokeImage,
  PokeName,
} from './styles';

export default class Info extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    pokemons: [],
  };

  async componentDidMount() {
    const response = await api.get();

    this.setState({
      pokemons: response.data.pokemon,
    });
  }

  handleNavigate = info => {
    const { navigation } = this.props;

    navigation.navigate('Info', { info });
  };

  render() {
    const { pokemons } = this.state;

    return (
      <Container>
        <ListPokemons
          data={pokemons}
          numColumns={2}
          keyExtractor={pokemon => pokemon.name}
          renderItem={({ item }) => (
            <Pokemon onPress={() => this.handleNavigate(item)}>
              <PokeImage source={{ uri: item.img }} />
              <PokeName>{item.name}</PokeName>
            </Pokemon>
          )}
        />
      </Container>
    );
  }
}

Info.navigationOptions = {
  title: 'Pokedex',
};
