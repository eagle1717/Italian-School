export default [
    {
        path: "/home2",
        name: "Home2",
        component: () => import("@/views/TeacherArea/HomePage"),
        meta: {
            layout: "Default2"
        }
    },
    {
        path: "/compiti",
        name: "Compiti",
        component: () => import("@/views/TeacherArea/HomeWork"),
        meta: {
            layout: "Default2"
        }
    },
    {
        path: "/studenti",
        name: "Studenti",
        component: () => import("@/views/TeacherArea/Students"),
        meta: {
            layout: "Default2"
        }
    },
    {
        path: "/lezioni",
        name: "Lezioni",
        component: () => import("@/views/TeacherArea/Classes"),
        meta: {
            layout: "Default2"
        }
    },
    {
        path: "/calendario",
        name: "Calendario",
        component: () => import("@/views/TeacherArea/TeacherTimeLine"),
        meta: {
            layout: "Default2"
        }
    }
];
