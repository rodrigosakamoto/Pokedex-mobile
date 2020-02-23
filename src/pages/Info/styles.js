import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #ff0000;
`;

export const PokeContainer = styled.View`
  width: 350px;
  height: 500px;
  align-items: center;
  background: #fff;
  border-radius: 6px;
`;

export const PokeImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const PokeName = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const PokeWeight = styled.Text``;

export const PokeHeight = styled.Text``;

export const PokeTypes = styled.FlatList`
  flex-grow: 0;
`;

export const Type = styled.Text`
  margin: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const PokeType = styled.View`
  background: #ffde00;
  width: 70px;
  margin: 10px;
  border-radius: 20px;
`;

export const Types = styled.Text`
  font-weight: bold;
  margin-top: 5px;
`;

export const Weakness = styled.Text`
  font-weight: bold;
  margin-top: 5px;
`;

export const PokeWeakness = styled.FlatList`
  flex-grow: 0;
`;

export const PokeWeak = styled.View`
  background: #ff0000;
  width: 70px;
  margin: 10px 5px 0;
  border-radius: 20px;
`;

export const Weak = styled.Text`
  margin: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const Evolutions = styled.Text`
  font-weight: bold;
  margin-top: 10px;
`;

export const PokeEvolutions = styled.FlatList`
  flex-grow: 0;
`;

export const PokeEvolution = styled.View`
  background: #50c878;
  width: 90px;
  margin: 10px 5px 0;
  border-radius: 20px;
`;

export const Evolution = styled.Text`
  margin: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;
