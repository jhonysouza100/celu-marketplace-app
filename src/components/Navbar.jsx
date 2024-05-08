import reactLogo from "../assets/react.svg"
import { Link } from 'react-router-dom'

export default function Navbar({pages}) {
  return (
    <div className="w-full flex justify-between p-2 items-center bg-cyan-600">

    <div className="grid-flow-row space-x-1">
      <img src={reactLogo} alt="react logo" className=" inline" />
      <span className="text-sm">React Hooks</span>
    </div>

      <ul className="flex justify-between items-center">
        {pages.map((el) => (
          <li className='ml-2 text-sm hover:text-amber-500' key={crypto.randomUUID()}>
            <Link to={el.path}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
