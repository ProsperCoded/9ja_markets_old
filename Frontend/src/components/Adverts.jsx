import React from 'react';

const Advert = () => {
  return (
    <div>
      {/* Content Section */}
      <div className="flex-grow bg-white rounded-2xl py-10 shadow-md ml-6 mt-8 mb-8 mr-6 p-6 pb-20 ">
      <h1 className="text-2xl font-bold text-Primary mb-6">Advert</h1>
      <div className="mt-6 mb-6 border-t-2 border-gray-200"></div>
        <p className="text-lg text-gray-600 mb-6">
          Choose from the options below to place or manage your adverts.
        </p>
        {/* Advert Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Place a New Advert */}
          <div className="p-4 border border-Primary  hover:text-white rounded-lg hover:bg-Primary hover:opacity-50">
            <h3 className="text-xl font-semibold text-Primary mb-2">
              Place a New Advert
            </h3>
            <p className="text-gray-500 mb-4">
              Create a new advert to reach your desired audience.
            </p>
            <a
              href="/adform"
              className="inline-block bg-Primary text-white font-medium py-2 px-4 rounded-lg hover:bg-hover-Primary"
            >
              Start Now
            </a>
          </div>

          {/* Manage Existing Adverts */}
          <div className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Manage Existing Adverts
            </h3>
            <p className="text-gray-500 mb-4">
              View, edit, or delete your current adverts.
            </p>
            <a
              href="/"
              className="inline-block bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Manage Ads
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advert;
