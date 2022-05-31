import { useMemo, useState } from "react";
import { useRef } from "react";
import { Model } from "../models/staticData";
import { TodoItem } from "../models/todoItem";
/* interface ITODO_ITEMS {
    id: number;
    description: string;
    action: string;
}
const initial_items: ITODO_ITEMS[] = [
    { id: 1, description: 'Seher Yemeyi', action: 'he' },
    { id: 2, description: 'Seher Bazarliqi', action: 'he' },
    { id: 3, description: 'Seher Idmani', action: 'yox' }
] */
const Todo = () => {
    const model = new Model();
    const [items, setItems] = useState<TodoItem[]>(model.items);
    const [message,setMessage] = useState("");
    const name = useRef(model.name);
    const getName = useMemo(() => { return name.current }, [name.current]);
    const inputRef = useRef<HTMLInputElement>(null);

    const addToList = (input: HTMLInputElement) => {
       setMessage(input.value);
       input.value = "";
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-5 mx-auto">
                    <h3 className="bg-primary text-white p-3">
                        {getName}'in Listesi
                    </h3>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            ref={inputRef}
                            onKeyUp = {(e)=> {
                                e.code ==="Enter"  && (inputRef.current && addToList(inputRef.current))
                            }}
                            onBlur = {() => inputRef.current && addToList(inputRef.current)}
                        />
                        <button 
                            className="btn btn-primary" 
                            onClick = {()=> inputRef.current && addToList(inputRef.current)}
                        > Əlavə et </button>
                    </div>
                    {message}
                    <div className="input-group mb-3">
                        <input type="checkbox" className="form-check-input" name="" id="disableAll" />
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
                            {
                                items.map((item, i) => <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{item.description}</td>
                                    <td>{item.action}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Todo;