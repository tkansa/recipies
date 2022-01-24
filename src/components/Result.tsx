import { useState, useEffect } from 'react';
import { Hits } from '../models/recipeModel';
import Modal from 'react-modal';
import { ResultExpanded } from './ResultExpanded';
import { SmallRecipeProp } from './ResultList';
import "./Result.css"
import LikeButton from './LikeButton';

export interface RecipeProp {
  recipe: Hits;
  //onClose: ()=>void;
  onFavorite: (recipe: Hits)=> void;
}

export function Result({ recipe,onFavorite}: RecipeProp) {


  let [ openExpanded, setOpenExpanded ] = useState(false);
  
  function openModal() {
      setOpenExpanded(true);
  }
  function closeModal() {
      setOpenExpanded(false);
  }

  // useEffect(()=> {Modal.setAppElement('#');})
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

return (
  <div className="Result">
    <h3>{recipe.recipe.label}</h3>

      <div className="image">
        <img src={recipe.recipe.image} alt="" onClick={openModal}/></div>
        <button onClick={()=> onFavorite(recipe)}>Add to favorites</button>

        {/* <button onClick={openModal}>View Details</button> */}
            <div id="Result"></div>

           {openExpanded && 

            <Modal
            isOpen={openExpanded}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
          
            <ResultExpanded recipe={recipe} onClose={closeModal}/>
        
            </Modal>
             }
             {/* <LikeButton onClick={()=>addRecipe(recipe) }/> */}
             
        <p className="link"><a href={recipe.recipe.url} target="_blank">Link to Recipe</a></p>
      </div>
      )}
