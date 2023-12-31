import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../contexts/Context';

export const ShowData = () => {
  const { state, dispatch} = useContext(Context);// Puxa do contexto as propriedades
  return (
    <div>
      <h3>Tela ShowData</h3>
      {state.user.name &&
      <>
        MEU NOME É: {state.user.name}<br/>
        EU TENHO: {state.user.age} anos.
      </>        
      }

      {!state.user.name &&
        'Não há informações'
      }
      

      <br/>
      <Link to={'/'}>Ir para SignUp</Link>
    </div>
  );
}