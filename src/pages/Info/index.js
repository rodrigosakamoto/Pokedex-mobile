import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  PokeContainer,
  PokeImage,
  PokeName,
  PokeWeight,
  PokeHeight,
  PokeTypes,
  Types,
  Type,
  PokeType,
  Weakness,
  PokeWeakness,
  PokeWeak,
  Weak,
  Evolutions,
  PokeEvolutions,
  PokeEvolution,
  Evolution,
} from './styles';

export default class Info extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('info').name,
  });

  render() {
    const { navigation } = this.props;
    const info = navigation.getParam('info');
    const types = navigation.getParam('info').type;
    const weakness = navigation.getParam('info').weaknesses;
    const evolutions = navigation.getParam('info').next_evolution;
    console.tron.log(weakness);

    return (
      <Container>
        <PokeContainer>
          <PokeImage source={{ uri: info.img }} />
          <PokeName>{info.name}</PokeName>
          <PokeWeight>Peso: {info.weight}</PokeWeight>
          <PokeHeight>Altura: {info.height}</PokeHeight>
          <Types>Tipo</Types>
          <PokeTypes
            data={types}
            horizontal
            keyExtractor={poke => poke.name}
            renderItem={({ item }) => (
              <PokeType>
                <Type>{item}</Type>
              </PokeType>
            )}
          />
          <Weakness>Fraqueza</Weakness>
          <PokeWeakness
            data={weakness}
            horizontal
            keyExtractor={poke => poke}
            renderItem={({ item }) => (
              <PokeWeak>
                <Weak>{item}</Weak>
              </PokeWeak>
            )}
          />
          <Evolutions>Proxima Evolução</Evolutions>
          <PokeEvolutions
            data={evolutions}
            horizontal
            keyExtractor={poke => poke.name}
            renderItem={({ item }) => (
              <PokeEvolution>
                <Evolution>{item.name}</Evolution>
              </PokeEvolution>
            )}
          />
        </PokeContainer>
      </Container>
    );
  }
}
