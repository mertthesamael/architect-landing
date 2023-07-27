import { architectureService, constructionService, consultationService, electricService, renovationService, repairService } from "@/services/Icons/svgIcons";





export const Services = [
    {
        id:1,
        title:"Construction",
        icon:constructionService()
    },
    {
        id:2,
        title:"Renovation",
        icon:renovationService()
    },
    {
        id:3,
        title:"Consultation",
        icon:consultationService()
    },
    {
        id:4,
        title:"Repair Services",
        icon:repairService()
    },
    {
        id:5,
        title:"Architecture",
        icon:architectureService()
    },
    {
        id:6,
        title:"Electric",
        icon:electricService()
    },
]