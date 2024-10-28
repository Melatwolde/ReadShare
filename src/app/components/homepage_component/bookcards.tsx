import book from '../../../../public/Theninth b.png';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

const BookCards = () => {
    // Function to create book data
    function getBooks(
        image: string,
        title: string,
        authorName: string,
        pages: string,
        rating: string,
        lend: string,
        buyNow: string
    ) {
        return { image, title, authorName, pages, rating, lend, buyNow };
    }

    // Data for the book cards
    const data = [
        getBooks(book.src, 'teo tao', 'Tizeta', '200', '4.5', 'Lend', 'Buy Now'),
        getBooks(book.src, 'teo tao', 'Tizeta', '200', '4.5', 'Lend', 'Buy Now'),
        getBooks(book.src, 'teo tao', 'Tizeta', '200', '4.5', 'Lend', 'Buy Now'),
        // getBooks(book.src, 'teo tao', 'Tizeta', '200', '4.5', 'Lend', 'Buy Now'),
    ];

    return (
        <div className="flex flex-row gap-4 w-[900px] overflow-x-auto hide-scrollbar">
            {data.map((book, index) => (
                <div key={index} className="flex flex-col p-4 border rounded-lg shadow-md w-[300px]">  
                    <img className="rounded-[20px] w-[269px] h-[269px]" src={book.image} alt={book.title} />
                    
                    <div className='flex flex-row gap-14'>
                        <div className="flex flex-col mt-2">
                            <div className="font-semibold text-lg">{book.title}</div>
                            <div className="text-[10px] text-gray-600">Novel By {book.authorName}</div>
                            <div className="text-[10px] text-gray-600">{book.pages} pages</div>
                        </div>
                        <div className="flex flex-row items-center ml-10 mb-8 mt-3 text-[#545454]">
                            <div className="text-sm">{book.rating}</div>
                            <StarBorderRoundedIcon className="ml-1 mb-1" />
                        </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-row ml-12 gap-6 mt-12">
                        <button className="w-[56px] h-[38px] l-[36px] t-[164px] rounded-[15px] bg-[#EDE5DA] text-[#343434] font-[400px] text-15px]">{book.lend}</button>
                        <button className="w-[100px] h-[38px] t-[164px] rounded-[15px] bg-[#EDE5DA] text-[#343434] font-[400px] text-15px]">{book.buyNow}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookCards;
