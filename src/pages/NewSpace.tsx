import illustrationImg from './../assets/images/illustration.svg';
import logoImg from './../assets/images/logo.svg';

import './../styles/auth.scss';
import { Button } from '../components/Button/Button';

export function NewSpace(){

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
          Do you want to Join an existing Space? <span>Click here!</span>
          </p>
        </div>
      </main>
    </div>
  )
}