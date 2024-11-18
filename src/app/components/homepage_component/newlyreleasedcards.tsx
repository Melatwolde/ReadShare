'use client';
import thealchemist from '../../../../public/thealchemist.png';

const NewlyReleasedCards = () => {
    function getNewlyReleasedBooks(
        BookImage: string,
        BookTitle: string,
        Book_Description: string,
        pages: number,
        Rating: string,
        Downloads: string
    ) {
        return { BookImage, BookTitle, Book_Description, pages, Rating, Downloads };
    }

    // Get newly released books data
    const Data = [
        getNewlyReleasedBooks(thealchemist.src, 'The Alchemist', 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, it tells the story of a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.', 208, '4.5', '1000+'),
    ];

    return (
        <div className="w-[400px] h-auto rounded-[15px] bg-white">
            <div className="p-3 mt-6 flex font-[400px] text-[24px] text-[#343434]">Newly Released</div>
            <div className="p-3">
                {Data.map((book, index) => (
                    <div key={index} className="book-card gap-8 -mt-3 ml-3">
                        <img className="w-[342px] h-[240px] rounded-[15px]" src={book.BookImage} alt={book.BookTitle} />
                        <div className="w-[162px] h-[23px] font-semibold mt-2 text-[19px] text-[#343434]">{book.BookTitle}</div>
                        <div className="w-[330px] h-[45px] text-[12px] mt-2 font-[400px] text-[#202020]">
                            {book.Book_Description}
                        </div>
                        <div className="flex flex-row gap-12 items-center ml-14 h-[29px] w-[207px] mt-[87px] content-center">
                            <div className="font-bold text-[16px]">
                                {book.pages} <span className="text-[8px] font-light">Pages</span>
                            </div>
                            <div className="font-bold text-[16px]">
                                {book.Rating} <span className="text-[8px] font-light">Rating</span>
                            </div>
                            <div className="font-bold text-[16px]">
                                {book.Downloads} <span className="text-[8px] font-light">Downloads</span>
                            </div>
                        </div>
                        <button className="w-[215px] h-[43px] bg-[#EFE8DF] rounded-[15px] mt-7 ml-12 shadow-custom flex justify-center items-center">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewlyReleasedCards;
