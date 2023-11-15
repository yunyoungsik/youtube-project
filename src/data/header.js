// 메뉴
import { AiFillHome } from 'react-icons/ai'
import { AiFillTrophy } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

// sns
import { FiGithub } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'

export const menuText = [
    {
        title: "홈",
        icon: <AiFillHome />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <AiFillTrophy />,
        src: "/Today"
    },
    {
        title: "유튜버",
        icon: <AiFillYoutube />,
        src: "/Youtuber"
    },
]

export const keywordText = [
    {
        title: "지무비",
        src: "/search/지무비"
    },
    {
        title: "고몽",
        src: "/search/고몽"
    },
    {
        title: "김시선",
        src: "/search/김시선"
    },
    {
        title: "달빛뮤즈",
        src: "/search/달빛뮤즈"
    },
    {
        title: "삐맨",
        src: "/search/삐맨"
    },
    {
        title: "드림텔러",
        src: "/search/드림텔러"
    },
    {
        title: "구불",
        src: "/search/구불"
    },
    {
        title: "빨강도깨비",
        src: "/search/빨강도깨비"
    },
    {
        title: "홍시네마",
        src: "/search/홍시네마"
    },
    {
        title: "띵잘",
        src: "/search/띵잘"
    },
]

export const snsText = [
    {
        title: "Github",
        src: "https://github.com/yunyoungsik",
        icon: <FiGithub />,
    },
    {
        title: "Instagram",
        src: "https://github.com/yunyoungsik",
        icon: <FiInstagram />,
    },
]