import React, { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { LoginDataItem } from '../../components/LoginDataItem';

import {
  Container,
  Metadata,
  Title,
  TotalPassCount,
  LoginList,
} from './styles';

interface LoginDataProps {
  id: string;
  service_name: string;
  email: string;
  password: string;
}

type LoginListDataProps = LoginDataProps[];

export function Home() {
  const [searchText, setSearchText] = useState('');
  const [searchListData, setSearchListData] = useState<LoginListDataProps>([]);
  const [data, setData] = useState<LoginListDataProps>([]);

  async function loadData() {
    const dataKey = '@savepass:logins';

    const response = await AsyncStorage.getItem(dataKey);

    if (response) {
      const responseFormatted = JSON.parse(response);

      setSearchListData(responseFormatted);
      setData(responseFormatted);
    }
  }

  function handleFilterLoginData() {
    const filterResult = searchListData.filter((item) => {
      if (item.service_name.includes(searchText)) {
        return item;
      }
    });

    setSearchListData(filterResult);
  }

  function handleChangeInputText(text: string) {
    if (!text) {
      setSearchListData(data);
    }
    setSearchText(text);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <>
      <Header
        user={{
          name: 'Ilda',
          avatar_url: 'https://avatars.githubusercontent.com/u/21963291?v=4',
        }}
      />
      <Container>
        <SearchBar
          placeholder="Qual senha você procura?"
          onChangeText={handleChangeInputText}
          value={searchText}
          returnKeyType="search"
          onSubmitEditing={handleFilterLoginData}
          onSearchButtonPress={handleFilterLoginData}
        />

        <Metadata>
          <Title>Suas senhas</Title>
          <TotalPassCount>
            {searchListData.length
              ? `${`${searchListData.length}`.padStart(2, '0')} ao total`
              : 'Nada a ser exibido'}
          </TotalPassCount>
        </Metadata>

        <LoginList
          keyExtractor={(item) => item.id}
          data={searchListData}
          renderItem={({ item: loginData }) => {
            return (
              <LoginDataItem
                service_name={loginData.service_name}
                email={loginData.email}
                password={loginData.password}
              />
            );
          }}
        />
      </Container>
    </>
  );
}
