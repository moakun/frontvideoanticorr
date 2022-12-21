import React, { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { useRegister } from '../../../Hooks/useRegister';
import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const { register, isloading, error } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(firstName, lastName, userName, companyName, password);
  };
  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-2xl lg:max-w-xl relative top-20 border-2 border-black">
      <h1 className="text-3xl font-semibold font-poppins text-center text-blue-700">
        Créer Votre Compte
      </h1>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800 font-poppins">
            Prénom:
          </label>
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstName"
            className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800 font-poppins">
            Nom:
          </label>
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800 font-poppins">
            Nom D'utilisateur:
          </label>
          <input
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="userName"
            className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800 font-poppins">
            Nom De La Société:
          </label>
          <input
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            type="text"
            name="Company Name"
            className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800 font-poppins">
            Mot De Passe:
          </label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full font-poppins px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Créer Votre Compte
          </button>
        </div>
        <div className="font-poppins">
          Vous avez déja un compte? Connectez-vous
          <Link to="/login">
            <span className="font-poppins text-blue-900 m-2 font-bold underline">
              Ici!
            </span>
          </Link>
        </div>
        {error && (
          <Alert severity="error">
            <AlertTitle>Erreur</AlertTitle>
            {error}
            <strong> - Veuillez y jeter un oeil</strong>
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Register;
