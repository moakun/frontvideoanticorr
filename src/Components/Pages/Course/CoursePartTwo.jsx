import React from 'react';
import { Link } from 'react-router-dom';
import Vid2 from '../../Assets/PartTwo.mp4';

function CoursePartTwo() {
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
                        Procédure D’évaluation des tiers
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        La Politique ethique et anti corruption politique de
                        l'agence du benin
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Règles en matières de: Cadeaux, Voyages, Invitations
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        régimes disciplinaires, sanctions
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Dispositifs D'alert
                      </span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        9 mesures de Base concrètes pour lutter contre la
                        corruption et prévenir les conflits d’intérêt
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
              <source src={Vid2} type="video/mp4"></source>
            </video>
            <div>
              <Link to="/course">
                <button className="m-5 font-poppins hover:font-bold pl-20 pr-20 pt-5 pb-5 hover:text-black transition ease-in delay-50 rounded text-white bg-blue-500">
                  Partie 1
                </button>
              </Link>
              <Link to="/quiz">
                <button className="m-5 font-poppins hover:font-bold pl-20 pr-20 pt-5 pb-5 hover:text-black transition ease-in delay-50 rounded text-white bg-blue-500">
                  Quiz
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CoursePartTwo;
