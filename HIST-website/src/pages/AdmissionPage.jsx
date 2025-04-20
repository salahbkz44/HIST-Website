import admissionLogo from "../assets/admissionLogo.png";
import histAcademy from "../assets/hist-academy.png";

export default function Admission() {
  return (
    <div className="bg-[#F9F5F0] !mb-0 flex !pt-10 !px-35 items-center justify-end font-rubik">
      <div className="flex flex-col items-start !mb-10  w-1/2 max-w-2xl">
        <img src={admissionLogo} alt="" className="w-2/3 !ml-0 !mb-2" />
        <h1 className="text-hist-green font-bold text-4xl !mb-8">
          PRÉ-INSCRIPTION
        </h1>

        <form action="post" className="w-full text-hist-green">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-bold !mb-2">First Name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
              />
            </div>
            <div>
              <label className="block font-bold !mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
              />
            </div>
          </div>

          <div className="!mt-3">
            <label className="block font-bold !mb-2">Date of Birth</label>
            <input
              type="date"
              className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
            />
          </div>

          <div className="!mt-3">
            <label className="block font-bold !mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="06 89876567"
              className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
            />
          </div>

          <div className="mt-3">
            <label className="block font-bold !mb-2">Email</label>
            <input
              type="email"
              placeholder="Hist@gmail.com"
              className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
            />
          </div>

          <div className="flex flex-col !mt-3">
            <div className="col-span-4 md:col-span-2">
              <label className="block font-bold !mb-2">Address</label>
            </div>
            <div className="flex w-full gap-0.5">
              {" "}
              <div>
                <input
                  type="text"
                  placeholder="Full address"
                  className="flex-2 !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Province"
                  className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                />
              </div>
            </div>
          </div>

          <div className=" flex justify-between !mt-3">
            <label className="block font-bold !mb-2">BAC :</label>
            <div className="flex items-center justify-center gap-5 !ml-5 space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bac"
                  value="yes"
                  className="mr-2 w-4 h-4 text-hist-green focus:ring-hist-green border-gray-300"
                  r
                />
                YES, I have
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bac"
                  value="no"
                  className="mr-2 w-4 h-4 text-hist-green focus:ring-hist-green border-gray-300"
                />
                NO, I don't have
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !mt-3">
            <div>
              <label className="block font-bold !mb-2">Year of BAC</label>
              <select
                className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select year of BAC
                </option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
            <div>
              <label className="block font-bold !mb-2">Type of BAC</label>
              <select
                className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select type of BAC
                </option>
                <option value="Technical mathematics">
                  Technical mathematics
                </option>
                <option value="Science">Science</option>
                <option value="Literature">Literature</option>
                <option value="Economics">Economics</option>
              </select>
            </div>
          </div>

          <div className="!mt-3">
            <label className="block font-bold !mb-2">Licence</label>
            <select
              className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
              defaultValue=""
            >
              <option value="" disabled>
                Select licence
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business Administration">
                Business Administration
              </option>
              <option value="Law">Law</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#D5BB97] text-hist-green !py-3 !px-8 rounded-md font-bold hover:bg-[#c2aa89]  transition-colors !mt-8 w-full"
          >
            Register
          </button>
        </form>
      </div>

      <div className="flex items-end justify-end w-10/12">
        <div className="flex bg-[#CCB29052] rounded-t-full w-2/3 justify-start !pl-10 !pr-15 !pt-20 !pb-60">
          <img src={histAcademy} alt="" />
        </div>
      </div>
    </div>
  );
}
