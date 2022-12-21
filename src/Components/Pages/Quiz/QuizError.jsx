import React from 'react';
import { Link } from 'react-router-dom';

function QuizError() {
  return (
    <div className="flex flex-col justify-center items-center relative top-60">
      <h1 className="font-poppins text-xl font-bold">
        Votre Score est inférieure a 5
      </h1>
      <Link to="/quiz">
        <button className="font-poppins bg-blue-500 rounded hover:text-black text-white transition ease-in delay-50 p-3 m-5">
          Réessayez Ici
        </button>
      </Link>
    </div>
  );
}

export default QuizError;
