import { useMemo } from "react";

export const UseMemo = () => {
  
  let users = 0;

  const data = useMemo(() => {
    return getUsers();
  }, []);

  // const message = getUsers()

  function getUsers() {
    console.log("Peticion al servidor");

    users = users + 1;

    return `${users}`;
  }

  return (
    <div className="align-middle p-2">
      <hr />
      <h2>El componente hijo se renderiza.</h2>
      <br />
      <p>La funcion se ejecuta una unica ves, durante el 1er renderizado.</p>
      <p>
        Despues, la variable data no incrementa de:{" "}
        <span className="text-lime-500">{data}</span>
      </p>
      <p>
        Porque la funcion no cumple las condiciones para volverse a ejecutar.
      </p>
      <br />
      <div className="bg-zinc-800 p-2 rounded-md text-yellow-600">
        {"const data = useMemo(() => { return getUsers() }, [])"}
      </div>
      <br />
      <div className="bg-zinc-800 p-2 rounded-md text-yellow-600">
        {
          'function getUsers() {\nconsole.log("Peticion al servidor");\nusers = users + 1;\nreturn `${users};`\n}'
        }
      </div>
    </div>
  );
};
