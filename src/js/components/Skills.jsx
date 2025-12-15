import { IconCloud } from "../../components/ui/icon-cloud"

const images = [
    "https://images.icon-icons.com/2108/PNG/96/javascript_icon_130900.png",
    "https://images.icon-icons.com/2657/PNG/96/teams_icon_161059.png",
    "https://images.icon-icons.com/478/PNG/96/slack_47017.png",
    "https://images.icon-icons.com/2699/PNG/96/reactjs_logo_icon_168875.png",
    "https://img.icons8.com/?size=48&id=20909&format=png",
    "https://images.icon-icons.com/2415/PNG/96/css_plain_wordmark_logo_icon_146574.png",
    "https://images.icon-icons.com/615/PNG/96/Visual_Studio_icon-icons.com_56597.png",
    "https://images.icon-icons.com/2107/PNG/96/file_type_sql_icon_130152.png",
    "https://img.icons8.com/?size=48&id=13441&format=png",
    "https://img.icons8.com/?size=48&id=22989&format=png",
    "https://img.icons8.com/?size=48&id=122959&format=png",
    "https://img.icons8.com/?size=48&id=20906&format=png",
    "https://img.icons8.com/?size=80&id=LoL4bFzqmAa0&format=png",
    "https://img.icons8.com/?size=48&id=114474&format=png",
    "https://img.icons8.com/?size=48&id=PndQWK6M1Hjo&format=png",
    "https://img.icons8.com/?size=48&id=21896&format=png",
    "https://img.icons8.com/?size=48&id=vgMoO3QkEnKf&format=png",


]
export default function IconCloudDemo() {
    return (
        <div classname="row">
            <div classname="col-12">
                <div classname="col-12">

                </div>
                <div className=" relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg ">
                    <IconCloud images={images} />
                </div>
            </div>
        </div>
    )
}

