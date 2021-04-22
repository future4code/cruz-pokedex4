export const goToDetailsPage = (history) => {
  history.push("/detalhes/:id");
};

export const goToPokedexPage = (history) => {
  history.push("/pokedex");
};

export const goToHomePage = (history) => {
  history.push("/");
};

export const goBack = (history) => {
  history.goBack();
};
