import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ff0000;
`;

export const ListPokemons = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Pokemon = styled.TouchableOpacity`
  flex-grow: 1;
  align-items: center;
  background: #fff;
  border-radius: 6px;
  margin: 10px;
  padding: 10px;
`;

export const PokeImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const PokeName = styled.Text`
  color: #333;
  font-weight: bold;
`;
