import fakeData from './data.json'
class McMaklerApi {
  async fetchAds(limit = 10) {
    // TODO: implement limit to api itself to save data and time 
    const url = 'https://api.mcmakler.de/v1/advertisements';
    let response, data;
    response = await fetch(url);//, {mode: 'no-cors'}
    data = await response.json();
    // const names = data.map(repo => {
    //   return {name: repo.name};
    // });
    return data.data.slice(0, limit);
  }
  
  async fetchFakeAds(limit = 10) {
    return fakeData.data.slice(0, limit);
  }
}

export default McMaklerApi;
