import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { RegisterLoginData } from '../../screens/RegisterLoginData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockedNavigate = jest.fn();

jest.mock('react-native-uuid', () => {
  return {
    v4: () => {
      return 'new-item'
    }
  }
});
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate
  }),
}));

describe('RegisterLoginData', () => {
  it('should be able to save login data on async storage', async () => {
    const spySetItem = jest.spyOn(AsyncStorage, 'setItem')
      .mockImplementationOnce(() => Promise.resolve());

    const spyGetItem = jest.spyOn(AsyncStorage, 'getItem')
      .mockReturnValueOnce(
        Promise.resolve(
          JSON.stringify([
            {
              id: '0',
              service_name: 'LikedIn',
              email: 'johndoelinkedin@example.com',
              password: '123456'
            }
          ])
        )
      );

    const {
      getByTestId,
      getByText,
    } = render(
      <RegisterLoginData />
    );

    const titleInput = getByTestId("service-name-input");
    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const submitButton = getByText("Salvar");

    fireEvent.changeText(titleInput, 'Rocketseat');
    fireEvent.changeText(emailInput, 'johndoe@example.com');
    fireEvent.changeText(passwordInput, '123456');
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('Home');
    });

    expect(spyGetItem).toHaveBeenCalledWith('@savepass:logins');
    expect(spySetItem).toHaveBeenCalledWith(
      '@savepass:logins',
      JSON.stringify([
        {
          id: '0',
          service_name: 'LikedIn',
          email: 'johndoelinkedin@example.com',
          password: '123456'
        },
        {
          id: 'new-item',
          service_name: 'Rocketseat',
          email: 'johndoe@example.com',
          password: '123456'
        }
      ])
    );
  });

  it('should be able to show errors message on data validation', async () => {
    const {
      getByText,
      findByText,
    } = render(
      <RegisterLoginData />
    );

    const submitButton = getByText("Salvar");
    fireEvent.press(submitButton);

    await findByText('Nome do serviço é obrigatório!')
    getByText('Email é obrigatório!')
    getByText('Senha é obrigatória!')
  });
})