import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();

  const handleSignInSubmite = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    if (password.length < 6) {
      toast.success("passwor must be at least 6 character");
    }

    signIn(email, password)
      .then((res) => {
        console.log(res);
        event.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignInSubmite} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral">Login</button>
              </div>
              <label className="label">
                New here?{" "}
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account
                </Link>
              </label>
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
