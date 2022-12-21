import React from 'react';
import { Link } from 'react-router-dom';
import Vid1 from '../../Assets/PartOne.mp4';

function Course() {
  return (
    <div>
      <div className="flex">
        <aside className="h-screen sticky top-0">
          <div className="flex flex-col h-screen p-3 bg-blue-500 shadow w-60">
            <div className="space-y-3">
              <div className="flex items-center">
                <h2 className="text-xl font-bold text-white font-poppins">
                  Points Discutés
                </h2>
              </div>
              <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Objectifs
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        La corruption qu’est ce que c’est ?
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Pour Notre Pays
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Le bénin et la corruption
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Engagement du groupe VINCI
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Le Référentiel éthique de VINCI
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Procédure D’évaluation des tiers
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <main>
          <div className="flex flex-col justify-center items-center absolute left-96 bottom-1">
            <video width="1050" height="800" controls>
              <source src={Vid1} type="video/mp4"></source>
            </video>
            <Link to="/course2">
              <button className="m-5 font-poppins hover:font-bold pr-60 pl-60 pt-5 pb-5 hover:text-black transition ease-in delay-50 rounded text-white flex flex-col items-center bg-blue-500">
                Partie 2
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Course;
