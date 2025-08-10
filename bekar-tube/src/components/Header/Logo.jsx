import logo from "../../assets/logo.svg"

const Logo = () => {
    return (
        <div className="flex items-center justify-center cursor-pointer">
            <div className="min-w-7.5 h-5">
                <img
                    src={logo} alt="Youtube_logo"
                    className="w-full h-full"
                />
            </div>
            <h1 className="font-medium  text-xl">YouTube<sup className=" uppercase text-lg text-secondary">bd</sup></h1>
        </div>

    )
}
export default Logo