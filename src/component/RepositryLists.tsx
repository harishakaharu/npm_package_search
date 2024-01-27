import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/userAction";
import '../styles/RepositryList.css'
import LoadingComp from "./LoadingComp";
const RepositryLists: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const { searchRepositry } = useAction();
  const termHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositry(term) as any;
    setTerm('');
  }
  const { loading, error, data } = useTypedSelector((state) => state.repositry);
  return <div className="mainContainer">
    <h1>Search your needed npm package</h1>
    <form onSubmit={submitHandler} className="form">
      <input value={term} onChange={termHandler} />
      <button>Search</button>
    </form>
    <div className="list">{!error && !loading && data.map(data => (<ul><li key={data} className="listData">{data}</li></ul>))}</div>
    <div>
      {error && <h3>Error : {error}</h3>}
      <div className="loadingPhase">{loading && <LoadingComp />}</div>
    </div>
  </div>
};
export default RepositryLists;
