interface IResponse {
  name: string;
  email: string;
  password: string;
  age: number;
}

const axios = (): IResponse => {
  return {
    age: 1,
    email: 'email@email.com',
    name: 'Baxtiyor',
    password: '123123',
  };
};

const res = axios();
