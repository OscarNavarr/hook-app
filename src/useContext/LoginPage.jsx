

export const LoginPage = () => {
    return (
      <>
         <div className="mt-5 w-50 mx-auto border p-3">
          
          <div class="text-center">
            <img src={'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'} className="rounded"  alt="user imagen"/>
          </div>
          
          <h5 class="text-center px-5 mb-5">Si no tienes usurio ni contraseña, con poner los datos debajo ya se guardan. Estos datos serán guardados y validados en tu ordenador, no se guardará en ninguna base de datos online.</h5>

          <div className="form-floating mb-3">
          
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          
          </div>

          <div className="form-floating">
          
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          
          </div>

          <button type="button" className="btn btn-primary mt-5 mx-auto">Acceder</button>

         </div>
      </>
    )
  }