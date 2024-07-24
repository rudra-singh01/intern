import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Student name is required"),
  dob: yup.date().required("Date of birth is required"),
  grade: yup.string().required("Please select a grade"),
  parentContact: yup.string().required("Parent contact is required"),
  address: yup.string().required("Address is required"),
});

function Admissions() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div
      className="admissions-page w-full h-auto bg-gray-50 py-20"
      data-scroll-section
    >
      <div className="container mx-auto px-5">
        <section className="admission-process mb-20 flex flex-col">
          <h2 className="text-5xl font-bold text-blue-900 mb-12 text-center">
            Admission Process
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 p-6 flex flex-col gap-3">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Admission forms are available for download. Submit the completed
                form along with required documents at the school office.
              </p>
              <a
                href="/path-to-download-form"
                className="bg-blue-700 w-[70vw] md:w-[30vw] lg:w-[17vw] text-white py-3 px-6 rounded-full font-bold shadow-lg hover:bg-blue-800 transition duration-300 text-center block mx-auto"
              >
                Download Admission Form
              </a>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <img
                src="https://plus.unsplash.com/premium_photo-1671070687996-5b1485638342?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Admission Process"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="admission-criteria mb-20 bg-white py-16 px-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-5xl font-bold text-blue-900 mb-10 text-center">
            Admission Criteria
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Admission is based on merit and availability of seats. Entrance
            tests may be conducted for certain grades.
          </p>
        </section>

        <section className="important-dates mb-20">
          <h2 className="text-5xl font-bold text-blue-900 mb-10 text-center">
            Important Dates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700 text-lg">
            <div className="date-card bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="date-icon text-blue-500 text-6xl mb-4">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700">
                Form Availability
              </h3>
              <p>March 1st</p>
            </div>
            <div className="date-card bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="date-icon text-blue-500 text-6xl mb-4">
                <i className="fas fa-calendar-times"></i>
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700">
                Submission Deadline
              </h3>
              <p>March 31st</p>
            </div>
            <div className="date-card bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="date-icon text-blue-500 text-6xl mb-4">
                <i className="fas fa-edit"></i>
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700">
                Entrance Test
              </h3>
              <p>April 15th</p>
            </div>
            <div className="date-card bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="date-icon text-blue-500 text-6xl mb-4">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700">
                Results Announcement
              </h3>
              <p>April 30th</p>
            </div>
          </div>
        </section>

        <section className="admission-form mb-20 bg-white py-16 px-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-5xl font-bold text-blue-900 mb-10 text-center">
            Admission Form
          </h2>
          <form className="max-w-4xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Student Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("name")}
                />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("dob")}
                />
                <p className="text-red-500 text-sm">{errors.dob?.message}</p>
              </div>
              <div>
                <label
                  htmlFor="grade"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Grade Applying For
                </label>
                <select
                  id="grade"
                  name="grade"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("grade")}
                >
                  <option value="" disabled selected>
                    Select Grade
                  </option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
                <p className="text-red-500 text-sm">{errors.grade?.message}</p>
              </div>
              <div>
                <label
                  htmlFor="parentContact"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Parent's Contact
                </label>
                <input
                  type="text"
                  id="parentContact"
                  name="parentContact"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("parentContact")}
                />
                <p className="text-red-500 text-sm">
                  {errors.parentContact?.message}
                </p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("address")}
                ></textarea>
                <p className="text-red-500 text-sm">
                  {errors.address?.message}
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 text-white py-3 px-6 rounded-full font-bold shadow-lg hover:bg-blue-800 transition duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Admissions;
