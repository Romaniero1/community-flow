import Image from "next/image";
import Art from "/public/images/flow/artflow/art.png"

const listone = ['Memes', 'Gifs of Character NFTs or your Colony', 'Paintings', 'Portraits of famous Characters!',
'Hand drawn sketches or non pixelated versions of Characters', 'Comics', 'Anime style ANYTHING!!'
]

export const ArtFlow = () => {
    return (
        <div className="h-[1860px] w-[1200px] pl-[100px]">
            <h2 className="uppercase pt-[100px]">
                artwork
            </h2>
            <p className="pt-5 w-[450px]">
                Tiny Colony fan art is appreciated and loved by the team and community.
                I mean LOVED! We have provided lots of content to work with in creating and sharing art.
                Download our Art Pack which includes Logos, Characters, Backgrounds, banners etc. Go nuts!
            </p>
            <a href='https://drive.google.com/drive/folders/1_dYh2bRimSeKttHH_0MSikgA6foD5hmD?usp=sharing'>
                <button className='outline outline-0 w-40 h-10 mt-10 rounded-full bg-pink text-white uppercase hover:bg-dark-pink active:bg-press-pink'>
                    open assets
                </button>
            </a>
            <div className="pt-[60px]">
                <Image src={Art} width={960} height={580} alt="image" />
            </div>
            <h4 className="uppercase pt-[80px] w-[590px]">
                Here are some examples of Art ideas to get your creative mind going:
            </h4>
            <div className="flex flex-row pt-10 space-x-20 ">
                <ul className="flex flex-col w-[40%] list-disc list-outside">
                  {listone.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center items-center w-[1011px] h-[327px] bg-[url('/images/flow/artflow/dialog.png')] mt-[80px]">
                <h3 className="w-[670px] uppercase text-center">
                There are some restrictions for using Tiny Colony art for commercial purposes though. 
                These restrictions are to protect the Tiny Colony brand. If you are not sure, reach out to 
                a team member on Discord and ask! If you want to explore commercial property rights, email info@tinycolony.io
                </h3>
            </div>
        </div>
    )
}