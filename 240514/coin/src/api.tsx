//외부에서 데이터를 받아와주는 함수를 선언 후 출력
//react-query를 사용할 때는 이렇게 외부에서 데이터를 받아와서 공급해줄 수 있는 함수가 반드시 필요한데 =>fetch함수는 반드시 promise값을 반환한다

const BASE_URL = "https://my-json-server.typicode.com/Divjason";

export const fetchCoins = () => {
  return fetch(`${BASE_URL}/coinlist/coins`).then((response) =>
    response.json()
  );
};

export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coinlist/coins/${coinId}`).then((response) =>
    response.json()
  );
};

export const fetchCoinPrice = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coinprice/coinprice/${coinId}`).then((response) =>
    response.json()
  );
};

export const fetchCoinHistory = (coinId: string | undefined) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - ((60 * 60) / 24) * 7;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}&start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
};
