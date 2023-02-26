export function generateID(id: number) {
  if (id < 10) return `00${id}`
  if (id > 10 && id < 100) return `0${id}`
  return id
}

const baseUrl = 'https://raw.githubusercontent.com/';
const pokeUrl = `${baseUrl}PokeAPI/sprites/master/`;
const emptyImgUrl = `${baseUrl}naufalarif/pokemon-app/master/public/imgs/pokeball.png`;

export function generateImage(data: any) {
  const imageObj = data ? JSON.parse(data.sprites) : '';
  const src = imageObj.other.home.front_default ? imageObj.other.home.front_default.replace('/media/', '') : '';
  const imgUrl = src ? `${pokeUrl}${src}` : emptyImgUrl;
  return imgUrl;
}

export function firstUC(word: string) {
  const title = word.charAt(0).toUpperCase() + word.substring(1, word.length);
  return title;
}