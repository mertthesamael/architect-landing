import happyClients from "@/assets/stats/happyClients.png"
import projectsCompleted from "@/assets/stats/projectsCompleted.png"
import awardsWin from "@/assets/stats/awardsWin.png"
import years from "@/assets/stats/years.png"


interface Stats{
    id:number,
    count:number,
    img:any,
    stat:string
    imgPos:'topLeft'|'topRight'|'bottomLeft'|'bottomRight'
}
export const Stats : Stats[]= [
    {
        id:1,
        count:84,
        stat:"Happy Clients",
        img:happyClients,
        imgPos:'topRight'
    },
    {
        id:2,
        count:123,
        stat:"Projects Completed",
        img:projectsCompleted,
        imgPos:'topLeft'
    },
    {
        id:3,
        count:37,
        stat:"Awards Win",
        img:awardsWin,
        imgPos:'topRight'
    },
    {
        id:4,
        count:30,
        stat:"Years in Business",
        img:years,
        imgPos:'bottomRight'
    },
]