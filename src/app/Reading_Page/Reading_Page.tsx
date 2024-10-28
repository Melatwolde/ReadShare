'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import MainPage from '../components/Mainpage_component/mainpage';
import Tokill from '../../../public/Tokill a mockingbird.png';
import tokil_pdf from '../../../public/books/TKMFullText.pdf';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';

if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
}

// Book data without importing PDF as a module
const bookData = {
  Book_Image: Tokill.src,
  Book_File: '/books/TKMFullText.pdf', // Static path to PDF file in public directory
};

type Chapter = {
  title: string;
  page: number;
};

const chapters: Chapter[] = [
  { title: 'Chapter 1: Beginnings', page: 5 },
  { title: 'Chapter 2: The Journey', page: 20 },
  { title: 'Chapter 3: Discoveries', page: 35 },
  { title: 'Chapter 4: Discoveries', page: 45 },
  { title: 'Chapter 5: Discoveries', page: 55 },
  
];

const Reading_Page: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(bookData.Book_File);
      const loadedPdf = await loadingTask.promise;
      setPdf(loadedPdf);
    };
    loadPdf();
  }, []);

  useEffect(() => {
    const renderPage = async () => {
      if (!pdf || !canvasRef.current) return;
      const page: pdfjsLib.PDFPageProxy = await pdf.getPage(currentPage);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvasContext: context, viewport }).promise;
      }
    };

    renderPage();
  }, [pdf, currentPage]);

  const goToNextPage = () => {
    if (pdf && currentPage < pdf.numPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const gotoPrevPage = () => {
    if (pdf && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <MainPage>
      <div className="flex gap-8">
        <div className= " w-[300px] h-[3000px] p-4 ml-4 mt-3 " style={{ maxHeight: 'calc(100vh - 1.5rem)' }}>
            <img src={bookData.Book_Image} alt="Book Cover" className="mb-4 ml-12 shadow-custom2" />
            <div className='flex flex-row text-[#343434] gap-3 ml-12'>
                <h2 className="text-[20px] font-normal mb-4 ">Rate This Book</h2>
                <StarBorderPurple500OutlinedIcon />
            </div>
            
          <ul className='gap-3 h-full'>
            {chapters.map((chapter, index) => (
              <li key={index} className="cursor-pointer hover:bg-gray-300 p-2 w-[350px] h-[40px] mt-1 bg-white rounded-[5px]">
                <button
                  className="w-full text-left"
                  onClick={() => setCurrentPage(chapter.page)}
                >
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center items-center overflow-hidden">
          <canvas ref={canvasRef} />
          <div className='flex flex-row '>
                <button onClick ={gotoPrevPage}  disabled={pdf ? currentPage >= pdf.numPages : true}><NavigateBefore/></button>
                <button onClick={goToNextPage} disabled={pdf ? currentPage >= pdf.numPages : true}><NavigateNextIcon /></button>                
          </div>
          
        </div>
      </div>
    </MainPage>
  );
};

export default Reading_Page;
