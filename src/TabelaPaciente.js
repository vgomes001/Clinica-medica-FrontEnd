function TabelaMedico({ vetor }) {

  return (
    <div className="listagem-container">
       <h1>Pacientes Cadastrados</h1>
    <table className='table'>

        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Cpf</th>
          </tr>
        </thead>

        <tbody>
          {
            vetor.map((paciente) => (
              <tr key={paciente}>
                <td>{paciente.id}</td>
                <td>{paciente.nome}</td>
                <td>{paciente.email}</td>
                <td>{paciente.cpf}</td>
              </tr>
            ))
          }
        </tbody>
    </table>
    </div>
  )
}

export default TabelaMedico;