const BASE_URL = '/avocado/data';

export const API = {
  HERO: `/heroData.json`,
  BOARDGAME_TYPE: `/boardgameTypeData.json`,

  // BASE_URL이 따로 필요한 케이스
  BOARDGAME: `${BASE_URL}/boardgameData.json`,
  BOARDGAME_STRATEGY_TYPE: `${BASE_URL}/boardgameStrategyTypeData.json`,
  BOARDGAME_THEMATIC_TYPE: `${BASE_URL}/boardgameThematicTypeData.json`,
  BOARDGAME_FAMILY_TYPE: `${BASE_URL}/boardgameFamilyTypeData.json`,
  BOARDGAME_PARTY_TYPE: `${BASE_URL}/boardgamePartyTypeData.json`,
  BOARDGAME_ABSTRACT_TYPE: `${BASE_URL}//boardgameAbstractTypeData.json`,
  BOARDGAME_WARGAMES_TYPE: `${BASE_URL}/boardgameWargamesTypeData.json`,
  BOARDGAME_CUSTOMIZABLE_TYPE: `${BASE_URL}/boardgameCustomizableTypeData.json`,
};
