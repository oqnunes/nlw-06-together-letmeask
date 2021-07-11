/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button } from '../components/Button/Button';

import illustrationImg from './../assets/images/illustration.svg';
import logoImg from './../assets/images/logo.svg';

import './../styles/auth.scss';
import { useAuth } from '../hooks/useAuths';

export function NewSpace(){

  const history = useHistory();

  const { user } = useAuth();

  useEffect(() => {
    if(!user){
      history.push('/');
    }
  }, [user]);

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration Img" />
        <strong>
          Every question has an answer.
        </strong>
        <p>
          Learn and share knowledge<br />with other people.
        </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo" />
          <h1>{user?.name}</h1>
          <h2>Create new Space</h2>
          <form>
            <input 
              type="text" 
              name="space_code" 
              id="space_code_id" 
              placeholder="Space Name"
            />
            <Button type="submit">
              Create Sapce
            </Button>
          </form>
          <p>
          Do you want to Join an existing Space? <Link to="/">Click here!</Link>
          </p>
        </div>
      </main>
    </div>
  )
}