import { useHistory } from 'react-router-dom';

import { Button } from '../components/Button/Button';

import illustrationImg from './../assets/images/illustration.svg';
import logoImg from './../assets/images/logo.svg';
import googleIconImg from './../assets/images/google-icon.svg';

import './../styles/auth.scss';
import { useAuth } from '../hooks/useAuths';

export function Home(){

  const history = useHistory();

   const { user, signInWithPopup } = useAuth();

  const _handleCreatePlace = async () => {
    if(!user){
      await signInWithPopup()
    }
    history.push('/new-space');
  }
  
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration Img" />
        <strong>
          Create a Q&amp;A's Space Online.
        </strong>
        <p>
          Answer your audience's Questions in Real Time. Friendly and Safe Place.
        </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo" />
          <button 
            className="create-space"
            onClick={() => _handleCreatePlace()}
          >
            <img src={googleIconImg} alt="BI" />
            Create your Space with Google.
          </button>
          <div className="separator">or enter an existing space</div>
          <form>
            <input 
              type="text" 
              name="space_code" 
              id="space_code_id" 
              placeholder="Enter the Space Code"
            />
            <Button type="submit">
              Enter Space
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}