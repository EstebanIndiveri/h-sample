const { heroes } = require("../data/heroes");

const getHeroById = (id) => {

return heroes.find(hero=>hero.id===id);

}
 
export default getHeroById;