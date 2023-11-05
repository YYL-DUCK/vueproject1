import VueRouter from 'vue-router'

// 引入组件
import HomePage2 from "../components/HomePage2.vue";
import HomePage1 from "../components/HomePage1.vue";
import LoginPage from "../components/LoginPage.vue";
import ChangePassword from "../components/ChangePassword.vue";
import QueryMsgBoard from "../components/QueryMsgBoard.vue";
import MsgBoardDetail from "../components/MsgBoardDetail.vue";
import Management from "../components/Management.vue";
import Managetable1 from "../components/Managetable1.vue";
import Managetable2 from "../components/Managetable2.vue";
import Managetable3 from "../components/Managetable3.vue";
import Managetable4 from "../components/Managetable4.vue";
import ProjectApply from "../components/ProjectApply.vue";
import ProjectDetails from "../components/ProjectDetails.vue";
import ChangeMembers from "../components/ChangeMembers.vue";
import MT4Submit from "../components/MT4Submit.vue";

const router = new VueRouter({
    routes: [
        {
            path: '/loginpage',
            component: LoginPage,
        },
        {
            path: '/',
            component: HomePage2,
        },
        {
            path: '/homepage1',
            component: HomePage1,
        },
        {
            path: '/changepassword',
            component: ChangePassword,
        },
        {
            path: '/querymsgboard',
            component: QueryMsgBoard,
        },
        {
            path: '/msgboarddetail',
            component: MsgBoardDetail,
        },
        {
            path: '/management',
            component: Management,
            children: [
                {
                    path: 'managetable1',
                    components: { MT: Managetable1 },
                },
                {
                    path: 'managetable2',
                    components: { MT: Managetable2 },
                },
                {
                    path: 'managetable3',
                    components: { MT: Managetable3 },
                },
                {
                    path: 'managetable4',
                    components: { MT: Managetable4 },
                },
            ]
        },
        {
            path: '/ProjectDetails',
            component: ProjectDetails,
        },
        {
            path: '/changemembers',
            component: ChangeMembers,
        },
        {
            path: '/projectapply',
            component: ProjectApply,
        },
        {
            path: '/mt4submit',
            component: MT4Submit,
        },
    ]
})


export default router