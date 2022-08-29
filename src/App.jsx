import './scss/styles.scss';

const random = ()=>{
  const api = async (url)=>{
    const requeri = await fetch(url,{})
    .then(response => response.json())
    .then((data) =>{
      const name = document.querySelector(".name");
      name.innerText = data.name;

      const cpf = document.querySelector(".cpf");
      cpf.innerText = data.cpf;

      const cnpj = document.querySelector(".cnpj");
      cnpj.innerText = data.cnpj;

      const number = document.querySelector(".number");
      number.innerText = data.phone_number;

      const birth = document.querySelector(".birth");
      birth.innerText = data.birth_date;

      const perfil = document.querySelector(".profile")
      perfil.classList.add("active");
    })
    .catch((erro) =>{
      console.log(erro);
    })
  }
  api(`https://api.invertexto.com/v1/faker?token=1430%7CdKMEvP2nC0zh2QsQPOBy7CYHlMTBBpgL&locale=pt_BRhttps://api.invertexto.com/v1/faker?token=1430%7CdKMEvP2nC0zh2QsQPOBy7CYHlMTBBpgL&locale=pt_BR`);
}

const App = ()=> {
  return (
    <div className="App">
      <div className="card">
        <h1>Generator<br />[People]</h1>
        <div className="profile">
          <label htmlFor="">
            Name
            <div className="name"></div>
          </label>

          <label htmlFor="">
            Cpf
            <div className="cpf"></div>
          </label>

          <label htmlFor="">
            Cnpj
            <div className="cnpj"></div>
          </label>

          <label htmlFor="">
            Number
            <div className="number"></div>
          </label>

          <label htmlFor="">
            Birth
            <div className="birth"></div>
          </label>
        </div>
        <button className='btn-random' type='button' onClick={random}>To Generate</button>
      </div>
    </div>
  );
}

export default App;
