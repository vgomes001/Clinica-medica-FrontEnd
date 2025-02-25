function Tabela({ vetor }) {

  return (
    <div className="listagem-container">
       <h1>Médicos Cadastrados</h1>
    <table className='table'>

        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Crm</th>
            <th>Especialidade</th>
          </tr>
        </thead>

        <tbody>
          {
            vetor.map((medico) => (
              <tr key={medico}>
                <td>{medico.id}</td>
                <td>{medico.nome}</td>
                <td>{medico.email}</td>
                <td>{medico.crm}</td>
                <td>{medico.especialidade}</td>
              </tr>
            ))
          }
        </tbody>
    </table>
    </div>
  )
}

export default Tabela;