export const GroupIcon = (props) => {
    return (
        <>
            <button>
                <img
                    className="rounded-full my-2"
                    src={props.pictureURL}
                    alt={"somelabel"}
                    width={48}
                    height={48} />
            </button>
        </>
    )
}