# React Hooks

## useMemo

memoriza la funcion: by cavernay code, o sea esta funcion se ejecuta una unica vez y se memoriza su valor

Ejecuta un callback que retorna un valor

Sirve para poder memorizar el valor que se devuelve de una funcion, para que solamente se vuelva a ejecutar si este valor cambia, No hace falta usar estados.
Recibe como parametro un callbak, y una condicion de ejecucion.
El callback solo se ejecuta cuando la condicion cambia su valor.

```javascript
const users = useMemo(() => { return getUsers() }, [])
```



## useCallback

Memoriza el state: by cavernary code, o sea esta funcion no va afectar el estado

La funcion no puede cambiar los estados dentro de si, sino se cumple su condicion.
La funcion se ejcuta pero no cambia el estado, por ende no se renderiza el componente.

```javascript
const [number, setNumber] = useState(0)
const [calculate, setCalculate] = useState(0)

function calculateNumber() {
  
  console.log('calculate')

  setNumber(number + 1)
}

const memoCalculateNumber = useCallback(() => calculateNumber(), [calculate])
  ```

