export const CalendarTopBar = () => {
    return (<><div className="flex items-center px-2 h-12 shadow-sm">
        <div className="flex items-center">
            <span className="mr-2 font-title text-white whitespace-nowrap">
                Title
            </span>
        </div>

        <>
            <div className="hidden mx-2 w-px h-6 bg-white/[.06] md:block"></div>
            <div className="hidden mx-2 text-sm font-medium text-gray-200 truncate md:block">
                description
            </div>
        </>

    </div >
    </>)
}