type FormatCardProps = {
  name: string,
  description: string,
  imageUrl: string,
}

export default function Home() {
  const formats = [
    {
      name: 'Tombola',
      description: 'Some description for tombola',
      imageUrl: 'https://picsum.photos/300/',
    },
    {
      name: '1v1v*',
      description: 'Some description for 1v1v*',
      imageUrl: 'https://picsum.photos/300/',
    },{
      name: 'Tag',
      description: 'Some description for tag',
      imageUrl: 'https://picsum.photos/300/',
    },
  ]

  const formatsList = formats.map(format => <FormatCard name={format.name} description={format.description} imageUrl={format.imageUrl} />)
  

  return (
    <>
    
      <main className="flex flex-col justify-center text-center my-64 gap-5">
        <h1 className="text-5xl font-bold">B.L.O.A.T.</h1>
        <p className="text-gray-400">Bizzare Last One Alive Tournament Formats</p>
        <div>
          <button className="mt-4 text-black font-bold bg-white flex p-4 mx-auto rounded-lg
          hover:bg-pink-600">
            Get Your Game On!
          </button>
        </div>

      </main>

      <section className="flex px-32 justify-between mb-12">
        { formatsList }
      </section>

    </>
  );
};

function FormatCard({ name, description, imageUrl }: FormatCardProps){
  
  return (
    <div className="flex flex-col gap-4">
          <img src={ imageUrl } alt="" className="rounded-xl" />
          <h5 className="text-center font-bold text-2xl">{ name }</h5>
          <p className="text-gray-400 text-center">{ description }</p>
    </div>
  )
}