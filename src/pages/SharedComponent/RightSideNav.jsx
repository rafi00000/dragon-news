import { FaGoogle, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div className="w-full">
      <div className="space-y-2 my-2">
        <h2 className="text-xl font-bold">Login With</h2>

        <button className="w-full border border-black">
          <div className="flex gap-3 justify-center items-center">
            <FaGoogle className="text-2xl"></FaGoogle>
            Login with Google
          </div>
        </button>

        <button className="w-full border border-black">
          <div className="flex gap-3 justify-center items-center">
            <FaGithub className="text-2xl"></FaGithub>
            Login with Github
          </div>
        </button>
      </div>
      {/* login with section ends */}

      <div>
        <div className="space-y-2 my-2">

          <h2 className="text-xl font-bold">Find Us On</h2>

          <a className="flex items-center gap-3 justify-center border p-2 rounded-xl border-black">
            <FaFacebook className="text-2xl"></FaFacebook>
              Facebook
          </a>

          <a className="flex items-center gap-3 justify-center border p-2 rounded-xl border-black">
            <FaTwitter className="text-2xl"></FaTwitter>
              Twitter
          </a>
        </div>
      </div>
      {/* follow section ends */}

      <div className="bg-slate-200 rounded-lg p-3 space-y-5">
          <h2 className="text-xl font-bold">Q-Zone</h2>
          <img src='/images/qZone1.png' alt="" className="mx-auto"/>
          <img src='/images/qZone2.png' alt="" className="mx-auto"/>
          <img src='/images/qZone3.png' alt="" className="mx-auto"/>
      </div>
      {/* Q-Zone Ends */}
    </div>
  );
};

export default RightSideNav;
