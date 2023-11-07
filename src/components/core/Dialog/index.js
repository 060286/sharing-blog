import React from "react";
import { useForm, Controller } from "react-hook-form";

import FadeIn from "react-fade-in/lib/FadeIn";

function Dialog({ onCloseDialog }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const handleSendMail = async (data) => {
    onCloseDialog();
  };

  return (
    <FadeIn transitionDuration={1000}>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white">
              <div className="p-6">
                <h2 className="text-2xl text-black font-semibold">Hire me!</h2>
                <form onSubmit={handleSendMail}>
                  <div className="name-container mt-5">
                    <label
                      htmlFor="fullName"
                      className="text-xl text-slate-950"
                    >
                      Full Name{" "}
                    </label>
                    <Controller
                      name="fullName"
                      control={control}
                      defaultValue=""
                      rules={{ minLength: 3, required: true }}
                      render={({ field }) => (
                        <input
                          className="ml-10 text-slate-700 placeholder:italic placeholder:text-slate-700 placeholder:text-sm"
                          placeholder="Type your full name"
                          {...register("fullName")}
                          {...field}
                        />
                      )}
                    ></Controller>
                  </div>

                  <div className="email-container mt-5">
                    <label htmlFor="email" className="text-xl text-slate-950">
                      Email{" "}
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      rules={{ required: true, minLength: 3 }}
                      render={({ field }) => (
                        <input
                          className="ml-10 text-slate-700 placeholder:italic placeholder:text-slate-700 placeholder:text-sm"
                          placeholder="Type your email"
                          {...register("email")}
                          {...field}
                        />
                      )}
                    ></Controller>
                  </div>

                  <div className="phone-number-container mt-5">
                    <label
                      htmlFor="phoneNumber"
                      className="text-xl text-slate-950"
                    >
                      Phone number{" "}
                    </label>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          className="ml-10 text-slate-700 placeholder:italic placeholder:text-slate-700 placeholder:text-sm"
                          placeholder="Type your phone"
                          {...register("phoneNumber")}
                          {...field}
                        />
                      )}
                    ></Controller>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={onCloseDialog}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Dialog;
