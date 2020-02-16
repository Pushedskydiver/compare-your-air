import React from 'react';
import GlobalStyles from '../styles/global.styles';
import { Container } from '../styles/generic.container.styles';
import { Heading1 } from '../components/01-Atoms/Heading/Heading.styles';
import { Search } from '../components/01-Atoms/Icon/Icon';
import Paragraph from '../components/01-Atoms/Paragraph/Paragraph.styles';
import Label from '../components/01-Atoms/Label/Label.styles';
import Input from '../components/01-Atoms/Input/Input';
import Status from '../components/01-Atoms/Status/Status';
import InputField from '../components/02-Molecules/InputField/InputField.styles';
import List from '../components/02-Molecules/List/List';
import CardsList from '../components/03-Organisms/CardsList/CardsList';
import { ContextProvider } from './Context';

const App = () => (
  <ContextProvider>
    <GlobalStyles />

    <Container>
      <Heading1 align="center" big>Compare your air</Heading1>

      <Paragraph align="center" medium>Compare the air quality between cities in the UK.</Paragraph>
      <Paragraph align="center" medium>Select cities to compare using the search tool below.</Paragraph>

      <InputField>
        <Label htmlFor="city">Enter a city</Label>
        <Search />
        <Input />
        <List />
      </InputField>

      <Status />

      <CardsList />
    </Container>

  </ContextProvider>
)

export default App;
