import Link from "next/link";

export default function Navbar({pages}) {
  return (
    <header className="w-full flex justify-between p-2 items-center bg-cyan-600">

    <div className="grid-flow-row space-x-1">
      {/* <img src={reactLogo} alt="react logo" className="inline" /> */}
    </div>

      <ul className="nav-list flex justify-between items-center">
        {pages.map((el) => (
          <li className='ml-2 hover:text-amber-500' key={crypto.randomUUID()}>
            <Link className="nav-link" style={{color: 'white'}} href={el.path}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
