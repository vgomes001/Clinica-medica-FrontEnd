function Formulario ({botao, eventoTeclado, cadastrar}) {
  return (

    <div className="form-wrapper">

      
      <div className="image-container">
    <img src="https://static.vecteezy.com/system/resources/previews/017/415/576/original/medical-team-doctors-with-white-coat-cartoon-characters-vector-png.png" alt="Imagem de Médico" />
  </div>

    <div className="form-container">
      <h2>Cadastro de Médicos</h2>

    <form>
      <input type='text' name="nome" onChange={eventoTeclado} placeholder="Digite o nome" className='form-control' />
      <input type='email' name="email"onChange={eventoTeclado} placeholder="@vallmed.com.br" className='form-control'/>
      <input type='text' name="telefone" onChange={eventoTeclado} placeholder="telefone" className='form-control'/>
      <input type='text' name="crm" onChange={eventoTeclado} placeholder="CRM" className='form-control' />
      <input type='text' name="especialidade" onChange={eventoTeclado} placeholder="especialidade" className='form-control' />
      
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

export default Formulario;