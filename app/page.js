import Link from "next/link";

const Home = () => {
  return (<>
     <header className="grid grid-cols-2">
        <div className=" ">Mani</div>
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                 <li>
                    <Link href="/service">Service</Link>
                </li>
                 <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
      
    <h1 className="text-3xl text-red-500 underline">Hello</h1>
    </header>
 
  </>
  )
};

export default Home;