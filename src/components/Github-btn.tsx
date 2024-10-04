import GithubLogo from "../assets/image/github-logo.png";

const GithubBtn = () => {
  return (
    <button className="h-12 flex text-md font-semibold w-full items-center gap-2 justify-center rounded-3xl hover:bg-zinc-100 bg-white outline outline-1 outline-zinc-400  ">
      <img src={GithubLogo} alt="" className="w-8" />
      Continue with Github
    </button>
  );
};

export default GithubBtn;
