import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type FormatCardProps = {
  name: string,
  description: string,
  imageUrl: string,
  route: string,
}

export default function Home() {
  const [ formatSectionScroll, setFormatSectionScroll ] = useState(false);
  const formatsSectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if ( formatSectionScroll && formatsSectionRef.current) {
      formatsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setFormatSectionScroll(false);
    } else if ( formatsSectionRef.current && location.state?.scrollTo === "formats") {
      formatsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [formatSectionScroll]);

  const formats = [
    {
      name: 'Tombola',
      description: 'Some description for tombola',
      imageUrl: 'https://picsum.photos/300/',
      route: '/',
    },
    {
      name: '1v1v*',
      description: 'Some description for 1v1v*',
      imageUrl: 'https://picsum.photos/300/',
      route: '/format1v1v',
    },{
      name: 'Tag',
      description: 'Some description for tag',
      imageUrl: 'https://picsum.photos/300/',
      route: '/',
    },
  ]

  const formatsList = formats.map(format => <FormatCard key={ format.name } name={format.name} description={format.description} imageUrl={format.imageUrl} route={ format.route }/>)
  

  return (
    <>
    
      <main className="flex flex-col justify-center text-center my-64 gap-5">
        <h1 className="text-5xl font-bold">B.L.O.A.T.</h1>
        <p className="text-gray-400">Bizzare Last One Alive Tournament Formats</p>
        <div>
          <button onClick={() => setFormatSectionScroll(true)} 
          className="mt-4 text-black font-bold bg-white flex p-4 mx-auto rounded-lg
          hover:bg-pink-600">
            Get Your Game On!
          </button>
        </div>

      </main>

      <section ref={ formatsSectionRef } className="flex px-32 justify-between mb-12">
        { formatsList }
      </section>

    </>
  );
};

function FormatCard({ name, description, imageUrl, route }: FormatCardProps){
  
  return (
    <div className="flex flex-col gap-4">
      <Link to={route}>
          <img src={ imageUrl } alt="" className="rounded-xl" />
          <h5 className="text-center font-bold text-2xl">{ name }</h5>
          <p className="text-gray-400 text-center">{ description }</p>
        </Link>
    </div>
  )
}