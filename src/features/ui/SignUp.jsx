import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="bg-rose-200 h-screen content-center  ">
        <form className="flex flex-col bg-white px-10  w-96 space-y-5 pt-7 pb-10 justify-self-center border rounded-xl ">
          <h1 className="font-bold text-xl capitalize">sign up</h1>
          <input
            className="border-2 border-stone-400 placeholder:py-9 placeholder:px-3 indent-2 py-2"
            type="text"
            placeholder="Your name"
          />
          <input
            className="border-2 border-stone-400 placeholder:py-9 placeholder:px-3 indent-2 py-2 "
            type="email"
            placeholder="Email Addres"
          />
          <input
            className="border-2 border-stone-400 placeholder:py-9 placeholder:px-3 indent-2 py-2 "
            type="password"
            placeholder="password"
          />
          <button className="border-1 border-black bg-red-500 py-2 ">
            continue
          </button>
          <span>
            Already have an account?
            <Link className="text-red-500" to="/login">
              Login here
            </Link>
          </span>
          <div className="space-x-1">
            <input type="checkbox" />
            <span className="text-sm">
              by contuining i agree to the term of use & privacy policy
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
