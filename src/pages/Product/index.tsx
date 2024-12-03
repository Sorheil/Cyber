import Dropdown from "../../components/Dropdown"
const brands: string[] = ["Apple", "samsung", "Xiaomi", "Poco"]
const memories: string[] = ["16GB", "32GB", "64GB", "128GB", "256GB", "512GB"]
export default function Product() {
    return (
        <>
            {/* filter aside */}
            <aside className="px-4 mb-8">
                <form action="">
                    <Dropdown label="Price" >
                        <div className="grid grid-cols-2 grid-rows-3 ">
                            <label htmlFor="minAmount" className="col-start-1 col-end-2 row-start-1 row-end-2 text-lg opacity-25">From</label>
                            <label htmlFor="maxAmount" className="col-start-2 col-end-3 row-start-1 row-end-2 text-end text-lg opacity-25">To</label>
                            <input className="h-14 col-start-1 col-end-2 row-start-2 row-end-3 border " type="text" name="minAmount" id="minAmount" />
                            <input className="col-start-2 col-end-3 row-start-2 row-end-3 border" type="text" name="maxAmount" id="maxAmount" />
                            {/*  */}
                            {/* <input className="col-start-1 col-end-3 row-start-3 row-end-4 z-0" type="range" name="minAmount" id="minAmount"  />
                            <input className="col-start-1 col-end-3 row-start-3 row-end-4 z-0" type="range" name="maxAmount" id="maxAmount" /> */}
                        </div>
                    </Dropdown>

                    <Dropdown label="Brand">
                        <div className="flex flex-col gap-5">
                            <input className="w-full h-14 bg-gray-100 text-xl pl-3" type="search" placeholder="search" />
                            <div className="flex flex-col gap-2 font-bold text-lg">
                                {brands.map((brand, index) => (
                                    <div className="flex items-center gap-2" key={index}>
                                        <input type="checkbox" name={brand} id={brand} />
                                        <p>{brand}</p>
                                    </div>
                                ))}

                            </div>


                        </div>
                    </Dropdown>

                    <Dropdown label="Built-memory">
                        <div className="flex flex-col gap-5">
                            <input className="w-full h-14 bg-gray-100 text-xl pl-3" type="search" placeholder="search" />
                            <div className="flex flex-col gap-2 font-bold text-lg">
                                {memories.map((memory) => (
                                    <div className="flex items-center gap-2" >
                                        <input type="checkbox" name={memory} id={memory} />
                                        <p>{memory}</p>
                                    </div>
                                ))}

                            </div>


                        </div>
                    </Dropdown>

                    <button className="w-full py-4 bg-black rounded-xl text-white text-lg font-bold">Apply</button>
                </form>
            </aside>
        </>

    )
}