import React from "react";

const PricingPlans = () => {
  return (
    <section className=" bg-gray py-12 px-0 m-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
            Elige tu plan 
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Simple y transparente, sin costos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          {/* Free Plan */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Pro</h3>
              <p className="mt-4 text-gray-400">
                Ideal for growing businesses and enterprises.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$99</span>
              <span className="text-xl font-medium text-gray-400">/mo</span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited user accounts</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited transactions</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <a
  href="#"
  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
>
  Get Started
</a>

          </div>

          {/* Starter Plan */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Pro</h3>
              <p className="mt-4 text-gray-400">
                Ideal for growing businesses and enterprises.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$99</span>
              <span className="text-xl font-medium text-gray-400">/mo</span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited user accounts</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited transactions</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <a
  href="#"
  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
>
  Get Started
</a>

          </div>

          {/* Pro Plan */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Pro</h3>
              <p className="mt-4 text-gray-400">
                Ideal for growing businesses and enterprises.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$99</span>
              <span className="text-xl font-medium text-gray-400">/mo</span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited user accounts</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited transactions</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <a
  href="#"
  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
>
  Get Started
</a>

          </div>

        
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
