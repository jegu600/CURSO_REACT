import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
   const navigate= useNavigate();

   const onLogin = () => {
      navigate ('/marvel');
   }; 
   return (
      <>
        
            <div className="container m-5">
               <div className="card">  
               <form className='m-5'>
                  <div data-mdb-input-init className="form-outline mb-4">
                     <input type="email" id="form2Example1" className="form-control" />
                     <label className="form-label" >Email address</label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                     <input type="password" id="form2Example2" className="form-control" />
                     <label className="form-label" >Password</label>
                  </div>

                  <button
                     type="button"
                     className="btn btn-primary btn-block mb-4"
                     onClick={onLogin}
                  >
                     Sign in
                  </button>


               </form>
            </div>
         </div>
      </>
   )
}
