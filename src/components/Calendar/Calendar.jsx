import { useEffect } from 'react';
import { HeatMapGrid } from 'react-grid-heatmap'
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { hoverBoxDataAtom, hoverBoxPositionAtom, showHoverBoxAtom, calendarViewDataAtom, maxCalendar, nullCalendar, addCalendar, shreyCalendar, shivamCalendar, ethanCalendar, calPeopleDataAtom, selectedUsersAtom, calHoverBoxAtom } from "../Atoms";

export const Calendar = (props) => {
    const [calendarViewData, setCalendarViewData] = useRecoilState(calendarViewDataAtom);
    const [calPeopleData, setCalPeopleData] = useRecoilState(calPeopleDataAtom);
    const [hoverBoxShown, setShowHoverBox] = useRecoilState(showHoverBoxAtom);
    const [hoverBoxData, setHoverBoxData] = useRecoilState(hoverBoxDataAtom);
    const [hoverBoxPosition, setHoverBoxPosition] = useRecoilState(hoverBoxPositionAtom);

    const selectedUsers = useRecoilValue(selectedUsersAtom);

    const xLabels = ["Mon, Oct 17", "Tue, Oct 18", "Wed, Oct 19", "Thu, Oct 20", "Fri, Oct 21", "Sat, Oct 22", "Sun, Oct 23"]
    const yLabels = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]

    const DARKNESS = 1.33;
    const maxId = "102004253129120758811";
    const ethanId = "107062892740015198111";
    const shreyId = "109592410078630474114";
    const shivamId = "118401487483177881683";

    const openHoverBox = useRecoilCallback(({snapshot}) => async () => {
        const hoverBoxVisible = await snapshot.getPromise(showHoverBoxAtom);
        if (!hoverBoxVisible) setShowHoverBox(true);
    }, [hoverBoxShown]);
    
    const closeHoverBox = useRecoilCallback(({snapshot}) => async () => {
        const hoverBoxVisible = await snapshot.getPromise(showHoverBoxAtom);
        if (hoverBoxVisible) setShowHoverBox(false);
    }, [hoverBoxShown]);

    const setBoxData = useRecoilCallback(({snapshot}) => async (hour, day) => {
        const peopleData = await snapshot.getPromise(calPeopleDataAtom);
        document.getElementById("hoverBoxData").innerHTML = peopleData[hour][day];
    }, [calPeopleData]);

    useEffect(() => {
        setTimeout(() => {
            // add a bunch of event listeners onhover for the calendar boxes
            let heatmap = document.getElementById("heatmap-container").children[0]
            const cells = heatmap.children[1].children[1];
            const timeBar = heatmap.children[0]
            const membersBar = document.getElementById("member-bar")

            timeBar.addEventListener('mouseover', closeHoverBox)
            membersBar.addEventListener('mouseover', closeHoverBox)

            console.log(cells)

            for (let hour = 0; hour < 18; hour++) {
                for (let day = 0; day < 6; day++) {
                    cells.children[hour].children[day].addEventListener('mouseover', openHoverBox);
                    cells.children[hour].children[day].addEventListener('mouseover', () => {setBoxData(hour, day)});
                }
            }

            document.addEventListener('mousemove', (e) => {
                setHoverBoxPosition({ left: e.pageX + 10, top: e.pageY + 10});
            });
        }, 3000);
    }, [])

    useEffect(() => {
        const calData = addCalendar(selectedUsers.includes(maxId) ? maxCalendar : nullCalendar,
            selectedUsers.includes(ethanId) ? ethanCalendar : nullCalendar,
            selectedUsers.includes(shreyId) ? shreyCalendar : nullCalendar,
            selectedUsers.includes(shivamId) ? shivamCalendar : nullCalendar,
        );

        setCalendarViewData(calData['busy'])
        setCalPeopleData(calData['people'])
    }, [selectedUsers, setCalendarViewData, setCalPeopleData])

    return (
        <>
            {hoverBoxShown && <div id="hoverbox" className=" w-max h-max bg-white text-black fixed" style={{left: hoverBoxPosition.left, top: hoverBoxPosition.top, zIndex: 999}}>
                <p className='text-black text-sm mx-auto px-3 py-2' id="hoverBoxData">{hoverBoxData}</p>
            </div>}
            <div className="flex flex-col flex-1 shrink min-w-0" style={{ "backgroundColor": "#F2F3F5" }}>
                <div className="overflow-scroll flex-1" id="heatmap-container">
                    <HeatMapGrid
                        data={calendarViewData}
                        xLabels={xLabels}
                        yLabels={yLabels}
                        cellHeight="2rem"
                        cellStyle={(_x, _y, ratio) => ({
                            background: `rgb(84, 176, 255, ${ratio * DARKNESS})`,
                            fontSize: '.8rem',
                            borderRadius: '0px',
                            color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                        })}
                    />
                </div>
            </div>
        </>
    )
}