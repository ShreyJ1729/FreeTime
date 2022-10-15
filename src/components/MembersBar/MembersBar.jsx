export const MembersBar = () => {
    return (
        <>
            <div className="hidden flex-col w-60 md:flex" style={{ "backgroundColor": "#F2F3F5" }}>
                <button className="flex items-center mx-auto h-12 font-title text-[18px] font-semibold text-black">
                    Leetcode Study Group
                </button>
                <hr className=" border-1" />
                <div className="overflow-y-scroll flex-1 pt-3 space-y-2 font-medium text-gray-400 scrollbar-hide">
                    <div>
                        <button onClick={() => {/* toggle member */ }} className="flex items-center pl-5 w-full font-title text-sm tracking-wide hover:text-black uppercase">
                            <input type="checkbox" value="" id="flexCheckChecked3" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer ml-0 mr-1" />
                            Jeff Bezos
                        </button>
                    </div>
                    <div>
                        <button onClick={() => {/* toggle member */ }} className="flex items-center pl-5 w-full font-title text-sm tracking-wide hover:text-black uppercase">
                            <input type="checkbox" value="" id="flexCheckChecked3" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer ml-0 mr-1" />

                            Shaq
                        </button>
                    </div>
                </div>

                {/* <hr className="border-1" />

                <div className="items-center mx-auto font-title my-2 ml-2 mr-auto px-0 text-black grid grid-cols-2">
                    <div className="col-span-1 grid grid-cols-2">
                        <img
                            className="rounded-full mx-2 col-span-1"
                            src="https://avatars.githubusercontent.com/u/23284483?v=4"
                            alt=""
                            width={36}
                            height={36}
                        />
                        <p className="col-span-1 text-[12px]">Shrey</p>
                    </div>
                    <div className="col-span-1">
                        Signout
                    </div>
                </div> */}
            </div>
        </>
    )
}