import imgAvatar from "../../../assets/992421e6abd42f43985fef4894588d26c932efe5.png";
import imgAvatar1 from "../../../assets/e3fa84ad08a69a946cab2e46a0f62b609598d895.png";
import imgAvatar2 from "../../../assets/c8a5b3ab0c4d602bce662ac763bdf3c551a63fef.png";
import imgAvatar3 from "../../../assets/3e04328ec681a97ee920bbb76b7aa2da6b349b9e.png";
import imgAvatar4 from "../../../assets/bb2b99e4bb9db3eed1af721b96aa2228a1eba447.png";

export function AvatarGrid() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        src={imgAvatar4}
      />
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 flex">
          <div className="flex-1 relative overflow-hidden">
            <img
              alt=""
              className="absolute h-[149.71%] left-0 top-0 w-full"
              src={imgAvatar}
            />
          </div>
          <div className="flex-1 relative">
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              src={imgAvatar1}
            />
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 relative overflow-hidden">
            <img
              alt=""
              className="absolute h-[124.99%] left-0 top-[-0.65%] w-full"
              src={imgAvatar2}
            />
          </div>
          <div className="flex-1 relative overflow-hidden">
            <img
              alt=""
              className="absolute h-[140.85%] left-[0.14%] top-[-8.93%] w-full"
              src={imgAvatar3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
