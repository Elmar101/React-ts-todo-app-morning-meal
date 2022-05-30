const Todo = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-5 mx-auto">
            <h3 className="bg-primary text-white p-3">
                Elmar'in Listesi
            </h3>
            <div className="input-group mb-3">
                <input type="text" className="form-control"/>
                <button className="btn btn-primary"> Əlavə et </button>
            </div>
            <div className="input-group mb-3">
                <input type="checkbox" className="form-check-input" name="" id="disableAll"/>
                <label htmlFor="disableAll" className="form-check-label"> Hamisini Görsəd</label>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Seher Yemeyi</td>
                        <td>He</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Seher Bazarliqi</td>
                        <td>He</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Seher Idmani</td>
                        <td>yox</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default Todo;