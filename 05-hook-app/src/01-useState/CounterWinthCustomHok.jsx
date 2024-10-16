import useCounter from "../hook/useCounter";


const CounterWinthCustomHok = (  ) => {
    const { counter, sumar, restar, reset } = useCounter();

    return (
        <>
        <hr />


            <h1>Counter con hook: { counter }</h1>

            <button className="btn btn-success m-2" onClick={sumar}> +  1 </button>
            <button className="btn btn-primary"onClick={reset}> Reset </button>
            <button className="btn btn-warning m-2"onClick={restar}> - 1 </button>
        </>
    );
}
export default CounterWinthCustomHok;