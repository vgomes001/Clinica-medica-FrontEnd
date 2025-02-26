function Paciente ({botao, eventoTeclado, cadastrar}) {
  return (

    <div className="form-wrapperP">

      
      <div className="image-containerP">
    <img src="https://img.freepik.com/vetores-premium/ilustracao-de-um-medico-conversando-com-um-paciente_8499-1899.jpg" alt="Imagem de Médico" />
  </div>

    <div className="form-containerP">
      <h2>Cadastro de Pacientes</h2>

    <form>
      <input type='text' name="nome" onChange={eventoTeclado} placeholder="Digite o nome" className='form-control' />
      <input type='email' name="email"onChange={eventoTeclado} placeholder="@vallmed.com.br" className='form-control'/>
      <input type='text' name="telefone" onChange={eventoTeclado} placeholder="telefone" className='form-control'/>
      <input type='text' name="cpf" onChange={eventoTeclado} placeholder="***.***.***-**" className='form-control' />
      
      {
        botao
        ?
        <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary' />
        :
        <div>
           <input type='button' value='Cancelar' className='btn btn-secondary' />
        </div>
      }
    </form>
      </div>
    </div>
  );
}

export default Paciente;