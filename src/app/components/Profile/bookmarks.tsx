'use client';
import Image from 'next/image';
import harrypooter from '../../../../public/harrypooter.png';
import theif from '../../../../public/theif.png';
import vladmir from '../../../../public/vladmir.png';
import drug from '../../../../public/drugs.png';
import psycho from '../../../../public/psycho.png';
import thebass from '../../../../public/thebassrock.png';
import pride from '../../../../public/Pride and pre.png';
import theninth from '../../../../public/Theninth b.png';
import scifi from '../../../../public/scifi.png';
import kafka from '../../../../public/kafka.png';
import Dina from '../../../../public/Dina.png';

const Bookmarks = () => {
    function Bookmark_data(Book_Image: string) {
        return { Book_Image };
    }

    const Data = [
        Bookmark_data(vladmir.src),
        Bookmark_data(harrypooter.src),
        Bookmark_data(pride.src),
        Bookmark_data(theninth.src),
        Bookmark_data(theif.src),
        Bookmark_data(drug.src),
        Bookmark_data(psycho.src),
        Bookmark_data(thebass.src),
        Bookmark_data(Dina.src),
        Bookmark_data(scifi.src),
        Bookmark_data(kafka.src),
        Bookmark_data(harrypooter.src),
        
    ];

    return (
        <div className='flex flex-col w-[1280px] h-[717px] rounded-bl-[25px] rounded-br-[25px] rounded-tl-[0px] rounded-tr-[0px] bg-white p-4 '>
            <div className='text-2xl font-semibold mb-4 ml-6'>Bookmarks</div>
            <div className='flex flex-wrap gap-16 w-[1250px] h-auto ml-6 mt-6'>
                {Data.map((data, index) => (
                    <div key={index} className='w-[150px] h-[200px]'>
                        <Image src={data.Book_Image} alt={`Bookmark ${index}`} width={300} height={200} className=' object-cover' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookmarks;