import React,{useState, useMemo, Fragment} from 'react'
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import getHeroesByName from '../../selectors/getHeroesByName';
const queryString = require('query-string');

const SearchScreen = ({history}) => {
    const location=useLocation();
    const{q=''}=queryString.parse(location.search);
    const [value, setValue] = useState({
        name:q
    });
    const {name}=value; //QUERY SEARCH PARAM
    const heroesFilter=useMemo(() =>getHeroesByName(q),[q])
    // const heroesFilter=getHeroesByName(name); //ALL DATA
    const reset=()=>{ //RESET INPUT
        setValue('');
    };
    const handleSubmit=(e)=>{ //SUBMIT FORM
        e.preventDefault();
        history.push(`?q=${name}`);
    };
    const handleInputChange=(e)=>{ //CHANGE INPÜT
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    };

    return ( 
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form
                    onSubmit={handleSubmit}
                    >
                        <input
                        type="text"
                        name="name" 
                        placeholder="Find your hero"
                        className="form-control"
                        value={name}
                        onChange={handleInputChange}
                        />
                        <button
                        type="submit"
                        className="btn mt-2 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    {(q!==''&&heroesFilter.length>0)?(<Fragment>
                        <h4>Results from {` ${q}`}</h4>
                        <hr/>
                    </Fragment>):
                    <Fragment>
                        <h4>Results</h4>
                        <hr/>
                    </Fragment>
                    }
                    
                    {
                        ((q==='')&&(<div className="alert alert-info">
                        Search a hero
                        </div>))
                    }
                    {
                        ((q!==''&&heroesFilter.length===0)&&(<div className="alert alert-danger">
                        There is no a Hero with {` ${q}`}
                        </div>))
                    }
                        
                    {
                        heroesFilter.map(hero=>(
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default SearchScreen;