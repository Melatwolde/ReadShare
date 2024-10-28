'use client';
import { useState } from 'react';
import MainPage from "../components/Mainpage_component/mainpage";
import book1 from '../../../public/Fall.png';
import book2 from '../../../public/thealchemist2.png';
import book3 from '../../../public/Tokill a mockingbird.png';
import book4 from '../../../public/harrypooter.png';
import book5 from '../../../public/Pride and pre.png';
import download from '../../../public/icons/download.svg';
import share from '../../../public/icons/share.svg';
import Bookmark from '../../../public/icons/Bookmark.svg';
import { ArrowUpward } from '@mui/icons-material';
import { ArrowDownward } from '@mui/icons-material';

const Book_Description = () => {
    function BookData(
        Book_Image: string,
        Book_Name: string,
        Book_Author: string,
        Short_Description: string,
        Description: string,
        Language: string,
        UploadedBy: string,
        Lending_Duration: string,
        Rental_Fee: string
    ) {
        return { Book_Image, Book_Name, Book_Author, Short_Description, Description, Language, UploadedBy, Lending_Duration, Rental_Fee };
    }

    const Data = [
        BookData(
            book4.src,
            'Harry Potter and the Goblet of Fire',
            'J.K. Rowling',
            'Read the amazing book about Harry Potter\'s fourth year at Hogwarts, where he faces the Triwizard Tournament\'s perilous challenges and uncovers dark secrets in Goblet of Fire.',
            'Harry Potter\'s fourth year at Hogwarts in \'Goblet of Fire.\' This year, Harry is unexpectedly entered into the Triwizard Tournament, a dangerous magical competition. As he faces perilous tasks and uncovers dark secrets, Harry must confront the resurgence of Voldemort. Full of adventure, mystery, and magical intrigue, this book captivates readers with every page.',
            'English',
            'John Doe',
            '14 days',
            '$5.00'
        ),
        BookData(
            book2.src,
            'The Alchemist',
            'Paulo Coelho',
            'Read the captivating novel about a young shepherd named Santiago who dreams of finding a hidden treasure near the Egyptian pyramids. His journey is filled with adventure, self-discovery, and valuable life lessons. Follow Santiago as he learns to listen to his heart and pursue his dreams.',
            'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.',
            'English',
            'Jane Doe',
            '14 days',
            '$4.00'
        ),
        BookData(
            book3.src,
            'To Kill a Mockingbird',
            'Harper Lee',
            'Read the amazing novel about the serious issues of rape and racial inequality.',
            'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.',
            'English',
            'Alice Johnson',
            '21 days',
            '$3.00'
        ),
        BookData(
            book1.src,
            '1984',
            'George Orwell',
            'Read the amazing dystopian social science fiction novel and cautionary tale.',
            '1984, a novel by George Orwell, offers political satirist Orwell\'s nightmarish vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell.',
            'English',
            'Bob Smith',
            '30 days',
            '$6.00'
        ),
        BookData(
            book5.src,
            'Pride and Prejudice',
            'Jane Austen',
            'Read the amazing romantic novel of manners that explores the themes of love, reputation, and class. Follow Elizabeth Bennet, a spirited young woman, as she navigates societal expectations and relationships. Her journey reveals the complexities of human nature and the transformative power of love and understanding.',
            'Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and eventually comes to appreciate the difference between superficial goodness and actual goodness.',
            'English',
            'Mary Johnson',
            '10 days',
            '$2.00'
        ),
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextBook = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    };

    const handlePreviousBook = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
    };

    const book = Data[currentIndex];

    return (
        <MainPage disableStyles={true}>
            <div className="flex ml-7">
                <div key={currentIndex} className="transition-transform duration-500 ease-in-out transform">
                    <div className="flex flex-row ml-14 gap-4">
                        <div className="flex flex-col gap-4">
                            <ArrowUpward className="mt-24 cursor-pointer w-[45px] h-[45px] text-[#545454]" onClick={handlePreviousBook} />
                            <ArrowDownward className="mt-2 cursor-pointer w-[45px] h-[45px] text-[#545454]" onClick={handleNextBook} />
                        </div>
                        <img className="w-[220px] h-[351.84px] ml-10 shadow-custom2" src={book.Book_Image} alt={book.Book_Name} />
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <div className="font-normal text-[40px] text-[#343434] w-[399px] h-auto">{book.Book_Name}</div>
                                <div className="w-[300px] h-[40px] mt-2 font-normal text-[27px] text-[#343434]">{book.Book_Author}</div>
                                <div className="w-[622px] h-[100px] font-normal text-[17px] text-[#343434]">{book.Short_Description}</div>
                            </div>
                            <div className="flex flex-row gap-6 ml-[10px] mt-3">
                                <div className="gap-6">
                                    <button className="w-auto h-auto p-2 l-[36px] t-[164px] rounded-[15px] bg-[#EDE5DA] text-[#343434] font-[400px] text-15px]">Start Reading</button>
                                    <button className="w-auto h-auto p-2 l-[36px] t-[164px] rounded-[15px] ml-2 bg-[#EDE5DA] text-[#343434] font-[400px] text-15px]">Contact The Uploader</button>
                                </div>
                                <img src={Bookmark.src} alt="bookmark" />
                                <img src={share.src} alt="share" />
                                <img src={download.src} alt="download" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row w-[1351px] h-screen bg-white -mt-[86px] pt-32 pl-14 gap-16">
                        <div className="flex flex-col gap-[53px]">
                            <div className="w-[176px] h-[39px] font-[500px] text-[32px] text-[#343434]">Description</div>
                            <div className="w-[565px] h-[168px] font-normal text-[20px] text-[#343434]">{book.Description}</div>
                        </div>
                        <div className="flex flex-col mt-6 gap-6">
                            <div className="flex flex-row">
                                <div className="w-[280px] h-[29px] font-medium text-[24px] text-[#343434]">Language:</div>
                                <div className="w-[130px] h-[21px] text-[17px] font-normal text-[#343434] mt-1 -ml-20">{book.Language}</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-[280px] h-[29px] font-medium text-[24px] text-[#343434]">Uploaded by:</div>
                                <div className="w-[130px] h-[21px] text-[17px] font-normal text-[#343434] mt-1 -ml-20">{book.UploadedBy}</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-[280px] h-[29px] font-medium text-[24px] text-[#343434]">Lending Duration:</div>
                                <div className="w-[130px] h-[21px] text-[17px] font-normal text-[#343434] -ml-16 mt-1">{book.Lending_Duration}</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-[280px] h-[29px] font-medium text-[24px] text-[#343434]">Rental Fee:</div>
                                <div className="w-[130px] h-[21px] text-[17px] font-normal text-[#343434] -ml-20 mt-1">{book.Rental_Fee}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainPage>
    );
};

export default Book_Description;