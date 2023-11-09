import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin,githubLogin } = useContext(AuthContex);
  const navigate = useNavigate()
  const handleSocialLogin = (media) => {
    media()
    .then((res) => {
      toast.success('User Created Successfully')
      navigate('/')
      console.log(res);
    })
    .catch((err) =>{
      toast.error(err.message)
    });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-between items-center px-3">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral btn-sm "
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-neutral btn-sm "
        >
          GitHub
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
